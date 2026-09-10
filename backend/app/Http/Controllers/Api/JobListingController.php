<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\JobListingResource;
use App\Models\JobListing;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class JobListingController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        $jobs = JobListing::query()->with('responsibilities')->latest()->get();

        return JobListingResource::collection($jobs);
    }

    public function show(JobListing $job): JobListingResource
    {
        $job->load('responsibilities');

        return new JobListingResource($job);
    }
}
