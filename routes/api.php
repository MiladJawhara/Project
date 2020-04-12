<?php

use App\Department;
use App\GroupsSetting;
use App\RegistableProject;
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

Route::post('/postTest', function () {
    $rp = RegistableProject::create([
        'title' => request('title'),
        'department_id' => request('department_id'),
        'year_id' => request('year_id'),
        'is_open' => request('is_open'),
    ]);

    $gs = GroupsSetting::create([
        'registable_project_id' => $rp->id,
        'min_group_members_count' => request('range')[0],
        'max_group_members_count' => request('range')[1],
    ]);

    $rp->groups_settings_id = $gs->id;
    $rp->save();
    $rp->groups_setting = $gs;
    return $rp;
});

Route::delete('/deleteTest', function () {
    $rp = RegistableProject::find(request('id'));
    $gs = GroupsSetting::find($rp->groups_settings_id);
    $rp->delete();
    $gs->delete();
});

Route::put('/putTest', function () {
    $rp = RegistableProject::find(request('id'));

    $rp->title = request('title');
    $rp->department_id = request('department_id');
    $rp->year_id = request('year_id');
    $rp->is_open = request('is_open');

    $gs = GroupsSetting::find($rp->groups_settings_id);

    $gs->min_group_members_count = request('range')[0];
    $gs->max_group_members_count = request('range')[1];


    $rp->save();
    $gs->save();

    $rp->groups_setting = $gs;
    return $rp;
});

Route::get('/years', function () {
    return Year::all();
});

Route::get('/departments', function () {
    return Department::all();
});

Route::get('/registableprojects', function () {
    return RegistableProject::with('groupsSetting')->get();
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
