<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubjectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Data mata pelajaran
        $subjects = [
            ['tapel_id' => 1, 'name' => 'Matematika', 'code' => 'MAT'],
            ['tapel_id' => 1, 'name' => 'Bahasa Indonesia', 'code' => 'BIND'],
            ['tapel_id' => 1, 'name' => 'Bahasa Inggris', 'code' => 'BING'],
            ['tapel_id' => 1, 'name' => 'IPA', 'code' => 'IPA'],
            ['tapel_id' => 1, 'name' => 'IPS', 'code' => 'IPS'],
            ['tapel_id' => 1, 'name' => 'Pendidikan Pancasila dan Kewarganegaraan', 'code' => 'PPKn'],
            ['tapel_id' => 1, 'name' => 'Seni Budaya', 'code' => 'SB'],
            ['tapel_id' => 1, 'name' => 'Pendidikan Jasmani, Olahraga, dan Kesehatan', 'code' => 'PJOK'],
            ['tapel_id' => 1, 'name' => 'Teknologi Informasi dan Komunikasi', 'code' => 'TIK'],
            ['tapel_id' => 1, 'name' => 'Agama Islam', 'code' => 'AGI'],
            ['tapel_id' => 1, 'name' => 'Agama Kristen', 'code' => 'AGK'],
            ['tapel_id' => 1, 'name' => 'Agama Katolik', 'code' => 'AGK'],
            ['tapel_id' => 1, 'name' => 'Agama Hindu', 'code' => 'AGH'],
            ['tapel_id' => 1, 'name' => 'Agama Buddha', 'code' => 'AGB'],
        ];

        // Insert data mata pelajaran ke tabel subjects
        DB::table('subjects')->insert($subjects);
    }
}
