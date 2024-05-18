<?php
// Set error reporting level to report all errors except notices
error_reporting(E_ALL & ~E_NOTICE);

// Turn off displaying errors on the screen
ini_set('display_errors', 'Off');

// Enable error logging
ini_set('log_errors', 'On');
ini_set('error_log', '/var/www/vhosts/lukas-nolting.de/error.log');

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): // Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        // Log CORS preflight request
        error_log("CORS preflight request handled.");
        exit;
    case ("POST"): // Send the email;
        header("Access-Control-Allow-Origin: *");

        // Payload is not sent to $_POST Variable,
        // it is sent to php:input as a text
        $json = file_get_contents('php://input');
        // Parse the Payload from text format to Object
        $params = json_decode($json);

        $email = $params->email;
        $name = $params->name;
        $message = $params->message;

        $recipient = 'info@lukas-nolting.de';
        $subject = $email;
        $message = "From: " . $name . "<br>" . $message;

        $headers   = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = "From: noreply@mywebsite.com";

        // Log the request payload and headers
        error_log("Handling POST request. Payload: " . print_r($params, true));
        error_log("Headers: " . implode("\r\n", $headers));

        if (mail($recipient, $subject, $message, implode("\r\n", $headers))) {
            echo json_encode(["success" => true, "message" => "Email sent successfully."]);
        } else {
            $error_message = "Failed to send email. Details: To: $recipient, Subject: $subject, From: $email";
            echo json_encode(["success" => false, "error" => $error_message]);
            error_log($error_message);
            error_log($_SERVER['REQUEST_METHOD']);
            error_log($json);
            http_response_code(500);
        }
        break;
    default: // Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        // Log invalid request method
        $invalid_method_message = "Invalid request method: " . $_SERVER['REQUEST_METHOD'];
        error_log($invalid_method_message);
        echo json_encode(["success" => false, "error" => $invalid_method_message]);
        exit;
}
?>