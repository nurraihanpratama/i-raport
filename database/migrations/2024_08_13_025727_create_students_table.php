<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unsigned();
            $table->bigInteger('classroom_id')->unsigned()->nullable();
            $table->string('nis', 10)->unique();
            $table->char('nisn', 12)->unique()->nullable();
            $table->char('nik', 16)->unique()->nullable();
            $table->string('fullname', 100);
            $table->string('place_of_birth', 50);
            $table->date('date_of_birth');
            $table->string('gender', 50);
            // $table->enum('gender', ['L', 'P', 'Other']);
            $table->string('religion', 50);
            $table->string('mobile', 13)->unique()->nullable();
            $table->string('student_address', 225)->nullable();
            $table->string('father_name', 100);
            $table->string('mother_name', 100);
            $table->string('father_job', 100);
            $table->string('mother_job', 100);
            $table->string('parent_address', 225)->nullable();
            $table->string('student_guardian_name', 100)->nullable();
            $table->string('student_guardian_job', 100)->nullable();
            $table->string('student_guardian_address', 225)->nullable();
            $table->string('avatar');
            $table->string('status', 50);
            // $table->enum('status', ['1', '2', '3']);

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
