<?php

namespace App\Modules\Teacher\Actions\SubActions;

use App\Modules\Teacher\Models\Teacher;

class BuildTeacherData
{
	public function build($request, $action)
	{
		$data = getValidatedData(new Teacher, $request->toArray());

		if ($action == 'store') {
			//
		}

		return $data;
	}
}
