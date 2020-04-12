<?php

namespace App\Http\Controllers;

use App\GroupsSetting;
use Illuminate\Http\Request;
use PHPUnit\Util\Json;

class GroupsSettingController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $res =  GroupsSetting::create(
            [
                'department_id' => request('department_id'),
                'year_id' => request('year_id'),
                'min_group_members_count' => request('min'),
                'max_group_members_count' => request('max'),
            ]
        );

        return $res;
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\GroupsSetting  $groupsSetting
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $groupsSetting = GroupsSetting::find(request('id'));
        $groupsSetting->min_group_members_count = request('min');
        $groupsSetting->max_group_members_count = request('max');
        $groupsSetting->save();
        return  $groupsSetting;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\GroupsSetting  $groupsSetting
     * @return \Illuminate\Http\Response
     */
    public function destroy(GroupsSetting $groupsSetting)
    {
        $groupsSetting = GroupsSetting::find(request('id'));
        $groupsSetting->delete();
        return ['status' => 'done'];
    }
}
