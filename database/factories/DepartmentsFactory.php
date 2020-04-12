<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Department;
use App\User;
use Faker\Generator as Faker;

$factory->define(Department::class, function (Faker $faker) {
    return [
        'title' => uniqid("Dept_"),
        'dept_manager_id' => null,
    ];
});
