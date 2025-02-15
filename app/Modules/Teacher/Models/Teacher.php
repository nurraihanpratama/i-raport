<?php

namespace App\Modules\Teacher\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
	use SoftDeletes;

	public    $timestamps = false;
	protected $guarded    = [];

	public static function boot()
	{
		parent::boot();

		self::creating(function ($model) {
			$model->created_at = now();
			$model->created_by = auth()->id();
		});

		self::created(function ($model) {
			$model->created_at = now();
			$model->created_by = auth()->id();
		});

		self::updating(function ($model) {
			$model->updated_at = now();
			$model->updated_by = auth()->id();
		});

		self::updated(function ($model) {
			$model->updated_at = now();
			$model->updated_by = auth()->id();
		});
	}

	// * INHOUSE

	// * FILTERS
	public function scopeWithSearch($query, $search, $guard = 'web')
	{
		if ($guard === 'web') {
			$query->when(isset($search['v']), function ($q) use ($search) {
				$q->where($search['f'], 'like', '%' . $search['v'] . '%');
			});
		}

		// if ($guard === 'api') {
		// 	$query->when($search, function ($q) use ($search) {
		// 		$q->where('id', 'like', '%' . $search . '%')
		// 			->orWhere('default_price', 'like', '%' . $search . '%');
		// 	});
		// }
	}

	public function scopeWithSort(
		$query,
		$sort,
		$defaultField = 'created_at',
		$defaultDirection = 'desc'
	) {
		$query->when($sort, function ($q) use ($sort) {
			$q->orderBy($sort['f'], $sort['d'] === 'desc' ? 'desc' : 'asc');
		}, function ($q) use ($defaultField, $defaultDirection) {
			return $q->orderBy($defaultField, $defaultDirection);
		});
	}

	public function scopeWithFilter($query, $filter, $field)
	{
		$query->when($filter, function ($q) use ($filter, $field) {
			$q->whereIn($field, makeArray($filter));
		});
	}

	// * DATA SCOPE
	public function scopeDatatableQuery($query)
	{
		return $query;
	}

	public function scopeSingleRowQuery($query)
	{
		return $query;
	}

	// * RELATIONSHIP
}
