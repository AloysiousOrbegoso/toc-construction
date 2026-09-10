<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('job_applications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('job_listing_id')->nullable()->constrained()->nullOnDelete();

            $table->string('surname');
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->date('birthday')->nullable();
            $table->string('sex')->nullable();
            $table->string('contact_number');
            $table->string('email');
            $table->string('address')->nullable();
            $table->text('cover_statement')->nullable();

            $table->string('resume_path')->nullable();
            $table->string('resume_original_name')->nullable();

            // Inbox state, for the future admin UI
            $table->string('status')->default('new');
            $table->timestamp('read_at')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('job_applications');
    }
};
