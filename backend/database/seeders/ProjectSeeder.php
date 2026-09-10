<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        $projects = [
            [
                'slug' => 'colorado-housing',
                'image' => 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
                'category' => 'Furnitures',
                'title' => 'Colorado Housing Departments',
                'location' => 'Denver, CO',
                'client' => 'Denver Housing Authority',
                'status' => 'Complete',
                'market' => 'Public Housing',
                'architect' => 'MJ Fields',
                'engineers' => ['BHC (Civil)', 'MEG (Electrical)', 'Structural Engineering Associates, Inc. (Structural)'],
                'contact' => ['name' => 'Laura Bennett', 'role' => 'Project Director, Denver', 'phone' => '+1 (303) 555-0142', 'avatar' => 'https://randomuser.me/api/portraits/women/44.jpg'],
                'photos' => [
                    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
                ],
                'pdf_href' => null,
            ],
            [
                'slug' => 'ny-buildings',
                'image' => 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop',
                'category' => 'Infrastructure',
                'title' => 'New York Buildings',
                'location' => 'New York City',
                'client' => 'NYC Development Corp',
                'status' => 'In Progress',
                'market' => 'Commercial',
                'architect' => 'R. Alvarez & Partners',
                'engineers' => ['BHC (Civil)', 'Voltage Engineering (Electrical)', 'Structural Engineering Associates, Inc. (Structural)'],
                'contact' => ['name' => 'Marcus Lee', 'role' => 'Site Manager, New York City', 'phone' => '+1 (212) 555-0198', 'avatar' => 'https://randomuser.me/api/portraits/men/22.jpg'],
                'photos' => [
                    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
                ],
                'pdf_href' => null,
            ],
            [
                'slug' => 'california-homes',
                'image' => 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
                'category' => 'Homes',
                'title' => 'California Homes',
                'location' => 'Cal, USA',
                'client' => 'California Citizen',
                'status' => 'Complete',
                'market' => 'Suburbans',
                'architect' => 'ACI Roland',
                'engineers' => ['BHC (Civil)', 'MEG (Electrical)', 'Structural Engineering Associates, Inc. (Structural)'],
                'contact' => ['name' => 'Glen Austin', 'role' => 'VP President, Kansas City', 'phone' => '+1 (816) 555-0173', 'avatar' => 'https://randomuser.me/api/portraits/men/45.jpg'],
                'photos' => [
                    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop',
                ],
                'pdf_href' => null,
            ],
            [
                'slug' => 'colorado-housing-2',
                'image' => 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
                'category' => 'Furnitures',
                'title' => 'Colorado Housing Departments',
                'location' => 'Denver, CO',
                'client' => 'Denver Housing Authority',
                'status' => 'Complete',
                'market' => 'Public Housing',
                'architect' => 'MJ Fields',
                'engineers' => ['BHC (Civil)', 'MEG (Electrical)', 'Structural Engineering Associates, Inc. (Structural)'],
                'contact' => ['name' => 'Priya Nair', 'role' => 'Project Director, Denver', 'phone' => '+1 (303) 555-0187', 'avatar' => 'https://randomuser.me/api/portraits/women/65.jpg'],
                'photos' => [
                    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
                ],
                'pdf_href' => null,
            ],
            [
                'slug' => 'ny-buildings-2',
                'image' => 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
                'category' => 'Infrastructure',
                'title' => 'New York Buildings',
                'location' => 'New York City',
                'client' => 'NYC Development Corp',
                'status' => 'Complete',
                'market' => 'Commercial',
                'architect' => 'R. Alvarez & Partners',
                'engineers' => ['BHC (Civil)', 'Voltage Engineering (Electrical)', 'Structural Engineering Associates, Inc. (Structural)'],
                'contact' => ['name' => 'Dana Brooks', 'role' => 'Site Manager, New York City', 'phone' => '+1 (212) 555-0134', 'avatar' => 'https://randomuser.me/api/portraits/women/33.jpg'],
                'photos' => [
                    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
                ],
                'pdf_href' => null,
            ],
            [
                'slug' => 'california-homes-2',
                'image' => 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop',
                'category' => 'Homes',
                'title' => 'California Homes',
                'location' => 'Cal, USA',
                'client' => 'California Citizen',
                'status' => 'Complete',
                'market' => 'Suburbans',
                'architect' => 'ACI Roland',
                'engineers' => ['BHC (Civil)', 'MEG (Electrical)', 'Structural Engineering Associates, Inc. (Structural)'],
                'contact' => ['name' => 'Glen Austin', 'role' => 'VP President, Kansas City', 'phone' => '+1 (816) 555-0173', 'avatar' => 'https://randomuser.me/api/portraits/men/45.jpg'],
                'photos' => [
                    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop',
                ],
                'pdf_href' => null,
            ],
            [
                'slug' => 'texas-commercial',
                'image' => 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
                'category' => 'Infrastructure',
                'title' => 'Texas Commercial Complex',
                'location' => 'Austin, TX',
                'client' => 'Austin Commercial Group',
                'status' => 'In Progress',
                'market' => 'Commercial',
                'architect' => 'R. Alvarez & Partners',
                'engineers' => ['BHC (Civil)', 'Voltage Engineering (Electrical)', 'Structural Engineering Associates, Inc. (Structural)'],
                'contact' => ['name' => 'Carlos Mendez', 'role' => 'Project Director, Austin', 'phone' => '+1 (512) 555-0156', 'avatar' => 'https://randomuser.me/api/portraits/men/61.jpg'],
                'photos' => [
                    'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
                ],
                'pdf_href' => null,
            ],
            [
                'slug' => 'florida-residence',
                'image' => 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop',
                'category' => 'Homes',
                'title' => 'Florida Luxury Residence',
                'location' => 'Miami, FL',
                'client' => 'Private Client',
                'status' => 'Complete',
                'market' => 'Luxury Residential',
                'architect' => 'ACI Roland',
                'engineers' => ['BHC (Civil)', 'MEG (Electrical)', 'Structural Engineering Associates, Inc. (Structural)'],
                'contact' => ['name' => 'Sofia Ramirez', 'role' => 'VP President, Miami', 'phone' => '+1 (305) 555-0121', 'avatar' => 'https://randomuser.me/api/portraits/women/50.jpg'],
                'photos' => [
                    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop',
                ],
                'pdf_href' => null,
            ],
            [
                'slug' => 'seattle-interiors',
                'image' => 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
                'category' => 'Furnitures',
                'title' => 'Seattle Interior Fit-Out',
                'location' => 'Seattle, WA',
                'client' => 'Seattle Workspace Group',
                'status' => 'Complete',
                'market' => 'Commercial Interiors',
                'architect' => 'MJ Fields',
                'engineers' => ['BHC (Civil)', 'MEG (Electrical)', 'Structural Engineering Associates, Inc. (Structural)'],
                'contact' => ['name' => 'Ethan Cole', 'role' => 'Project Director, Seattle', 'phone' => '+1 (206) 555-0109', 'avatar' => 'https://randomuser.me/api/portraits/men/78.jpg'],
                'photos' => [
                    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
                ],
                'pdf_href' => null,
            ],
        ];

        foreach ($projects as $data) {
            $project = Project::updateOrCreate(
                ['slug' => $data['slug']],
                [
                    'image' => $data['image'],
                    'category' => $data['category'],
                    'title' => $data['title'],
                    'location' => $data['location'],
                    'client' => $data['client'],
                    'status' => $data['status'],
                    'market' => $data['market'],
                    'architect' => $data['architect'],
                    'contact_name' => $data['contact']['name'],
                    'contact_role' => $data['contact']['role'],
                    'contact_phone' => $data['contact']['phone'],
                    'contact_avatar' => $data['contact']['avatar'],
                    'pdf_href' => $data['pdf_href'],
                ]
            );

            $project->engineers()->delete();
            foreach ($data['engineers'] as $index => $name) {
                $project->engineers()->create(['name' => $name, 'sort_order' => $index]);
            }

            $project->photos()->delete();
            foreach ($data['photos'] as $index => $url) {
                $project->photos()->create(['url' => $url, 'sort_order' => $index]);
            }
        }
    }
}
