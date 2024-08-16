<?php

namespace App\Modules\Classroom\Actions\SubActions;

use App\Modules\Classroom\Models\Classroom;

class BuildClassroomData
{
	public function build($request, $action)
	{
		$data = getValidatedData(new Classroom, $request->toArray());

		if ($action == 'store') {
			//
		}

		return $data;
	}
}
