<?php

use App\User;
use App\Year;
use App\Department;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

if (!function_exists('supervisorValidator')) {

    function supervisorValidator(array $data)
    {
        return Validator::make($data, [
            'f_name' => ['required', 'string', 'max:255'],
            'l_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'national_id' => ['required', 'string', 'min:11', 'unique:users'],
            'user_type' => ['required', 'string', 'in:' . User::$USER_TYPES[1]],
            'department_id' => ['required', 'numeric'],
        ]);
    }
}

if (!function_exists('supervisorUpdateValidator')) {

    function supervisorUpdateValidator(array $data)
    {
        return Validator::make($data, [
            'f_name' => ['required', 'string', 'max:255'],
            'l_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'national_id' => ['required', 'string', 'min:11', 'unique:users'],
            'department_id' => ['required', 'numeric'],
        ]);
    }
}

if (!function_exists('studentValidator')) {

    function studentValidator(array $data)
    {

        return Validator::make($data, [
            'f_name' => ['required', 'string', 'max:255'],
            'l_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'national_id' => ['required', 'string', 'min:11', 'unique:users'],
            'university_id' => ['required', 'string', 'unique:users,university_id'],
            'user_type' => ['required', 'string', 'in:' . User::$USER_TYPES[0]],
            'department_id' => ['required', 'numeric'],
            'year_id' => ['required', 'numeric'],
        ]);
    }
}



if (!function_exists('createUser')) {
    function createUser(array $data)
    {
        $tempData = [
            'f_name' => $data['f_name'],
            'l_name' => $data['l_name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'national_id' => $data['national_id'],
            'user_type' => $data['user_type'],
            'department_id' => $data['department_id'],
        ];

        if ($data['user_type'] === User::$USER_TYPES[0]) {
            $tempData['university_id'] = $data['university_id'];
            $tempData['year_id'] = $data['year_id'];
        }


        $user = User::create($tempData);
        return $user;
    }
}
