<?php

namespace App\Modules\Student\Actions;

use App\Modules\Student\Resources\SingleStudentResource;
use App\Modules\Student\Models\Student;
use Illuminate\Http\JsonResponse;

class StudentEditAction
{
	public function edit($request, string $id): JsonResponse
	{
		$options = (new StudentCreateAction)->getOptions($request);

		$data = Student::query()
			->withTrashed()
			->singleRowQuery()
			->findOrFail($id);

		$Student = new SingleStudentResource($data);

		return response()->json(compact('options', 'Student'));
	}
}
