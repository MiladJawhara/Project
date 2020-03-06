<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Group;
use App\User;
use Faker\Generator as Faker;

$factory->define(Group::class, function (Faker $faker) {
    $userCount = User::all()->count();

    return [
        'name' => $faker->name(),
        'group_admin_id' => $faker->random_int(1, $userCount),
    ];
});
