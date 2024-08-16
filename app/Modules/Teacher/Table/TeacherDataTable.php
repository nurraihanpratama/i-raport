<?php

namespace App\Modules\Teacher\Table;

use App\Modules\Teacher\Resources\TeacherResource;
use App\Modules\Teacher\Models\Teacher;
use Illuminate\Http\Request;

class TeacherDataTable
{
	public function generate(Request $request)
	{
		$search = $request->get('search');
		$sort   = $request->get('sort');
		$type   = $request->get('type');
		$status = $request->get('status');

		$data = Teacher::query()
			->withTrashed()
			->datatableQuery()
			->withSearch($search)
			->withSort($sort)
			->withFilter($status, 'Teacher_status')
			->paginate()
			->appends([
				'search' => $search,
				'sort'   => $sort,
				'status' => $status,
				'type'   => $type,
			]);

		$collection = TeacherResource::collection($data);

		return $collection;
	}
}
