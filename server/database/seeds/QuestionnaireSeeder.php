<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuestionnaireSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('questionnaires')->insert([
            'question' => 'What is your favorite car ?',
            'answers' =>  'BMW, Mazda, Lada',
            'questionType' => 'checkbox',
        ]);

        DB::table('questionnaires')->insert([
            'question' => 'What is your dog name ?',
            'answers' =>  'Todor, Pancho, Bruno',
            'questionType' => 'radio',
        ]);

  
    }
}
