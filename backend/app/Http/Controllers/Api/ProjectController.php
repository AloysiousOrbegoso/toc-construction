<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ProjectController extends Controller
{
    public function index(Request $request): AnonymousResourceCollection
    {
        $query = Project::query()->with(['photos', 'engineers']);

        if ($request->filled('category') && $request->string('category')->lower() !== 'all') {
            $query->where('category', $request->string('category'));
        }

        return ProjectResource::collection($query->latest()->get());
    }

    public function show(Project $project): ProjectResource
    {
        $project->load(['photos', 'engineers']);

        return new ProjectResource($project);
    }
}
