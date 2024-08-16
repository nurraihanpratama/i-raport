<?php

namespace App\Modules\Subject\Actions\SubActions;

use App\Modules\Subject\Models\Subject;

class BuildSubjectData
{
	public function build($request, $action)
	{
		$data = getValidatedData(new Subject, $request->toArray());

		if ($action == 'store') {
			//
		}

		return $data;
	}
}
