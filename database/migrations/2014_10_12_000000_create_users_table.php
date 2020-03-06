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
            $table->string('name');
            $table->string('password');
            $table->string('email')->unique();
            $table->string('national_id')->unique();
            //nullable properties
            $table->timestamp('email_verified_at')->nullable();
            $table->string('department')->nullable();
            $table->unsignedBigInteger('group_id')->nullable();
            $table->string('year_of_study')->nullable();
            $table->string('profile_img_url')->nullable();
            $table->string('university_id')->nullable()->unique();
            $table->rememberToken();
            $table->timestamps();
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
    }
}
