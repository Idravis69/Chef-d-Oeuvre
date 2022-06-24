<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function store(Request $request)
    {
        $cart = new Cart();
        $cart->Nom = $request->Nom;
        $cart->Prix = $request->Prix;
        $cart->save();
        return response()->json(['cart'=>$request->all()]);
        return response()->json('Ajouter au panier avec succès');
    }

    public function index()
    {
        $cart = Cart::all();
        return response()->json($cart);
    }
}
