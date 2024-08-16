<?php

namespace App\Modules\Student\Actions;

use App\Modules\Classroom\Models\Classroom;
use App\Modules\Student\Table\StudentDataTable;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentIndexAction
{
	public function index(Request $request)
	{
		$page = [
			'title' => 'Daftar Peserta Didik',
		];

		$options = [
			'classrooms' => Classroom::get(),
		];

		$collection = (new StudentDataTable)->generate($request);

		$props = compact('page', 'options', 'collection');

		return Inertia::render('Public/Student/Index', $props);
	}
}
