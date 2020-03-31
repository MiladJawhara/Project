<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Year extends Model
{


    protected $fillable = ['title'];

    private static $defaultYearsTitle = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];


    public static function getDefault()
    {

        foreach (self::$defaultYearsTitle as $key => $value) {
            self::create(
                [
                    'title' => $value
                ]
            );
        }
    }
}
