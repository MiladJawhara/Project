<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            //required properties
            $table->string('user_type');
            $table->string('f_name');
            $table->string('l_name');
            $table->string('password');
            $table->string('email')->unique();
            $table->string('national_id')->unique();
            //nullable properties
            $table->timestamp('email_verified_at')->nullable();
            $table->unsignedBigInteger('department_id')->nullable();
            $table->unsignedBigInteger('group_id')->nullable();
            $table->unsignedBigInteger('year_id')->nullable();
            $table->string('university_id')->unique()->nullable();
            $table->string('profile_img_url')->nullable();

            $table->rememberToken();
            $table->timestamps();

            $table->foreign('department_id')->references('id')->on('departments');
            $table->foreign('year_id')->references('id')->on('years');
            $table->foreign('group_id')->references('id')->on('groups');
        });


        Schema::create('supervisor_unverified', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('supervisor_unverified');
    }
}
