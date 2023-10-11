<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Data; 
use Illuminate\Support\Facades\Validator;

class DataController extends Controller
{
    public function storeData(Request $request)
    {

        //Validates input
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|email',
            'contact' => 'required|string',
            'remarks' => 'required|string',
        ]);
    
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
  
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
