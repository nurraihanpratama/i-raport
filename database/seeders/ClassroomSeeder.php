<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClassroomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subjects = [
            'tapel_id' => 1,
            'teacher_id' => 1,
            'class_level' => 7,
            'class_name' => 'VII A',
            'created_at' => now(),
        ];

        // Insert data mata pelajaran ke tabel subjects
        DB::table('classrooms')->insert($subjects);
    }
}
