<?php

namespace App;

use App\Group;
use Illuminate\Support\Facades\Hash;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'f_name',
        'l_name',
        'user_type',
        'user_name',
        'email',
        'password',
        'department',
        'national_id',
        'year_of_study',
        'university_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];



    /**
     * create an admin for this app with
     *  emale as (admin@admin)
     *  password as (12345678)
     *
     * @param string $nationalID the national id of the admin
     * @return void
     */
    public static function createAdmin(string $name, string $nationalID)
    {
        $admin = new User();
        $admin->user_type = 'admin';
        $admin->name = $name;
        $admin->password = Hash::make('12345678');
        $admin->email = 'admin@admin';
        $admin->user_name = 'admin';
        $admin->national_id = $nationalID;
        $admin->save();
    }


    public function group()
    {
        return $this->belongsTo(Group::class);
    }
}
