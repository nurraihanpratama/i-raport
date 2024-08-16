<?php

namespace App\Modules\Classroom\Actions;

use App\Modules\Classroom\Resources\SingleClassroomResource;
use App\Modules\Classroom\Models\Classroom;
use Illuminate\Http\JsonResponse;

class ClassroomEditAction
{
	public function edit($request, string $id): JsonResponse
	{
		$options = (new ClassroomCreateAction)->getOptions($request);

		$data = Classroom::query()
			->withTrashed()
			->singleRowQuery()
			->findOrFail($id);

		$Classroom = new SingleClassroomResource($data);

		return response()->json(compact('options', 'Classroom'));
	}
}
