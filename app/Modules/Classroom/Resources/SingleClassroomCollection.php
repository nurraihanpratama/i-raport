<?php

namespace App\Modules\Classroom\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Request;

class ClassroomCollection extends ResourceCollection
{
	/**
	 * Transform the resource collection into an array.
	 *
	 * @return array<int|string, mixed>
	 */
	public function toArray(Request $request): array
	{
		return parent::toArray($request);
	}
}
