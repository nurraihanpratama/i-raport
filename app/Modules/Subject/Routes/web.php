<?php

use App\Modules\Subject\Controllers\SubjectController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Subject Web Routes
|--------------------------------------------------------------------------
|
*/

Route::prefix('{role}/')
	->middleware(['auth', 'verified', 'CheckRoleIsExisting'])
	->group(function () {
		Route::resource("subject", SubjectController::class);
	});
