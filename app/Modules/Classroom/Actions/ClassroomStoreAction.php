<?php

namespace App\Modules\Classroom\Actions;

use App\Modules\Classroom\Actions\SubActions\BuildClassroomData;
use Illuminate\Support\Facades\DB;
use App\Modules\Classroom\Models\Classroom;

class ClassroomStoreAction
{
	public $storedData;

	public function store($request)
	{
		try {

			$data = (new BuildClassroomData)->build($request, 'store');

			DB::transaction(function () use ($request, $data) {
				// *** START ***

				$newClassroom = Classroom::create($data);

				$this->storedData = $newClassroom;

				// *** DONE ***
			});
			return back()->withFlash('Berhasil tambah Classroom baru: ' . $this->storedData->name);
		} catch (\Throwable $th) {
			saveErrorLog($th, __FILE__);
			return back()->withErrors(config('app.error_msg'));
		}
	}
}
