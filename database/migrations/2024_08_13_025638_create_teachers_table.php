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
        //
        Schema::create('teachers', function (Blueprint $table) {
            $table->id()->unsigned();
            $table->bigInteger('user_id')->unsigned();
            $table->char('nip', 18);
            $table->string('name', 225);
            $table->string('fullname', 225);
            $table->string('title', 225)->nullable();
            $table->string('gender', 50)->nullable();
            // $table->enum('gender', ['L', 'P', 'Other']);
            $table->string('place_of_birth', 50);
            $table->date('date_of_birth');
            $table->string('nuptk', 16);
            $table->string('gol_guru', 5)->nullable();
            // $table->enum('ket_guru', ['PNS', 'GTT APBD', 'GTT Komite'])->nullable();
            $table->string('address', 225)->nullable();
            $table->string('avatar', 225)->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teachers');
    }
};
