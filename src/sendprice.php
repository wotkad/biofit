<?php
$to      = 'mail@mail.ru';
$subject = 'Заявка на рацион';
$message =
'Заявка<div class=""></div>
Название: ' . $_POST["title"] . ',
Цель: ' . $_POST["target"] . ',
Рацион: ' . $_POST["type"] . ',
Калории: ' . $_POST["kcal"] . ',
Сумма: ' . $_POST["price"] . ',
Имя: ' . $_POST["name"] . ',
Телефон: ' . $_POST["phone"];

$headers = 'From: mail@mail.ru' . "\r\n" .
    'Content-Type: text/plain; charset=utf8;' . "\r\n" .
    'Reply-To: mail@mail.ru' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
mail($to, $subject, $message, $headers);
?>

