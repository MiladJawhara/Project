<?php

use App\Department;
use App\GroupsSetting;
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



Route::get('/years', function () {
    return Year::all();
});

Route::get('/supervisors', function () {
    return User::where('user_type', '=', User::$USER_TYPES[1])->get();
});

Route::get('/admin/groups/globalSettings', function () {
    return Department::with('groupsSettings')->get();
});

Route::put('/admin/groups/globalSettings', 'GroupsSettingController@update');
Route::post('/admin/groups/globalSettings', 'GroupsSettingController@store');
Route::delete('/admin/groups/globalSettings', 'GroupsSettingController@destroy');

Route::group([
    'prefix' => 'auth'
], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('user', 'AuthController@user');
});
