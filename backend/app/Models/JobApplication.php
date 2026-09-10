<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class JobApplication extends Model
{
    use HasFactory;

    protected $fillable = [
        'job_listing_id',
        'surname',
        'first_name',
        'middle_name',
        'birthday',
        'sex',
        'contact_number',
        'email',
        'address',
        'cover_statement',
        'resume_path',
        'resume_original_name',
        'status',
        'read_at',
    ];

    protected $casts = [
        'birthday' => 'date',
        'read_at' => 'datetime',
    ];

    public function jobListing(): BelongsTo
    {
        return $this->belongsTo(JobListing::class);
    }
}
