@extends('layouts.app')

@section('content')

<div class="flex-center position-ref full-height">
    <div class="content">
        <div class="title m-b-md">
            @auth
            <h3>{{ __('messeges.welcome',['f_name' => auth()->user()->f_name]) }}</h3>
            @else
            مرحبا بك رجائا قم
            <a href="{{ route('login') }}">بتسجيل الدخول</a>
            @if (Route::has('register'))
            أو
                    <a href="{{ route('register') }}">إنشاء حساب جديد</a>
                @endif
            @endauth

        </div>
    </div>
</div>
@endsection
