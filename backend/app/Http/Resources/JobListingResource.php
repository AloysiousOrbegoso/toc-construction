<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class JobListingResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->slug,
            'title' => $this->title,
            'employmentType' => $this->employment_type,
            'salary' => $this->salary,
            'location' => $this->location,
            'description' => $this->description,
            'responsibilities' => $this->responsibilities->pluck('text'),
            'applyHref' => '#application-form',
        ];
    }
}
