<?php

namespace App;

use Spatie\Valuestore\Valuestore;

class Settings extends Valuestore
{
    protected static $defoultSettings = [
        'group_max_cap' => 3,
        'register_closed' => false,
    ];



    public function init()
    {
        foreach (self::$defoultSettings as $key => $value) {
            $this->put($key, $value);
        }
    }
}
