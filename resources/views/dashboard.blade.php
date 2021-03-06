@extends('layouts.app')

@section('content')
<div class="container">
    <h1>
        @lang('Painel de controle')
    </h1>
    <hr>
    <div class="row">
        <div class="col-md-7">
            <mesha-clients></mesha-clients>
        </div>
        <div class="col-md-5">
            <mesha-services></mesha-services>
        </div>
    </div>
    <br>
    <div class="row">
        <div class="col-md-6">
            <mesha-contracts></mesha-contracts>
        </div>
    </div>
</div>
@endsection
