<?php

namespace App\Modules\Teacher\Controllers;

use App\Modules\Teacher\Actions\TeacherDestroyAction;
use App\Modules\Teacher\Actions\TeacherUpdateAction;
use App\Modules\Teacher\Actions\TeacherCreateAction;
use App\Modules\Teacher\Actions\TeacherIndexAction;
use App\Modules\Teacher\Actions\TeacherStoreAction;
use App\Modules\Teacher\Actions\TeacherEditAction;
use App\Modules\Teacher\Requests\TeacherRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TeacherController extends Controller
{
	public function index(Request $request)
	{
		return (new TeacherIndexAction)->index($request);
	}

	public function create(Request $request)
	{
		return (new TeacherCreateAction)->create($request);
	}

	public function store(TeacherRequest $request)
	{
		return (new TeacherStoreAction)->store($request);
	}

	public function edit(Request $request, string $team_slug, string $id)
	{
		return (new TeacherEditAction)->edit($request, $id);
	}

	public function update(TeacherRequest $request, string $team_slug, string $id)
	{
		return (new TeacherUpdateAction)->update($request, $team_slug, $id);
	}

	public function destroy(string $team_slug, string $id)
	{
		return (new TeacherDestroyAction)->destroy($team_slug, $id);
	}
}
