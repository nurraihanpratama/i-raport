<?php

namespace App\Modules\Tapel\Actions\SubActions;

use App\Modules\Tapel\Models\Tapel;

class BuildTapelData
{
	public function build($request, $action)
	{
		$data = getValidatedData(new Tapel, $request->toArray());

		if ($action == 'store') {
			//
		}

		return $data;
	}
}
