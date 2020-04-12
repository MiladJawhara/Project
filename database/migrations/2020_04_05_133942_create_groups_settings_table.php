<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGroupsSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('groups_settings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('registable_project_id');
            $table->unsignedInteger('min_group_members_count');
            $table->unsignedInteger('max_group_members_count');
            $table->timestamps();


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
        Schema::dropIfExists('groups_settings');
    }
}
