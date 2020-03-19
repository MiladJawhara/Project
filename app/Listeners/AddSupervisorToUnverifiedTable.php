<?php

namespace App\Listeners;

use App\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Date;
use Illuminate\Auth\Events\Registered;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class AddSupervisorToUnverifiedTable
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  Registered  $event
     * @return void
     */
    public function handle(Registered $event)
    {

        /*
            Here we check if the user has been registered as an supervisor,
            then we should add him to the unverified supervisors table to be checked by the admin
        */
        $user = $event->user;

        if ($user->user_type == 'supervisor') {
            DB::table('supervisor_unverified')->insert([
                'user_id' => $user->id,
                'created_at' => Date::now(),
                'updated_at' => Date::now(),
            ]);
        }
    }
}
