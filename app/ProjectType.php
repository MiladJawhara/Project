<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProjectType extends Model
{
    protected $fillable = [
        'department_id',
        'year_id',
        'is_open',
        'groups_settings_id',
        'title',
    ];


    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function year()
    {
        return $this->belongsTo(Year::class);
    }

    public function groupsSetting()
    {
        return $this->hasOne(GroupsSetting::class);
    }
}
