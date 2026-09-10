<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Hash;
use PHPMailer\PHPMailer\Exception as MailException;
use PHPMailer\PHPMailer\PHPMailer;

class AuthController
{
    private const MAX_ATTEMPTS = 5;
    private const LOCKOUT_SECONDS = 180;
    private const OTP_SECONDS = 600;

    public function login(Request $request): JsonResponse
    {
        $data = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'string'],
        ]);

        $key = 'login:'.strtolower($data['email']).'|'.$request->ip();

        if (RateLimiter::tooManyAttempts($key, self::MAX_ATTEMPTS)) {
            return response()->json([
                'message' => 'Too many failed attempts. Try again in '.RateLimiter::availableIn($key).' seconds.',
                'retry_after' => RateLimiter::availableIn($key),
            ], 429);
        }

        $credentials = ['email' => strtolower($data['email']), 'password' => $data['password']];
        $token = auth('api')->attempt($credentials);

        if (! $token) {
            RateLimiter::hit($key, self::LOCKOUT_SECONDS);

            return response()->json([
                'message' => 'The email or password is incorrect.',
                'remaining_attempts' => max(0, self::MAX_ATTEMPTS - RateLimiter::attempts($key)),
            ], 422);
        }

        RateLimiter::clear($key);

        return response()->json([
            'message' => 'Signed in successfully.',
            'token' => $token,
            'user' => auth('api')->user(),
        ]);
    }

    public function forgotPassword(Request $request): JsonResponse
    {
        $data = $request->validate(['email' => ['required', 'email']]);
        $email = strtolower($data['email']);
        $user = User::where('email', $email)->first();

        if ($user) {
            $otp = (string) random_int(100000, 999999);
            Cache::put('password-reset:'.$email, $otp, self::OTP_SECONDS);

            try {
                $mailer = new PHPMailer(true);
                if (env('MAIL_HOST')) {
                    $mailer->isSMTP();
                    $mailer->Host = env('MAIL_HOST');
                    $mailer->Port = (int) env('MAIL_PORT', 587);
                    $mailer->SMTPAuth = (bool) env('MAIL_USERNAME');
                    $mailer->Username = env('MAIL_USERNAME');
                    $mailer->Password = env('MAIL_PASSWORD');
                    $mailer->SMTPSecure = env('MAIL_ENCRYPTION', 'tls');
                } else {
                    $mailer->isMail();
                }
                $mailer->setFrom(env('MAIL_FROM_ADDRESS', 'no-reply@tocconstruction.com'), env('MAIL_FROM_NAME', 'TOC Construction'));
                $mailer->addAddress($email, $user->name);
                $mailer->isHTML(true);
                $mailer->Subject = 'Your TOC Construction password reset code';
                $mailer->Body = '<p>Your password reset code is:</p><p style="font-size:24px;font-weight:bold;letter-spacing:6px">'.$otp.'</p><p>This code expires in 10 minutes.</p>';
                $mailer->send();
            } catch (MailException $exception) {
                Cache::forget('password-reset:'.$email);
                return response()->json(['message' => 'Unable to send the reset email. Check the mail settings and try again.'], 503);
            }
        }

        return response()->json([
            'message' => 'If an account exists for that email, a reset code has been sent.',
        ]);
    }

    public function resetPassword(Request $request): JsonResponse
    {
        $data = $request->validate([
            'email' => ['required', 'email'],
            'otp' => ['required', 'digits:6'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
        $email = strtolower($data['email']);
        $expectedOtp = Cache::get('password-reset:'.$email);
        $user = User::where('email', $email)->first();

        if (! $user || ! $expectedOtp || ! hash_equals((string) $expectedOtp, (string) $data['otp'])) {
            return response()->json(['message' => 'The reset code is invalid or has expired.'], 422);
        }

        $user->update(['password' => Hash::make($data['password'])]);
        Cache::forget('password-reset:'.$email);

        return response()->json(['message' => 'Password reset successfully.']);
    }

    public function me(Request $request): JsonResponse
    {
        return response()->json(['user' => $request->user()]);
    }
}