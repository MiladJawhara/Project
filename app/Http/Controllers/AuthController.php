<?php

namespace App\Http\Controllers;

use App\User;
use App\Year;
use App\Department;
use App\Events\UserConnected;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }




    public function register()
    {

        $data =  $this->validator(request()->all())->validate();

        $user = $this->createUser($data);

        return response()->json(['status' => 'success']);
    }
    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        // event(new UserConnected(auth()->user()->f_name));
        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function user()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'token' => $token,
            'user' => auth()->user(),
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }


    protected function validator(array $data)
    {
        if ($data['user_type'] === User::$USER_TYPES[0]) {

            return Validator::make($data, [
                'f_name' => ['required', 'string', 'max:255'],
                'l_name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'password' => ['required', 'string', 'min:8', 'confirmed'],
                'national_id' => ['required', 'string', 'min:11', 'unique:users'],
                'university_id' => ['required', 'string', 'unique:users,university_id'],
                'user_type' => ['required', 'string', 'in:' . User::$USER_TYPES[0] . ',' . User::$USER_TYPES[1]],
                'department' => ['required', 'string'],
                'year_of_study' => ['required', 'string'],
            ]);
        } else {
            return Validator::make($data, [
                'f_name' => ['required', 'string', 'max:255'],
                'l_name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'password' => ['required', 'string', 'min:8', 'confirmed'],
                'national_id' => ['required', 'string', 'min:11', 'unique:users'],
                'user_type' => ['required', 'string', 'in:' . User::$USER_TYPES[0] . ',' . User::$USER_TYPES[1]],
                'department' => ['required', 'string'],
            ]);
        }
    }
    protected function createUser(array $data)
    {
        $tempData = [
            'f_name' => $data['f_name'],
            'l_name' => $data['l_name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'national_id' => $data['national_id'],
            'user_type' => $data['user_type'],
            'department_id' => Department::where('title', $data['department'])->first()->id,
        ];

        if ($data['user_type'] === User::$USER_TYPES[0]) {
            $tempData['university_id'] = $data['university_id'];
            $tempData['year_id'] = Year::where('title', $data['year_of_study'])->first()->id;
        }


        $user = User::create($tempData);
        return $user;
    }
}
