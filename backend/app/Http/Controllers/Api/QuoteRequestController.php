<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreQuoteRequestRequest;
use App\Models\QuoteRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class QuoteRequestController extends Controller
{
    public function store(StoreQuoteRequestRequest $request): JsonResponse
    {
        $data = $request->safe()->except(['website', 'attachments']);

        $quoteRequest = DB::transaction(function () use ($request, $data) {
            $quoteRequest = QuoteRequest::create([
                'first_name' => $data['firstName'],
                'last_name' => $data['lastName'],
                'company_name' => $data['companyName'] ?? null,
                'email' => $data['email'],
                'phone' => $data['phone'],
                'role' => $data['role'] ?? null,
                'country' => $data['country'] ?? null,
                'city_province' => $data['cityProvince'] ?? null,
                'project_type' => $data['projectType'] ?? null,
                'budget' => $data['budget'] ?? null,
                'location' => $data['location'] ?? null,
                'timeline' => $data['timeline'] ?? null,
                'scope' => $data['scope'],
                'notes' => $data['notes'] ?? null,
            ]);

            foreach ($request->file('attachments', []) as $file) {
                $path = $file->store('quote-attachments', 'public');

                $quoteRequest->attachments()->create([
                    'path' => $path,
                    'original_name' => $file->getClientOriginalName(),
                    'mime_type' => $file->getClientMimeType(),
                    'size' => $file->getSize(),
                ]);
            }

            return $quoteRequest;
        });

        return response()->json([
            'message' => 'Thank you. Our team will review your request and get back to you shortly.',
            'id' => $quoteRequest->id,
        ], 201);
    }
}
