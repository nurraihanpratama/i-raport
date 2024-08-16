<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TapelsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subjects = [
            ['tahun_ajaran' => '2022/2023', 'semester' => 1, 'created_at' => now()],
        ];

        // Insert data mata pelajaran ke tabel subjects
        DB::table('tapels')->insert($subjects);
    }
}
