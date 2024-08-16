<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Insert Admins
        $adminIds = [];
        for ($i = 0; $i < 2; $i++) {
            $adminIds[] = DB::table('users')->insertGetId([
                'username' => 'admin' . ($i + 1),
                'email' => fake()->unique()->safeEmail(),
                'password' => Hash::make('password'),
                'role' => 'admin',
                'status' => 'active',
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // Insert Teachers
        $teacherIds = [];
        for ($i = 0; $i < 3; $i++) {
            $teacherIds[] = DB::table('users')->insertGetId([
                'username' => 'teacher' . ($i + 1),
                'email' => fake()->unique()->safeEmail(),
                'password' => Hash::make('password'),
                'role' => 'teacher',
                'status' => 'active',
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // Insert Students
        for ($i = 0; $i < 15; $i++) {
            DB::table('users')->insert([
                'username' => 'student' . ($i + 1),
                'email' => fake()->unique()->safeEmail(),
                'password' => Hash::make('password'),
                'role' => 'student',
                'status' => 'active',
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
