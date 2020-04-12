<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Year;
use App\Department;

use App\GroupsSetting;
use App\RegistableProject;
use Faker\Generator as Faker;

$factory->define(RegistableProject::class, function (Faker $faker) {
    return [
        'department_id' => Department::all()->random()->id,
        'year_id' => Year::all()->random()->id,
        'is_open' => $faker->boolean(),
        'title' => $faker->name(),
    ];
});

$factory->afterCreating(RegistableProject::class, function ($registableProject, $faker) {

    $min = rand(1, 4);
    $max = rand($min + 1, 7);

    $groupsSetting = GroupsSetting::create([
        'registable_project_id' => $registableProject->id,
        'min_group_members_count' => $min,
        'max_group_members_count' => $max,
    ]);

    $registableProject->groups_settings_id = $groupsSetting->id;
    $registableProject->save();
});
