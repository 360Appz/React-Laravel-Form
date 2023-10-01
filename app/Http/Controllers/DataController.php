<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Data; 

class DataController extends Controller
{
    public function storeData(Request $request)
    {
  
        //New data model instance and store it
        $data = new Data;
        $data->name = $request->input('name');
        $data->email = $request->input('email');
        $data->contact = $request->input('contact');
        $data->remarks = $request->input('remarks');
        $data->save();

        // Returns status
        return response()->json(['message' => 'Data stored successfully']);
    }
}
