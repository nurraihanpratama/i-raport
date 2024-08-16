<?php

namespace App\Modules\Classroom\Controllers;

use App\Modules\Classroom\Actions\ClassroomDestroyAction;
use App\Modules\Classroom\Actions\ClassroomUpdateAction;
use App\Modules\Classroom\Actions\ClassroomCreateAction;
use App\Modules\Classroom\Actions\ClassroomIndexAction;
use App\Modules\Classroom\Actions\ClassroomStoreAction;
use App\Modules\Classroom\Actions\ClassroomEditAction;
use App\Modules\Classroom\Requests\ClassroomRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ClassroomController extends Controller
{
	public function index(Request $request)
	{
		return (new ClassroomIndexAction)->index($request);
	}

	public function create(Request $request)
	{
		return (new ClassroomCreateAction)->create($request);
	}

	public function store(ClassroomRequest $request)
	{
		return (new ClassroomStoreAction)->store($request);
	}

	public function edit(Request $request, string $team_slug, string $id)
	{
		return (new ClassroomEditAction)->edit($request, $id);
	}

	public function update(ClassroomRequest $request, string $team_slug, string $id)
	{
		return (new ClassroomUpdateAction)->update($request, $team_slug, $id);
	}

	public function destroy(string $team_slug, string $id)
	{
		return (new ClassroomDestroyAction)->destroy($team_slug, $id);
	}
}
