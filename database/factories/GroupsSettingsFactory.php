<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Department;
use App\GroupsSetting;
use App\Year;
use Faker\Generator as Faker;

$factory->define(GroupsSetting::class, function (Faker $faker) {

    $min = rand(1, 4);
    $max = rand($min + 1, 7);




    $deptFirstID = Department::first()->id;
    $yearFirstID = Year::first()->id;



    return [
        'department_id' => 1,
        'year_id' => 1,
        'min_group_members_count' => $min,
        'max_group_members_count' => $max,
    ];
});
