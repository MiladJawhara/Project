<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GroupsSetting extends Model
{
    protected $fillable = [
        'department_id',
        'year_id',
        'min_group_members_count',
        'max_group_members_count',
    ];

    public function department()
    {
        $this->belongsTo(Department::class);
    }
}
