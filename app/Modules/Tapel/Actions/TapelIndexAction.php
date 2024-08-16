<?php

namespace App\Modules\Tapel\Actions;

use App\Modules\Tapel\Table\TapelDataTable;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TapelIndexAction
{
	public function index(Request $request)
	{
		$page = [
			'title' => 'Daftar Tapel',
		];

		$options = [
			//
		];

		$collection = (new TapelDataTable)->generate($request);

		$props = compact('page', 'options', 'collection');

		return Inertia::render('Public/Tapel/Index', $props);
	}
}
