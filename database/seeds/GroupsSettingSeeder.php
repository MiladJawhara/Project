<?php

use App\Year;
use App\Department;
use App\GroupsSetting;
use Illuminate\Database\Seeder;

class GroupsSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $years = Year::all()->count();
        $depts = Department::all()->count();

        $min = ($years * $depts) - ($years + $depts);
        if ($min <= 0) $min = 1;
        $max = ($years * $depts);


        $limit = rand($min, $max);
        for ($i = 0; $i < $limit; $i++) {

            $deptID = Department::all()->random()->id;
            $deptUsed = GroupsSetting::where('department_id', '=', $deptID)->get()->count();
            $counter = 0;
            while ($deptUsed >= $years) {
                $deptID = (($deptID + 1) % $depts) + 1;
                $deptUsed = GroupsSetting::where('department_id', '=', $deptID)->get()->count();
                $counter++;
                if ($counter > 10000) {
                    dd('dept');
                }
            }

            $yearID = Year::all()->random()->id;
            $yearUsedInDept = GroupsSetting::where([['department_id', '=', $deptID], ['year_id', '=', $yearID]])->get()->count();
            $counter = 0;
            while ($yearUsedInDept != 0) {
                $yearID = (($yearID + 1) % $years) + 1;
                $yearUsedInDept = GroupsSetting::where([['department_id', '=', $deptID], ['year_id', '=', $yearID]])->get()->count();
                $counter++;
                if ($counter > 10000) {
                    dd('year');
                }
            }

            factory(GroupsSetting::class)->create([
                'department_id' => $deptID,
                'year_id' => $yearID,
            ]);
        }
    }
}
