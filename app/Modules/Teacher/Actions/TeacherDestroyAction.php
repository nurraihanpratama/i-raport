<?php

namespace App\Modules\Teacher\Actions;

use Illuminate\Support\Facades\DB;
use App\Modules\Teacher\Models\Teacher;

class TeacherDestroyAction
{
	public function destroy($team_slug, $id)
	{
		try {
			DB::transaction(function () use ($team_slug, $id) {
				// *** START ***

				$Teacher = Teacher::findOrFail($id);

				$Teacher->delete();

				// *** DONE ***
			});
			return back()->withFlash('Berhasil delete biaya');
		} catch (\Throwable $th) {
			saveErrorLog($th, __FILE__);
			return back()->withErrors(config('app.error_msg'));
		}
	}
}
