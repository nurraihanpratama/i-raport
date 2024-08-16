<?php

namespace App\Modules\Teacher\Actions;

use App\Modules\Teacher\Table\TeacherDataTable;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeacherIndexAction
{
	public function index(Request $request)
	{
		$page = [
			'title' => 'Daftar Guru',
		];

		$options = [
			//
		];

		$collection = (new TeacherDataTable)->generate($request);

		$props = compact('page', 'options', 'collection');

		return Inertia::render('Public/Teacher/Index', $props);
	}
}
