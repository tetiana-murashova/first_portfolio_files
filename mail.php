<?php
   $back = "<p><a href=\"javascript: history.back()\">Back to portfolio</a></p>";

$to = "email@tania-m.com"; // емайл получателя данных из формы 
$tema = "contact-form"; // тема полученного емайла 
$message = "Name: ".$_POST['fname']."<br>";//присвоить переменной значение, полученное из формы name=name

$message .= "Message: ".$_POST['subject']."<br>"; //полученное из формы name=message
$headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
  $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных

      echo "Your message has been sent <Br> $back";
?>


