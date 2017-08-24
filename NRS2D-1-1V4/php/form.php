<?php

$recepient = "kodolovdv@gmail.com, info@profexpert-sro.ru";
$sitename = "САЙТ НРС";

$name = trim($_POST["name"]);
$phone = trim($_POST["telephone"]);
$email = trim($_POST["email"]);
$message = "Сайт: $sitename  \nИмя: $name \nТелефон: $phone \nПочта: $email";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>