<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GroupsSetting extends Model
{
    protected $fillable = [
        'registable_project_id',
        'min_group_members_count',
        'max_group_members_count',
    ];

    public function registableProject()
    {
        $this->belongsTo(RegistableProject::class);
    }
}
