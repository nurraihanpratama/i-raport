<?php

namespace Database\Seeders;

use App\Models\User;
use App\Modules\Student\Models\Student;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Fetch user_ids from users table where role is 'student'
        // Get all student users
        $studentUsers = DB::table('users')->where('role', 'student')->get();

        foreach ($studentUsers as $user) {
            DB::table('students')->insert([
                'user_id' => $user->id,
                'classroom_id' => 1,
                'nis' => fake()->unique()->numerify('##########'),
                'nisn' => fake()->unique()->numerify('############'),
                'nik' => fake()->unique()->numerify('##############'),
                'fullname' => fake()->name(),
                'place_of_birth' => fake()->city(),
                'date_of_birth' => fake()->date(),
                'gender' => fake()->randomElement(['L', 'P']),
                'religion' => fake()->randomElement(['islam', 'kristen', 'budha']),
                'mobile' => fake()->unique()->numerify('###########'),
                'student_address' => fake()->address(),
                'father_name' => fake()->name(),
                'mother_name' => fake()->name(),
                'father_job' => fake()->word(),
                'mother_job' => fake()->word(),
                'parent_address' => fake()->address(),
                'student_guardian_name' => fake()->optional()->name(),
                'student_guardian_job' => fake()->optional()->word(),
                'student_guardian_address' => fake()->optional()->address(),
                'avatar' => fake()->imageUrl(),
                'status' => fake()->randomElement(['active', 'inactive']),
            ]);
        }
    }
}
