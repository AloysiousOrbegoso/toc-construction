<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('quote_requests', function (Blueprint $table) {
            $table->id();

            // Contact information
            $table->string('first_name');
            $table->string('last_name');
            $table->string('company_name')->nullable();
            $table->string('email');
            $table->string('phone');
            $table->string('role')->nullable();
            $table->string('country')->nullable();
            $table->string('city_province')->nullable();

            // Project information
            $table->string('project_type')->nullable();
            $table->string('budget')->nullable();
            $table->string('location')->nullable();
            $table->string('timeline')->nullable();
            $table->text('scope')->nullable();

            // Attachments step
            $table->text('notes')->nullable();

            // Inbox state, for the future admin UI
            $table->string('status')->default('new');
            $table->timestamp('read_at')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('quote_requests');
    }
};
