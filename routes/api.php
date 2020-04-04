<?php

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
    return Year::getDefault();
});

Route::get('/departments', function () {
    return [
        [
            'id' => 0,
            'name' => 'dept1',
            'settings' => [
                [
                    'id' => 0,
                    'name' => 'First',
                    'range' => [2, 4]
                ],
                [
                    'id' => 1,
                    'name' => 'Second',
                    'range' => [1, 2]
                ],
                [
                    'id' => 2,
                    'name' => 'Fifth',
                    'range' => [5, 7]
                ]
            ]
        ],
        [
            'id' => 1,
            'name' => 'dept2',
            'settings' => [
                [
                    'id' => 0,
                    'name' => 'Second',
                    'range' => [3, 6]
                ],
                [
                    'id' => 1,
                    'name' => 'Fourth',
                    'range' => [2, 3]
                ],
                [
                    'id' => 2,
                    'name' => 'Fifth',
                    'range' => [1, 4]
                ]
            ]
        ]
    ];
});
Route::group([
    'prefix' => 'auth'
], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});
