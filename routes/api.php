<?php

use App\Http\Controllers\Category;
use App\Http\Controllers\Product;
use App\Http\Controllers\ProductReview;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('categories', Category::class);
Route::resource('products', Product::class);
Route::resource('products/{product:id}/reviews', ProductReview::class);
