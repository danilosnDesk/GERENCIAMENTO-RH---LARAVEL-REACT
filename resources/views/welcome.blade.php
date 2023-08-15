<!DOCTYPE html>
<html lang="pt-pt">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

</head>

<body>

    @auth
        <h1>{{ auth()->user()->firstName }}</h1>


    @endauth

    @guest
        <h1>Deslogalgo</h1>
    @endguest

</body>

</html>
