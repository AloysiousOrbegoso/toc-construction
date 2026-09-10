<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug',
        'title',
        'category',
        'location',
        'client',
        'status',
        'market',
        'architect',
        'image',
        'pdf_href',
        'contact_name',
        'contact_role',
        'contact_phone',
        'contact_avatar',
    ];

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function photos(): HasMany
    {
        return $this->hasMany(ProjectPhoto::class)->orderBy('sort_order');
    }

    public function engineers(): HasMany
    {
        return $this->hasMany(ProjectEngineer::class)->orderBy('sort_order');
    }
}
