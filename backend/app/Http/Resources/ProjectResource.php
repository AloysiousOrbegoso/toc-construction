<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->slug,
            'image' => $this->image,
            'category' => $this->category,
            'title' => $this->title,
            'location' => $this->location,
            'client' => $this->client,
            'status' => $this->status,
            'market' => $this->market,
            'architect' => $this->architect,
            'engineers' => $this->engineers->pluck('name'),
            'contactPerson' => [
                'name' => $this->contact_name,
                'role' => $this->contact_role,
                'phone' => $this->contact_phone,
                'avatar' => $this->contact_avatar,
            ],
            'photos' => $this->photos->pluck('url'),
            'pdfHref' => $this->pdf_href,
        ];
    }
}
