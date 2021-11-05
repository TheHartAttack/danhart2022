<?php

  $name = $_POST['name'];
  $email = $_POST['email'];
  $message= $_POST['message'];

  $myemail = 'danhart21390@gmail.com';
  $subject = 'Message from danhart.uk';
  $message .= "\n\n" . $name . "\n" . $email;
  $headers = 'From: ' . $name . ' <' . $email . '>';

  $mail = mail($myemail, $subject, $message, $headers);

  echo $mail;

?>
