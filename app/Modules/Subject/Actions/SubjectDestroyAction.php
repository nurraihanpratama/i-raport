<?php

namespace App\Modules\Subject\Actions;

use Illuminate\Support\Facades\DB;
use App\Modules\Subject\Models\Subject;

class SubjectDestroyAction
{
	public function destroy($team_slug, $id)
	{
		try {
			DB::transaction(function () use ($team_slug, $id) {
				// *** START ***

				$Subject = Subject::findOrFail($id);

				$Subject->delete();

				// *** DONE ***
			});
			return back()->withFlash('Berhasil delete biaya');
		} catch (\Throwable $th) {
			saveErrorLog($th, __FILE__);
			return back()->withErrors(config('app.error_msg'));
		}
	}
}
