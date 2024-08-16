<?php

namespace App\Modules\Subject\Actions;

use App\Modules\Subject\Resources\SingleSubjectResource;
use App\Modules\Subject\Models\Subject;
use Illuminate\Http\JsonResponse;

class SubjectEditAction
{
	public function edit($request, string $id): JsonResponse
	{
		$options = (new SubjectCreateAction)->getOptions($request);

		$data = Subject::query()
			->withTrashed()
			->singleRowQuery()
			->findOrFail($id);

		$Subject = new SingleSubjectResource($data);

		return response()->json(compact('options', 'Subject'));
	}
}
