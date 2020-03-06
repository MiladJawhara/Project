<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    public function members()
    {

        return $this->hasMany(User::class);
    }

    public function admin()
    {
        return $this->belongsTo(User::class, 'group_admin_id');
    }


    public function membersCount(): int
    {
        return $this->members->count();
    }
}
