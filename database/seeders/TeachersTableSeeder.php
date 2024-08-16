<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TeachersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // Get all teacher users
        $teacherUsers = DB::table('users')->where('role', 'teacher')->get();

        $titles = [
            'S.Kom.',
            'S.T.',
            'S.H.',
            'S.Pd.',
            'S.Psi.',
            'S.K.',
            'S.Ag.',
            'M.Kom.',
            'M.T.',
            'M.H.',
            'M.Pd.',
            'M.Psi.',
            'M.K.'
        ];
        foreach ($teacherUsers as $user) {
            DB::table('teachers')->insert([
                'user_id' => $user->id,
                'nip' => fake()->unique()->numerify('#########'),
                'name' => fake()->name,
                'fullname' => fake()->name,
                'title' => fake()->randomElement($titles),
                'gender' => fake()->randomElement(['L', 'P']),
                'place_of_birth' => fake()->city,
                'date_of_birth' => fake()->date,
                'nuptk' => fake()->unique()->numerify('############'),
                'gol_guru' => 'IV/a',
                'address' => fake()->address,
                'avatar' => fake()->imageUrl,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
