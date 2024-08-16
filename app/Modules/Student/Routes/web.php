<?php

use App\Modules\Student\Controllers\StudentController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Student Web Routes
|--------------------------------------------------------------------------
|
*/

Route::prefix('{role}/')
	->middleware(['auth', 'verified', 'CheckRoleIsExisting'])
	->group(function () {
		Route::resource("student", StudentController::class);
	});
