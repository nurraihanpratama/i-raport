<?php

namespace App\Traits;


trait DataTransformTrait
{
    public function getTeacherFullName($teacher)
    {
        if ($teacher->fullname && $teacher->title) {
            return $teacher->fullname . ", " . $teacher->title;
        } else {
            $teacher->fullname;
        }
        return null;
    }
}
