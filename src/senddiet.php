<?php
$to      = 'mail@mail.ru';
$subject = 'Заявка на рацион';
$message =
'Заявка<div class=""></div>
Цель: ' . $_POST["target"] . ',
Рацион: ' . $_POST["diet"] . ',
Калории: ' . $_POST["count"];

$headers = 'From: mail@mail.ru' . "\r\n" .
    'Content-Type: text/plain; charset=utf8;' . "\r\n" .
    'Reply-To: mail@mail.ru' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
mail($to, $subject, $message, $headers);
?>

