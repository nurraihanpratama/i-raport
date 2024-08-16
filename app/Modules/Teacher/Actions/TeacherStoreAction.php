<?php

namespace App\Modules\Teacher\Actions;

use App\Modules\Teacher\Actions\SubActions\BuildTeacherData;
use Illuminate\Support\Facades\DB;
use App\Modules\Teacher\Models\Teacher;

class TeacherStoreAction
{
	public $storedData;

	public function store($request)
	{
		try {

			$data = (new BuildTeacherData)->build($request, 'store');

			DB::transaction(function () use ($request, $data) {
				// *** START ***

				$newTeacher = Teacher::create($data);

				$this->storedData = $newTeacher;

				// *** DONE ***
			});
			return back()->withFlash('Berhasil tambah Teacher baru: ' . $this->storedData->name);
		} catch (\Throwable $th) {
			saveErrorLog($th, __FILE__);
			return back()->withErrors(config('app.error_msg'));
		}
	}
}
