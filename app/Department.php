<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Mix;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class Department extends Model
{


    /**
     * return a collection of all years settings in department
     *
     * @return Collection
     */
    // public function groupsSettings(): Collection
    // {
    //     return DB::table('departments_groups_settings')->select()->where('department_id', '=', $this->id)->get();
    // }



    /**
     * return a collection of settings for specific year in department
     *
     * @param integer $yearID
     * @return Collection
     */
    public function groupsSettingsByYear(int $yearID)
    {
        return $this->settings()->where('year_id', '=', $yearID)->first();
    }


    /**
     * Undocumented function
     *
     * @param integer $yearID
     * @param array $data
     * @return boolean
     */
    public function createOrUpdateYearSettings(int $yearID, array $data = []): bool
    {


        $data = empty($data) ? $data : [
            'department_id' => $this->id,
            'year_id' => $yearID,
            'min_group_members_count' => 1,
            'max_group_members_count' => 3
        ];

        return DB::table('departments_groups_settings')->updateOrInsert($data);
    }


    public function groupsSettings()
    {
        return $this->hasMany(GroupsSetting::class);
    }
}
