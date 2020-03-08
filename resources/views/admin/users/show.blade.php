<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h2>{{$user->f_name ." ". $user->l_name}}</h2>
    <h4>{{$user->email}}</h4>
    <p>{{ $user->national_id }}</p>
</body>
</html>
