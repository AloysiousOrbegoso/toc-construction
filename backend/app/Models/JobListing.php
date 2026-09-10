<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class JobListing extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug',
        'title',
        'employment_type',
        'salary',
        'location',
        'description',
    ];

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function responsibilities(): HasMany
    {
        return $this->hasMany(JobResponsibility::class)->orderBy('sort_order');
    }

    public function applications(): HasMany
    {
        return $this->hasMany(JobApplication::class);
    }
}
