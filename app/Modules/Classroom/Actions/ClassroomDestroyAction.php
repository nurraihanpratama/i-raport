<?php

namespace App\Modules\Classroom\Actions;

use Illuminate\Support\Facades\DB;
use App\Modules\Classroom\Models\Classroom;

class ClassroomDestroyAction
{
	public function destroy($team_slug, $id)
	{
		try {
			DB::transaction(function () use ($team_slug, $id) {
				// *** START ***

				$Classroom = Classroom::findOrFail($id);

				$Classroom->delete();

				// *** DONE ***
			});
			return back()->withFlash('Berhasil delete biaya');
		} catch (\Throwable $th) {
			saveErrorLog($th, __FILE__);
			return back()->withErrors(config('app.error_msg'));
		}
	}
}
