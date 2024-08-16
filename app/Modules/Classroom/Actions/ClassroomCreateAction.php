<?php

namespace App\Modules\Classroom\Actions;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ClassroomCreateAction
{
	public function create(Request $request): JsonResponse
	{
		$options = $this->getOptions($request);
		return response()->json(compact('options'));
	}

	public function getOptions($request)
	{
		$options = [
			//
		];

		return $options;
	}
}
