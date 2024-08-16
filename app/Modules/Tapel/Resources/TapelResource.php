<?php

namespace App\Modules\Tapel\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Traits\DataTransformTrait;
use Illuminate\Http\Request;

class TapelResource extends JsonResource
{
	use DataTransformTrait;

	/**
	 * Transform the resource into an array.
	 *
	 * @return array<string, mixed>
	 */
	public function toArray(Request $request): array
	{
		$data = parent::toArray($request);

		return $data;
	}
}
