<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Year;
use App\Department;
use App\GroupsSetting;
use App\ProjectType;
use Faker\Generator as Faker;

$factory->define(ProjectType::class, function (Faker $faker) {
    return [
        'department_id' => Department::all()->random()->id,
        'year_id' => Year::all()->random()->id,
        'is_open' => $faker->boolean(),
        'title' => $faker->name(),
    ];
});

$factory->afterCreating(ProjectType::class, function ($projectType, $faker) {

    $min = rand(1, 4);
    $max = rand($min + 1, 7);

    $groupsSetting = GroupsSetting::create([
        'project_type_id' => $projectType->id,
        'min_group_members_count' => $min,
        'max_group_members_count' => $max,
    ]);

    $projectType->groups_settings_id = $groupsSetting->id;
    $projectType->save();
});
