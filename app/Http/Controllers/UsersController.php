<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function adminSupervisors()
    {
        return User::where('user_type', '=', User::$USER_TYPES[1])->get();
    }

    public function adminSupervisorCreate()
    {
        request()->merge([
            'user_type' => User::$USER_TYPES[1]
        ]);

        $data = validateUser(request()->all())->validate();

        $user = createUser($data);

        return $user;
    }
}
