<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Year extends Model
{


    protected $fillable = ['title'];

    private static $defaultYearsTitle = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];


    public static function init()
    {
        if (Year::all()->count() !== 0) {
            return;
        }

        foreach (self::$defaultYearsTitle as $key => $value) {
            self::create(
                [
                    'title' => $value
                ]
            );
        }
    }
}
