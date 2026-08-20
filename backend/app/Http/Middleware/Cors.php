<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Minimal hand-rolled CORS handler so the API can be called from the
 * frontend's dev server and production domain without pulling in the
 * full fruitcake/laravel-cors package. Allowed origins come from the
 * CORS_ALLOWED_ORIGINS env var (comma-separated).
 */
class Cors
{
    public function handle(Request $request, Closure $next): Response
    {
        $allowedOrigins = array_filter(array_map(
            'trim',
            explode(',', env('CORS_ALLOWED_ORIGINS', ''))
        ));

        $origin = $request->headers->get('Origin');

        $response = $request->getMethod() === 'OPTIONS'
            ? response('', 204)
            : $next($request);

        if ($origin && in_array($origin, $allowedOrigins, true)) {
            $response->headers->set('Access-Control-Allow-Origin', $origin);
            $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
            $response->headers->set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept');
            $response->headers->set('Access-Control-Allow-Credentials', 'true');
        }

        return $response;
    }
}
