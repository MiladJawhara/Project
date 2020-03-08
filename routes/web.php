<?php

use App\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes(['verify' => true]);

Route::get('/home', 'HomeController@index')->name('home');

Route::get(
    '/admin',
    function () {

        $ids =  DB::table('supervisor_unverified')->select(['id'])->get()
            ->pluck('id')->toArray();


        $users = User::where('user_type', 'supervisor')->get()
            ->filter(function ($user) use ($ids) {
                return in_array($user->id, $ids);
            });

        return view('layouts.admin', ['unverifiedUsers' => $users]);
    }
);

Route::get('/admin/user/{id}', function ($id) {

    return view('admin.users.show', ['user' => User::find($id)]);
});
