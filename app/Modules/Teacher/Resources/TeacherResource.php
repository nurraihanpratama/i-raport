<?php

namespace App\Modules\Teacher\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Traits\DataTransformTrait;
use Illuminate\Http\Request;

class TeacherResource extends JsonResource
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

		$data['fullname'] = $this->getTeacherFullName($this);
		return $data;
	}
}
