<?php

namespace App\Modules\Subject\Actions;

use App\Modules\Subject\Actions\SubActions\BuildSubjectData;
use Illuminate\Support\Facades\DB;
use App\Modules\Subject\Models\Subject;

class SubjectUpdateAction
{
	public $model;

	public function update($request, $team_slug,  $id)
	{
		try {

			$data = (new BuildSubjectData)->build($request, 'update');

			DB::transaction(function () use ($request, $id, $data) {
				// *** START ***

				$Subject = Subject::findOrFail($id);

				$this->model = $Subject;

				$Subject->update($data);

				// *** DONE ***
			});
			return back()->withFlash('Berhasil update Subject No: ' . $this->model->credit_no);
		} catch (\Throwable $th) {
			saveErrorLog($th, __FILE__);
			return back()->withErrors(config('app.error_msg'));
		}
	}
}
