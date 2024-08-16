<?php

namespace App\Modules\Tapel\Table;

use App\Modules\Tapel\Resources\TapelResource;
use App\Modules\Tapel\Models\Tapel;
use Illuminate\Http\Request;

class TapelDataTable
{
	public function generate(Request $request)
	{
		$search = $request->get('search');
		$sort   = $request->get('sort');
		$type   = $request->get('type');
		$status = $request->get('status');

		$data = Tapel::query()
			->withTrashed()
			->datatableQuery()
			->withSearch($search)
			->withSort($sort)
			->withFilter($status, 'Tapel_status')
			->paginate()
			->appends([
				'search' => $search,
				'sort'   => $sort,
				'status' => $status,
				'type'   => $type,
			]);

		$collection = TapelResource::collection($data);

		return $collection;
	}
}
