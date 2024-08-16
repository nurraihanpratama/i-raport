<?php

namespace App\Modules\Subject\Actions;

use App\Modules\Subject\Table\SubjectDataTable;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubjectIndexAction
{
	public function index(Request $request)
	{
		$page = [
			'title' => 'Daftar Mata Pelajaran',
		];

		$options = [
			//
		];

		$collection = (new SubjectDataTable)->generate($request);

		$props = compact('page', 'options', 'collection');

		return Inertia::render('Public/Subject/Index', $props);
	}
}
