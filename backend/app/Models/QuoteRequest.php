<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class QuoteRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'company_name',
        'email',
        'phone',
        'role',
        'country',
        'city_province',
        'project_type',
        'budget',
        'location',
        'timeline',
        'scope',
        'notes',
        'status',
        'read_at',
    ];

    protected $casts = [
        'read_at' => 'datetime',
    ];

    public function attachments(): HasMany
    {
        return $this->hasMany(QuoteRequestAttachment::class);
    }
}
