<?php

namespace App\Modules\Student\Actions;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class StudentCreateAction
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
