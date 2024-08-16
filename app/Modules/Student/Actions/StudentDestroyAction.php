<?php

namespace App\Modules\Student\Actions;

use Illuminate\Support\Facades\DB;
use App\Modules\Student\Models\Student;

class StudentDestroyAction
{
	public function destroy($team_slug, $id)
	{
		try {
			DB::transaction(function () use ($team_slug, $id) {
				// *** START ***

				$Student = Student::findOrFail($id);

				$Student->delete();

				// *** DONE ***
			});
			return back()->withFlash('Berhasil delete biaya');
		} catch (\Throwable $th) {
			saveErrorLog($th, __FILE__);
			return back()->withErrors(config('app.error_msg'));
		}
	}
}
