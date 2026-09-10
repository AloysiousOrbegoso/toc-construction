<?php

namespace Database\Seeders;

use App\Models\JobListing;
use Illuminate\Database\Seeder;

class JobListingSeeder extends Seeder
{
    public function run(): void
    {
        $jobs = [
            [
                'slug' => 'senior-engineer',
                'title' => 'Senior Engineer',
                'employment_type' => 'Full-Time',
                'salary' => '$80,000 - $120,000 / Year',
                'location' => 'Metro Manila, PH',
                'description' => 'We are seeking a highly skilled Senior Engineer to lead our structural design team. You will be responsible for overseeing complex construction projects from conception to completion, ensuring all engineering standards and safety protocols are met while maintaining high-quality output and efficiency.',
                'responsibilities' => [
                    'Lead and mentor a team of junior engineers and draftsmen.',
                    'Review and approve structural designs, calculations, and technical specifications.',
                    'Coordinate with architects, contractors, and clients to ensure project alignment.',
                    'Conduct site inspections and provide technical solutions for on-site challenges.',
                    'Ensure compliance with local building codes and international safety standards.',
                ],
            ],
        ];

        foreach ($jobs as $data) {
            $job = JobListing::updateOrCreate(
                ['slug' => $data['slug']],
                [
                    'title' => $data['title'],
                    'employment_type' => $data['employment_type'],
                    'salary' => $data['salary'],
                    'location' => $data['location'],
                    'description' => $data['description'],
                ]
            );

            $job->responsibilities()->delete();
            foreach ($data['responsibilities'] as $index => $text) {
                $job->responsibilities()->create(['text' => $text, 'sort_order' => $index]);
            }
        }
    }
}
