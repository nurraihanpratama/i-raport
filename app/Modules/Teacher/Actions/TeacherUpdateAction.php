<?php

namespace App\Modules\Teacher\Actions;

use Illuminate\Support\Facades\DB;
use App\Modules\Teacher\Models\Teacher;

class TeacherUpdateAction
{
	public $model;

	public function update($request, $team_slug,  $id)
	{
		try {

			$data = (new BuildTeacherData)->build($request, 'update');

			DB::transaction(function () use ($request, $id, $data) {
				// *** START ***

				$Teacher = Teacher::findOrFail($id);

				$this->model = $Teacher;

				$Teacher->update($data);

				// *** DONE ***
			});
			return back()->withFlash('Berhasil update Teacher No: ' . $this->model->credit_no);
		} catch (\Throwable $th) {
			saveErrorLog($th, __FILE__);
			return back()->withErrors(config('app.error_msg'));
		}
	}
}
