<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDepartmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('departments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->unsignedBigInteger('dept_manager_id');
            $table->timestamps();

            $table->foreign('dept_manager_id')->references('id')->on('users');
        });

        Schema::create('years', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->timestamps();
        });


        Schema::create('departments_groups_settings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('department_id');
            $table->unsignedBigInteger('year_id');
            $table->unsignedInteger('min_group_members_count');
            $table->unsignedInteger('max_group_members_count');
            $table->timestamps();


            $table->foreign('department_id')->references('id')->on('departments')->onDelete('cascade');
            $table->foreign('year_id')->references('id')->on('years');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('departments');
    }
}
