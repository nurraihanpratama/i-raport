<?php

use App\Models\LogError;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

function makeArray(mixed $query, mixed $delimiter = '-'): array
{
    if (is_array($query)) return $query;
    $query = ($query == "0") ? intval($query) : $query;
    return isset($query) ? explode($delimiter, $query) : [];
}

function saveErrorLog($exception, $filename)
{

    $errorCode = '';
    DB::transaction(function () use ($exception, $filename, &$errorCode) {
        $logError = LogError::create([
            'message' => $exception->getMessage(),
            'filename' => $filename,
        ]);

        $errorCode = $logError->id;
    });

    return $errorCode;
}

function getValidatedData($table, $data): array
{
    $schema = Schema::getColumnListing($table->getTable());
    return array_filter($data, function ($item) use ($schema) {
        return in_array($item, $schema);
    }, ARRAY_FILTER_USE_KEY);
}
