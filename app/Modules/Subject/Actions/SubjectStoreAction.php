<?php

namespace App\Modules\Subject\Actions;

use App\Modules\Subject\Actions\SubActions\BuildSubjectData;
use Illuminate\Support\Facades\DB;
use App\Modules\Subject\Models\Subject;

class SubjectStoreAction
{
	public $storedData;

	public function store($request)
	{
		try {

			$data = (new BuildSubjectData)->build($request, 'store');

			DB::transaction(function () use ($request, $data) {
				// *** START ***

				$newSubject = Subject::create($data);

				$this->storedData = $newSubject;

				// *** DONE ***
			});
			return back()->withFlash('Berhasil tambah Subject baru: ' . $this->storedData->name);
		} catch (\Throwable $th) {
			saveErrorLog($th, __FILE__);
			return back()->withErrors(config('app.error_msg'));
		}
	}
}
