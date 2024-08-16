<?php

namespace App\Modules\Subject\Table;

use App\Modules\Subject\Resources\SubjectResource;
use App\Modules\Subject\Models\Subject;
use Illuminate\Http\Request;

class SubjectDataTable
{
	public function generate(Request $request)
	{
		$search = $request->get('search');
		$sort   = $request->get('sort');
		$type   = $request->get('type');
		$status = $request->get('status');

		$data = Subject::query()
			->withTrashed()
			->datatableQuery()
			->withSearch($search)
			->withSort($sort)
			->withFilter($status, 'Subject_status')
			->paginate()
			->appends([
				'search' => $search,
				'sort'   => $sort,
				'status' => $status,
				'type'   => $type,
			]);

		$collection = SubjectResource::collection($data);

		return $collection;
	}
}
