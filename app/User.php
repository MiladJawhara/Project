<?php

namespace App;

use App\Group;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Hash;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
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
    public static function createAdmin()
    {
        if (!self::where('user_type', '=', 'admin')->get()->isEmpty())
            return false;

        $admin = new User();
        $admin->user_type = 'admin';
        $admin->f_name = 'admin';
        $admin->l_name = 'admin';
        $admin->password = Hash::make('12345678');
        $admin->email = 'admin@admin';
        $admin->email_verified_at = Date::now();
        $admin->national_id = '12345678910';
        $admin->save();
        return true;
    }
    /**
     * get all unverified supervisors
     *
     * @return \Illuminate\Support\Collection
     */
    public static function unverifiedSupervisors(): Collection
    {
        // get all supervisors ids that aren't verified yet
        $ids =  DB::table('supervisor_unverified')
            ->select(['user_id'])->get()->pluck('user_id')->toArray();

        $res = self::where('user_type', 'supervisor')->get()
            ->filter(function ($user) use ($ids) {
                return in_array($user->id, $ids);
            });


        return $res;
    }

    /**
     * verifiy supervisor account
     *
     * @return User
     */
    public function verifySupervisor(): User
    {
        DB::table('supervisor_unverified')->where('user_id', '=', $this->id)->delete();

        return $this;
    }

    public function isVerified()
    {
        if ($this->email_verified_at !== null) {

            if ($this->user_type === 'student') {
                return true;
            } elseif ($this->user_type === 'supervisor') {
                if (DB::table('supervisor_unverified')
                    ->where('user_id', '=', $this->id)->get()->isEmpty()
                ) {
                    return true;
                }
            }
        }

        return false;
    }

    public function isVerifiedNoEmail()
    {

        if (!DB::table('supervisor_unverified')->where('user_id', '=', $this->id)->get()->isEmpty()) {
            return false;
        }

        return true;
    }


    public function group()
    {
        return $this->belongsTo(Group::class);
    }
}
