<?php

use App\Department;
use App\GroupsSetting;
use App\ProjectType;
use App\User;
use App\Year;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/test', function () {
    return Year::with('projectsTypes')->get();
});

Route::get('/years', function () {
    return Year::all();
});

Route::get('/departments', function () {
    return Department::all();
});

Route::get('/projectsTypes', function () {
    return ProjectType::with('groupsSetting')->get();
});

Route::get('/supervisors', function () {
    return User::where('user_type', '=', User::$USER_TYPES[1])->get();
});

Route::group([
    'prefix' => 'auth'
], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('user', 'AuthController@user');
});
