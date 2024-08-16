<?php

use App\Modules\Teacher\Controllers\TeacherController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Teacher Web Routes
|--------------------------------------------------------------------------
|
*/

Route::prefix('{role}/')
	->middleware(['auth', 'verified', 'CheckRoleIsExisting'])
	->group(function () {
		Route::resource("teacher", TeacherController::class);
	});
