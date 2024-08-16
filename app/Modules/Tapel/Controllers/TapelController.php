<?php

namespace App\Modules\Tapel\Controllers;

use App\Modules\Tapel\Actions\TapelDestroyAction;
use App\Modules\Tapel\Actions\TapelUpdateAction;
use App\Modules\Tapel\Actions\TapelCreateAction;
use App\Modules\Tapel\Actions\TapelIndexAction;
use App\Modules\Tapel\Actions\TapelStoreAction;
use App\Modules\Tapel\Actions\TapelEditAction;
use App\Modules\Tapel\Requests\TapelRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TapelController extends Controller
{
	public function index(Request $request)
	{
		return (new TapelIndexAction)->index($request);
	}

	public function create(Request $request)
	{
		return (new TapelCreateAction)->create($request);
	}

	public function store(TapelRequest $request)
	{
		return (new TapelStoreAction)->store($request);
	}

	public function edit(Request $request, string $team_slug, string $id)
	{
		return (new TapelEditAction)->edit($request, $id);
	}

	public function update(TapelRequest $request, string $team_slug, string $id)
	{
		return (new TapelUpdateAction)->update($request, $team_slug, $id);
	}

	public function destroy(string $team_slug, string $id)
	{
		return (new TapelDestroyAction)->destroy($team_slug, $id);
	}
}
