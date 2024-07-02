<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validace a sanitizace vstupu
    $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    if ($email === false) {
        echo 'Invalid email address';
        exit;
    }

    // Vytvoření instance PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Zapnutí ladění
        $mail->SMTPDebug = 2; // Zapnutí podrobného výstupu
        $mail->Debugoutput = 'html'; 

        // Nastavení SMTP pro Gmail
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'vojtaluber@gmail.com'; 
        $mail->Password = 'shiybsmevwrfzowm'; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; 
        $mail->Port = 587;

        // Příjemci
        $mail->setFrom($email, 'Contact Form');
        $mail->addAddress('vojtaluber@seznam.cz'); 

        // Obsah
        $mail->isHTML(true); // Nastavení e-mailu na HTML
        $mail->Subject = $subject;
        $mail->Body    = nl2br($message);
        $mail->AltBody = strip_tags($message);

        // Odeslání e-mailu
        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo 'Invalid request';
}