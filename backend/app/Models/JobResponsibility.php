<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class JobResponsibility extends Model
{
    protected $fillable = ['job_listing_id', 'text', 'sort_order'];

    public function jobListing(): BelongsTo
    {
        return $this->belongsTo(JobListing::class);
    }
}
