<?php

use App\Modules\Classroom\Controllers\ClassroomController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Classroom Web Routes
|--------------------------------------------------------------------------
|
*/

Route::prefix('{role}/')
	->middleware(['auth', 'verified', 'CheckRoleIsExisting'])
	->group(function () {
		Route::resource("classroom", ClassroomController::class);
	});
