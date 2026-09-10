<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreJobApplicationRequest;
use App\Models\JobApplication;
use App\Models\JobListing;
use Illuminate\Http\JsonResponse;

class JobApplicationController extends Controller
{
    public function store(StoreJobApplicationRequest $request): JsonResponse
    {
        $data = $request->safe()->except(['website', 'resume', 'position']);

        $resume = $request->file('resume');
        $resumePath = $resume->store('resumes', 'public');

        $jobListingId = $request->filled('position')
            ? JobListing::where('slug', $request->string('position'))->value('id')
            : null;

        $application = JobApplication::create([
            'job_listing_id' => $jobListingId,
            'surname' => $data['surname'],
            'first_name' => $data['firstName'],
            'middle_name' => $data['middleName'] ?? null,
            'birthday' => $data['birthday'] ?? null,
            'sex' => $data['sex'] ?? null,
            'contact_number' => $data['contactNumber'],
            'email' => $data['email'],
            'address' => $data['address'] ?? null,
            'cover_statement' => $data['coverStatement'] ?? null,
            'resume_path' => $resumePath,
            'resume_original_name' => $resume->getClientOriginalName(),
        ]);

        return response()->json([
            'message' => 'Thank you for applying. Our team will review your application and get back to you shortly.',
            'id' => $application->id,
        ], 201);
    }
}
