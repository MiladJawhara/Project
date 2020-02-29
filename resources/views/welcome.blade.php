@extends('layouts.app')

@section('content')

<div class="flex-center position-ref full-height">
    <div class="content">
        <div class="title m-b-md">
            مرحبا بك رجائا قم
            <a href="{{ route('login') }}">بتسجيل الدخول</a>
            @if (Route::has('register'))
            أو
                    <a href="{{ route('register') }}">إنشاء حساب جديد</a>
                @endif
        </div>
    </div>
</div>
@endsection
