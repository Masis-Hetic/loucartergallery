<?php

$accessControl = 'Access-Control-Allow';
$controlMethods = 'GET, POST, PUT, DELETE, OPTIONS';
header($accessControl . '-Headers: access-control-allow-origin, x-requested-with, content-type, multipart/form-data');
header($accessControl . '-Methods : ' . $controlMethods);
header($accessControl . '-Origin : *');
header('Access-Control-Max-Age : 6000');
$method = $_SERVER['REQUEST_METHOD'];
$referer = $_SERVER['HTTP_REFERER'];
$apiKey = 'c03e070b4411f258d90f5b7e834aecf8-us20';

switch ($method) {
    case 'PUT':
        putHandler($referer);
        break;
    case 'POST':
        postHandler($referer);
        break;
    case 'GET':
        getHandler($referer);
        break;
    case 'OPTION':
        optionHandler();
        break;
    case 'DELETE':
        deletenHandler($referer);
        break;
    default:
        handle_error($referer);
        break;
}

function postHandler($referer)
{
    if (strpos($referer, 'https://loucartergallery') !== false) {
        $post = file_get_contents('php://input');
        $request = json_decode($post);
        $response = addMailchimp($request);
        echo $response;
    } else {
        echo 'process error';
    }
}

function putHandler($referer)
{
    if (strpos($referer, 'https://loucartergallery') !== false) {
        $post = file_get_contents('php://input');
        $request = json_decode($post);
        $response = syncMailchimp($request);
        echo $response;
    } else {
        echo 'process error';

    }
}

function getHandler($referer)
{
//    ob_start();
//    var_dump($referer);
//    error_log(ob_get_clean(), 4);
}

function optionHandler()
{
//    ob_start();
//    var_dump('option');
//    error_log(ob_get_clean(), 4);
}

function deletenHandler($referer)
{
//    ob_start();
//    var_dump($referer);
//    error_log(ob_get_clean(), 4);
}

function handle_error($referer)
{
    ob_start();
    var_dump('error : ' . $referer);
    error_log(ob_get_clean(), 4);
}

function syncMailchimp($data) // PUT
{
    $apiKey = 'c03e070b4411f258d90f5b7e834aecf8-us20';
    $listId = $data->list_id;
    $memberId = md5(strtolower($data->email_address));
    $dataCenter = substr($apiKey, strpos($apiKey, '-') + 1);
    $url = 'https://' . $dataCenter . '.api.mailchimp.com/3.0/lists/' . $listId . '/members/' . $memberId;
    $json = json_encode(['email_address' => $data->email_address, 'status' => $data->status]);
    return curlRequest($url, 'PUT', $json, $apiKey);
}

function addMailchimp($data)
{
    $apiKey = 'c03e070b4411f258d90f5b7e834aecf8-us20';
    $listId = $data->list_id;
    $dataCenter = substr($apiKey, strpos($apiKey, '-') + 1);
    $url = 'https://' . $dataCenter . '.api.mailchimp.com/3.0/lists/' . $listId . '/members/';
    $json = json_encode(['email_address' => $data->email_address, 'status' => $data->status]);
    return curlRequest($url, 'POST', $json, $apiKey);
}

function curlRequest($url, $method, $json, $apiKey) {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $apiKey);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
    $result = curl_exec($ch);
    curl_close($ch);
    if (curl_error($ch)) return curl_error($ch);
    return $result;
}
