<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Mix;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class Department extends Model
{
    protected $fillable = [
        'title',
        'dept_manager_id',
    ];


    public function projectsTypes()
    {
        return $this->hasMany(ProjectType::class);
    }
}
