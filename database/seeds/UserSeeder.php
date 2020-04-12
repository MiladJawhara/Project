<?php

use App\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class, 10)->create([
            'user_type' => User::$USER_TYPES[1],
            'university_id' => null,
            'year_id' => null,
        ]);

        factory(User::class, 20)->create([
            'user_type' => User::$USER_TYPES[0]
        ]);
    }
}
