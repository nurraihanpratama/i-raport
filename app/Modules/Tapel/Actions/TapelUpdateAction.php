<?php

namespace App\Modules\Tapel\Actions;

use App\Modules\Tapel\Actions\SubActions\BuildTapelData;
use Illuminate\Support\Facades\DB;
use App\Modules\Tapel\Models\Tapel;

class TapelUpdateAction
{
	public $model;

	public function update($request, $team_slug,  $id)
	{
		try {

			$data = (new BuildTapelData)->build($request, 'update');

			DB::transaction(function () use ($request, $id, $data) {
				// *** START ***

				$Tapel = Tapel::findOrFail($id);

				$this->model = $Tapel;

				$Tapel->update($data);

				// *** DONE ***
			});
			return back()->withFlash('Berhasil update Tapel No: ' . $this->model->credit_no);
		} catch (\Throwable $th) {
			saveErrorLog($th, __FILE__);
			return back()->withErrors(config('app.error_msg'));
		}
	}
}
