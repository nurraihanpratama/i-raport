<?php

use App\Modules\Tapel\Controllers\TapelController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Tapel Web Routes
|--------------------------------------------------------------------------
|
*/

Route::prefix('{role}/')
	->middleware(['auth', 'verified', 'CheckRoleIsExisting'])
	->group(function () {
		Route::resource("tapel", TapelController::class);
	});
