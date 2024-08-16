<?php

namespace Database\Factories;

use App\Models\User;
use App\Modules\Student\Models\Student;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    protected $model = Student::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Ambil user dengan role 'student' dan pilih yang belum dipakai
        $userIds = User::where('role', 'student')->pluck('id');

        return [
            'user_id' => $this->faker->randomElement($userIds),
            'classroom_id' => 1,
            'nis' => $this->faker->unique()->numerify('##########'),
            'nisn' => $this->faker->unique()->numerify('############'),
            'nik' => $this->faker->unique()->numerify('##############'),
            'fullname' => $this->faker->name(),
            'place_of_birth' => $this->faker->city(),
            'date_of_birth' => $this->faker->date(),
            'gender' => $this->faker->randomElement(['L', 'P']),
            'religion' => $this->faker->randomElement(['islam', 'kristen', 'budha']),
            'mobile' => $this->faker->unique()->numerify('###########'),
            'student_address' => $this->faker->address(),
            'father_name' => $this->faker->name(),
            'mother_name' => $this->faker->name(),
            'father_job' => $this->faker->word(),
            'mother_job' => $this->faker->word(),
            'parent_address' => $this->faker->address(),
            'student_guardian_name' => $this->faker->optional()->name(),
            'student_guardian_job' => $this->faker->optional()->word(),
            'student_guardian_address' => $this->faker->optional()->address(),
            'avatar' => $this->faker->imageUrl(),
            'status' => $this->faker->randomElement(['active', 'inactive']),
        ];
    }
}
