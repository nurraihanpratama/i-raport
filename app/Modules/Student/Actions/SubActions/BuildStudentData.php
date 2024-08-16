<?php

namespace App\Modules\Student\Actions\SubActions;

use App\Modules\Student\Models\Student;

class BuildStudentData
{
	public function build($request, $action)
	{
		$data = getValidatedData(new Student, $request->toArray());

		if ($action == 'store') {
			//
		}

		return $data;
	}
}
