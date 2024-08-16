<?php

namespace App\Modules\Tapel\Actions;

use Illuminate\Support\Facades\DB;
use App\Modules\Tapel\Models\Tapel;

class TapelDestroyAction
{
	public function destroy($team_slug, $id)
	{
		try {
			DB::transaction(function () use ($team_slug, $id) {
				// *** START ***

				$Tapel = Tapel::findOrFail($id);

				$Tapel->delete();

				// *** DONE ***
			});
			return back()->withFlash('Berhasil delete biaya');
		} catch (\Throwable $th) {
			saveErrorLog($th, __FILE__);
			return back()->withErrors(config('app.error_msg'));
		}
	}
}
