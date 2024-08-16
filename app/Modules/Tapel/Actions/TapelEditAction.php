<?php

namespace App\Modules\Tapel\Actions;

use App\Modules\Tapel\Resources\SingleTapelResource;
use App\Modules\Tapel\Models\Tapel;
use Illuminate\Http\JsonResponse;

class TapelEditAction
{
	public function edit($request, string $id): JsonResponse
	{
		$options = (new TapelCreateAction)->getOptions($request);

		$data = Tapel::query()
			->withTrashed()
			->singleRowQuery()
			->findOrFail($id);

		$Tapel = new SingleTapelResource($data);

		return response()->json(compact('options', 'Tapel'));
	}
}
