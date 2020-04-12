<?php

use App\Department;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    private $testingDepts = [
        'Software',
        'Networking',
        'AI'
    ];
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->testingDepts as $key => $value) {
            factory(Department::class)->create([
                'title' => $value
            ]);
        }
    }
}
