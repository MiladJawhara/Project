<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConstrants extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('departments', function (Blueprint $table) {
            $table->foreign('dept_manager_id')->references('id')->on('users');
        });

        Schema::table('users', function (Blueprint $table) {

            $table->foreign('department_id')->references('id')->on('departments');
            $table->foreign('year_id')->references('id')->on('years');
            $table->foreign('group_id')->references('id')->on('groups');
        });


        Schema::table('supervisor_unverified', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });

        Schema::table('registable_projects', function (Blueprint $table) {
            $table->foreign('groups_settings_id')->references('id')->on('groups_settings');
            $table->foreign('department_id')->references('id')->on('departments');
            $table->foreign('year_id')->references('id')->on('years');
        });

        Schema::table('groups_settings', function (Blueprint $table) {
            $table->foreign('registable_project_id')->references('id')->on('registable_projects')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('constrants');
    }
}
