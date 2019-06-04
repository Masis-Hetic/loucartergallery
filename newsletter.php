<?php

$accessControl = 'Access-Control-Allow';
$controlMethods = 'GET, POST, PUT, DELETE, OPTIONS';

//header($accessControl . '-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding, application/x-www-form-urlencoded, multipart/form-data, text/plain');
header($accessControl . '-Headers: access-control-allow-origin, x-requested-with, content-type, multipart/form-data');
header($accessControl . '-Methods : ' . $controlMethods);
header($accessControl . '-Origin : *');
//header($accessControl . '-Credentials : true');
header('Access-Control-Max-Age : 9600');
//header('vary: Origin, Access-Control-Request-Headers');
//header('x-powered-by: Express');

//if ($_SERVER["REQUEST_METHOD"] === "OPTION") {
//
//    if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_METHOD"]))
//        header("Access-Control-Allow-Methods: " . $controlMethods); //Make sure you remove those you do not want to support
//
//    if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_HEADERS"]))
//        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
//
//    //Just exit with 200 OK with the above headers for OPTIONS method
//    exit(0);
//}

if ($_SERVER["REQUEST_METHOD"] === "POST" && strpos($_SERVER["HTTP_REFERER"], 'http://localhost:3000') !== false) {
    $post = file_get_contents('php://input');
    $request = json_decode($post);
    $MAILCHIMP_API_KEY = 'c03e070b4411f258d90f5b7e834aecf8-us20';
    $MAILCHIMP_API_URL = 'https://us20.api.mailchimp.com/3.0';
    $ADD_MEMBER_URL = $MAILCHIMP_API_URL . '/lists/' . $request->list_id . '/members/';

    ob_start();
    var_dump($ADD_MEMBER_URL);
    error_log(ob_get_clean(), 4);

    json_encode(array_values($_SERVER));

    // TODO exceuter un post

    //Just exit with 200 OK with the above headers for OPTIONS method
    exit(0);
}
