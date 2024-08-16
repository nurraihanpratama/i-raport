<?php

namespace App\Modules\Teacher\Actions;

use App\Modules\Teacher\Resources\SingleTeacherResource;
use App\Modules\Teacher\Models\Teacher;
use Illuminate\Http\JsonResponse;

class TeacherEditAction
{
	public function edit($request, string $id): JsonResponse
	{
		$options = (new TeacherCreateAction)->getOptions($request);

		$data = Teacher::query()
			->withTrashed()
			->singleRowQuery()
			->findOrFail($id);

		$Teacher = new SingleTeacherResource($data);

		return response()->json(compact('options', 'Teacher'));
	}
}
