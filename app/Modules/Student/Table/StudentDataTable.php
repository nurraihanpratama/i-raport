<?php

namespace App\Modules\Student\Table;

use App\Modules\Student\Resources\StudentResource;
use App\Modules\Student\Models\Student;
use Illuminate\Http\Request;

class StudentDataTable
{
	public function generate(Request $request)
	{
		$search = $request->get('search');
		$sort   = $request->get('sort');
		$type   = $request->get('type');
		$status = $request->get('status');
		$classroomId = $request->get('classroom_id');
		// dd($request->all());

		$data = Student::query()
			->with([
				'classroom:id,tapel_id,teacher_id,grade,name'
			])
			->withTrashed()
			->datatableQuery()
			->withSearch($search)
			->withSort($sort)
			->withFilter($status, 'Student_status')
			->withFilter($classroomId, 'classroom_id')
			->paginate()
			->appends([
				'search' => $search,
				'sort'   => $sort,
				'status' => $status,
				'type'   => $type,
			]);

		$collection = StudentResource::collection($data);

		return $collection;
	}
}
