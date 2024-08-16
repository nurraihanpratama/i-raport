<?php

namespace App\Modules\Classroom\Actions;

use App\Modules\Classroom\Models\Classroom;
use App\Modules\Classroom\Table\ClassroomDataTable;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClassroomIndexAction
{
	public function index(Request $request)
	{
		$page = [
			'title' => 'Daftar Kelas',
		];

		$options = [
			//
		];

		$collection = (new ClassroomDataTable)->generate($request);

		$props = compact('page', 'options', 'collection');

		return Inertia::render('Public/Classroom/Index', $props);
	}
}
