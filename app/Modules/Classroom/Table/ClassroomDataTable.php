<?php

namespace App\Modules\Classroom\Table;

use App\Modules\Classroom\Resources\ClassroomResource;
use App\Modules\Classroom\Models\Classroom;
use Illuminate\Http\Request;

class ClassroomDataTable
{
	public function generate(Request $request)
	{
		$search = $request->get('search');
		$sort   = $request->get('sort');
		$type   = $request->get('type');
		$status = $request->get('status');

		$data = Classroom::query()
			->with([
				'teacher',
				'tapel'
			])
			->withTrashed()
			->datatableQuery()
			->withSearch($search)
			->withSort($sort)
			->withFilter($status, 'Classroom_status')
			->paginate()
			->appends([
				'search' => $search,
				'sort'   => $sort,
				'status' => $status,
				'type'   => $type,
			]);

		$collection = ClassroomResource::collection($data);

		return $collection;
	}
}
