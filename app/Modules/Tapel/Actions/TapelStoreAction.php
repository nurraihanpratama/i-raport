<?php

namespace App\Modules\Tapel\Actions;

use App\Modules\Tapel\Actions\SubActions\BuildTapelData;
use Illuminate\Support\Facades\DB;
use App\Modules\Tapel\Models\Tapel;

class TapelStoreAction
{
	public $storedData;

	public function store($request)
	{
		try {

			$data = (new BuildTapelData)->build($request, 'store');

			DB::transaction(function () use ($request, $data) {
				// *** START ***

				$newTapel = Tapel::create($data);

				$this->storedData = $newTapel;

				// *** DONE ***
			});
			return back()->withFlash('Berhasil tambah Tapel baru: ' . $this->storedData->name);
		} catch (\Throwable $th) {
			saveErrorLog($th, __FILE__);
			return back()->withErrors(config('app.error_msg'));
		}
	}
}
