<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Department;
use App\User;
use App\Year;
use Illuminate\Support\Str;
use Faker\Generator as Faker;
use Illuminate\Support\Facades\Hash;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'f_name' => $faker->firstName(),
        'l_name' => $faker->lastName(),
        'email' => $faker->email(),
        'password' => Hash::make('12345678'),
        'national_id' => $faker->numberBetween(),
        'user_type' => $faker->randomElement([User::$USER_TYPES[0], User::$USER_TYPES[1]]),
        'department_id' => Department::all()->random()->id,
        'university_id' => $faker->unique()->numberBetween(1, 99999),
        'year_id' => Year::all()->random()->id,
    ];
});
