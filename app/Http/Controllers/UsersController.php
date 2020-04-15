<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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

        $data = supervisorValidator(request()->all())->validate();

        $user = createUser($data);

        return $user;
    }


    public function adminSupervisorUpdate($id)
    {
        $user = User::find($id);

        if ($user->email === request('email')) {
            $user->email = '';
            $user->save();
        }

        $data = supervisorUpdateValidator(request()->all())->validate();

        $user->f_name = $data['f_name'];
        $user->l_name = $data['l_name'];
        $user->email = $data['email'];
        $user->password =  Hash::make($data['password']);
        $user->national_id = $data['national_id'];
        $user->department_id = $data['department_id'];

        $user->save();

        return $user;
    }

    public function adminSupervisorDelete($id)
    {
        $user = User::find($id);
        $user->delete();
    }
}
