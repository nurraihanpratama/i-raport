<?php

namespace App\Modules\Subject\Controllers;

use App\Modules\Subject\Actions\SubjectDestroyAction;
use App\Modules\Subject\Actions\SubjectUpdateAction;
use App\Modules\Subject\Actions\SubjectCreateAction;
use App\Modules\Subject\Actions\SubjectIndexAction;
use App\Modules\Subject\Actions\SubjectStoreAction;
use App\Modules\Subject\Actions\SubjectEditAction;
use App\Modules\Subject\Requests\SubjectRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SubjectController extends Controller
{
	public function index(Request $request)
	{
		return (new SubjectIndexAction)->index($request);
	}

	public function create(Request $request)
	{
		return (new SubjectCreateAction)->create($request);
	}

	public function store(SubjectRequest $request)
	{
		return (new SubjectStoreAction)->store($request);
	}

	public function edit(Request $request, string $team_slug, string $id)
	{
		return (new SubjectEditAction)->edit($request, $id);
	}

	public function update(SubjectRequest $request, string $team_slug, string $id)
	{
		return (new SubjectUpdateAction)->update($request, $team_slug, $id);
	}

	public function destroy(string $team_slug, string $id)
	{
		return (new SubjectDestroyAction)->destroy($team_slug, $id);
	}
}
