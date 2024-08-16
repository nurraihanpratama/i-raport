<?php

namespace App\Modules\Classroom\Actions;

use Illuminate\Support\Facades\DB;
use App\Modules\Classroom\Models\Classroom;

class ClassroomUpdateAction
{
	public $model;

	public function update($request, $team_slug,  $id)
	{
		try {

			$data = (new BuildClassroomData)->build($request, 'update');

			DB::transaction(function () use ($request, $id, $data) {
				// *** START ***

				$Classroom = Classroom::findOrFail($id);

				$this->model = $Classroom;

				$Classroom->update($data);

				// *** DONE ***
			});
			return back()->withFlash('Berhasil update Classroom No: ' . $this->model->credit_no);
		} catch (\Throwable $th) {
			saveErrorLog($th, __FILE__);
			return back()->withErrors(config('app.error_msg'));
		}
	}
}
