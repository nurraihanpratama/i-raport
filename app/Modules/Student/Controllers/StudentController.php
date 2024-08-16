<?php

namespace App\Modules\Student\Controllers;

use App\Modules\Student\Actions\StudentDestroyAction;
use App\Modules\Student\Actions\StudentUpdateAction;
use App\Modules\Student\Actions\StudentCreateAction;
use App\Modules\Student\Actions\StudentIndexAction;
use App\Modules\Student\Actions\StudentStoreAction;
use App\Modules\Student\Actions\StudentEditAction;
use App\Modules\Student\Requests\StudentRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StudentController extends Controller
{
	public function index(Request $request)
	{
		return (new StudentIndexAction)->index($request);
	}

	public function create(Request $request)
	{
		return (new StudentCreateAction)->create($request);
	}

	public function store(StudentRequest $request)
	{
		return (new StudentStoreAction)->store($request);
	}

	public function edit(Request $request, string $team_slug, string $id)
	{
		return (new StudentEditAction)->edit($request, $id);
	}

	public function update(StudentRequest $request, string $team_slug, string $id)
	{
		return (new StudentUpdateAction)->update($request, $team_slug, $id);
	}

	public function destroy(string $team_slug, string $id)
	{
		return (new StudentDestroyAction)->destroy($team_slug, $id);
	}
}
