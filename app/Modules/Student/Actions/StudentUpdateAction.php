<?php

namespace App\Modules\Student\Actions;

use Illuminate\Support\Facades\DB;
use App\Modules\Student\Models\Student;

class StudentUpdateAction
{
	public $model;

	public function update($request, $team_slug,  $id)
	{
		try {

			$data = (new BuildStudentData)->build($request, 'update');

			DB::transaction(function () use ($request, $id, $data) {
				// *** START ***

				$Student = Student::findOrFail($id);

				$this->model = $Student;

				$Student->update($data);

				// *** DONE ***
			});
			return back()->withFlash('Berhasil update Student No: ' . $this->model->credit_no);
		} catch (\Throwable $th) {
			saveErrorLog($th, __FILE__);
			return back()->withErrors(config('app.error_msg'));
		}
	}
}
