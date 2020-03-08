<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
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
        'user_type' => 'student',
        'department' => 'none',
        'university_id' => $faker->randomNumber(),
        'year_of_study' => 'الخامسة',
    ];
});
