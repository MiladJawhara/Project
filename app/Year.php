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

    public static function initDefault()
    {
        if (self::all()->count() > 0) {
            return false;
        }
        foreach (self::$defaultYearsTitle as $key => $value) {
            $year = new Year();
            $year->title = $value;
            $year->save();
        }
        return true;
    }
}
