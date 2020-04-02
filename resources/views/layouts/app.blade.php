<!doctype html>
<html lang="{{App::getLocale()}}" dir="{{App::isLocale('ar') ? "rtl":"ltr" }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ __(config('app.name', 'Laravel')) }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ secure_asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ secure_asset('css/style.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <router-view></router-view>
    </div>
    {{-- <div>
        @include('components.navbar')
        <main class="py-4">
            @yield('content')
        </main>

    </div> --}}
      <!-- Scripts -->
    <script src="{{ secure_asset('js/app.js') }}"></script>
</body>
</html>
