<?php

use App\Http\Controllers\Api\JobApplicationController;
use App\Http\Controllers\Api\JobListingController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\QuoteRequestController;
use Illuminate\Support\Facades\Route;

Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/projects/{project:slug}', [ProjectController::class, 'show']);

Route::get('/jobs', [JobListingController::class, 'index']);
Route::get('/jobs/{job:slug}', [JobListingController::class, 'show']);

Route::post('/quote-requests', [QuoteRequestController::class, 'store'])
    ->middleware('throttle:5,1');

Route::post('/job-applications', [JobApplicationController::class, 'store'])
    ->middleware('throttle:5,1');
