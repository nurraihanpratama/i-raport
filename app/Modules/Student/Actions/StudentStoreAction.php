<?php

namespace App\Modules\Student\Actions;

use App\Modules\Student\Actions\SubActions\BuildStudentData;
use Illuminate\Support\Facades\DB;
use App\Modules\Student\Models\Student;

class StudentStoreAction
{
	public $storedData;

	public function store($request)
	{
		try {

			$data = (new BuildStudentData)->build($request, 'store');

			DB::transaction(function () use ($request, $data) {
				// *** START ***

				$newStudent = Student::create($data);

				$this->storedData = $newStudent;

				// *** DONE ***
			});
			return back()->withFlash('Berhasil tambah Student baru: ' . $this->storedData->name);
		} catch (\Throwable $th) {
			saveErrorLog($th, __FILE__);
			return back()->withErrors(config('app.error_msg'));
		}
	}
}
