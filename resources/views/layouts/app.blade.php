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
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body class="bg-info">
    <div class="bg-info" id="app">
        <router-view></router-view>
    </div>
    {{-- <div>
        @include('components.navbar')
        <main class="py-4">
            @yield('content')
        </main>

    </div> --}}
      <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
