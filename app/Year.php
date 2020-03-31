<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Year extends Model
{


    protected $fillable = ['title'];

    private static $defaultYearsTitle = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];


    public static function getDefault()
    {

        return self::$defaultYearsTitle;
    }
}
