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
            $table->unsignedBigInteger('project_type_id');
            $table->unsignedInteger('min_group_members_count');
            $table->unsignedInteger('max_group_members_count');
            $table->timestamps();


            $table->foreign('project_type_id')->references('id')->on('project_types')->onDelete('cascade');
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
