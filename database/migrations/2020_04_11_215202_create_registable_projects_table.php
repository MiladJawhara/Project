<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRegistableProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('registable_projects', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('department_id');
            $table->unsignedBigInteger('year_id');
            $table->boolean('is_open')->default(true);
            $table->unsignedBigInteger('groups_settings_id')->unique()->nullable();
            $table->string('title');
            $table->timestamps();

            $table->foreign('groups_settings_id')->references('id')->on('groups_settings');
            $table->foreign('department_id')->references('id')->on('departments');
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
        Schema::dropIfExists('registable_projects');
    }
}
