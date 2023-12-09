<?php

$fields = [
    'user_name' => filter_var($_POST["user_name"], FILTER_SANITIZE_STRING),
    'phone' => filter_var($_POST["phone"], FILTER_SANITIZE_STRING),
    'location' => filter_var($_POST["location"], FILTER_SANITIZE_STRING),
];

var_dump($fields);


$admin_email = 'vladislav_polyakov@izumi-it-company.com';

$admin_subject = 'subject';

$admin_message = '
<p>--■ Ім\'я : ' . $fields['user_name'] . '</p>
<p>--■ Телефон : ' . $fields['phone'] . '</p>
<p>--■ Адреса доставки : ' . $fields['location'] . '</p>
';

$headers = 'Content-Type: text/html; charset=utf-8' . "\r\n" .
    "From: My Site Info <info@example.com> \r\n";


mail($admin_email, $admin_subject, $admin_message, $headers);
