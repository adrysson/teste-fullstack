<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', 'HomeController@index')->name('home');
Route::get('/painel', 'DashboardController@index')->name('home');

Route::group(['middleware' => 'auth', 'namespace' => 'Api\V1', 'prefix' => 'api/v1'], function () {
    Route::apiResource('services', 'ServiceController')->except('show');
    Route::apiResource('clients', 'ClientController')->except('show');
    Route::apiResource('contracts', 'ContractController')->only(['index', 'store', 'destroy']);
});