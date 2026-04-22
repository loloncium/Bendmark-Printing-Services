<<<<<<< HEAD
<?php
/**
 * BendMark - Contact Form Handler
 * 
 * This file handles contact form submissions.
 * Upload to your web server and update index.html form action to point to this file.
 * 
 * Update the following variables:
 * - $admin_email: Where to send notifications
 * - $site_name: Your company name
 * - $site_url: Your website URL
 */

// Configuration
$admin_email = 'info@bendmark.com';
$site_name = 'BendMark Printing Services';
$site_url = 'https://bendmark.com';

// Get the request method
$request_method = $_SERVER['REQUEST_METHOD'];

// Handle POST requests
if ($request_method === 'POST') {
    
    // Get form data
    $name = isset($_POST['name']) ? sanitize_input($_POST['name']) : '';
    $email = isset($_POST['email']) ? sanitize_input($_POST['email']) : '';
    $phone = isset($_POST['phone']) ? sanitize_input($_POST['phone']) : '';
    $service = isset($_POST['service']) ? sanitize_input($_POST['service']) : 'General Inquiry';
    $message = isset($_POST['message']) ? sanitize_input($_POST['message']) : '';
    
    // Validate
    $errors = validate_form($name, $email, $phone, $message);
    
    if (!empty($errors)) {
        respond_json(false, 'Please correct the following errors: ' . implode(', ', $errors));
        exit;
    }
    
    // Check for spam
    if (is_spam($email, $message)) {
        respond_json(false, 'Form submission failed. Please try again.');
        exit;
    }
    
    // Prepare email
    $subject = "New Quote Request - $service";
    
    $email_body = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; }
                .header { background-color: #0415DC; color: white; padding: 20px; text-align: center; }
                .content { padding: 20px; background-color: #f9f9f9; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #0415DC; }
                .footer { text-align: center; color: #999; font-size: 12px; margin-top: 20px; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h1>New Quote Request</h1>
                </div>
                <div class='content'>
                    <div class='field'>
                        <span class='label'>Name:</span> $name
                    </div>
                    <div class='field'>
                        <span class='label'>Email:</span> <a href='mailto:$email'>$email</a>
                    </div>
                    <div class='field'>
                        <span class='label'>Phone:</span> <a href='tel:$phone'>$phone</a>
                    </div>
                    <div class='field'>
                        <span class='label'>Service:</span> $service
                    </div>
                    <div class='field'>
                        <span class='label'>Message:</span><br>
                        " . nl2br($message) . "
                    </div>
                    <div class='footer'>
                        <p>IP Address: " . get_client_ip() . "</p>
                        <p>Date: " . date('Y-m-d H:i:s') . "</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    ";
    
    // Send email
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    if (mail($admin_email, $subject, $email_body, $headers)) {
        // Send confirmation email to user
        send_confirmation_email($name, $email);
        respond_json(true, 'Thank you! We received your quote request. We will contact you within 24 hours.');
    } else {
        respond_json(false, 'Failed to send form. Please try again later or contact us directly.');
    }
    
    exit;
}

/**
 * Sanitize input to prevent XSS
 */
function sanitize_input($input) {
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
    return $input;
}

/**
 * Validate form data
 */
function validate_form($name, $email, $phone, $message) {
    $errors = [];
    
    if (empty($name) || strlen($name) < 2) {
        $errors[] = 'Name is required (min 2 characters)';
    }
    
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Valid email is required';
    }
    
    if (empty($phone) || strlen($phone) < 10) {
        $errors[] = 'Valid phone number is required';
    }
    
    if (empty($message) || strlen($message) < 10) {
        $errors[] = 'Message is required (min 10 characters)';
    }
    
    return $errors;
}

/**
 * Check for spam
 */
function is_spam($email, $message) {
    // Simple spam checks
    
    // Check for too many links
    if (substr_count($message, 'http') > 3) {
        return true;
    }
    
    // Check message length (likely spam if too long)
    if (strlen($message) > 5000) {
        return true;
    }
    
    // Check for suspicious patterns
    $spam_patterns = [
        '/viagra/i',
        '/cialis/i',
        '/casino/i',
        '/lottery/i',
        '/weight.*loss/i'
    ];
    
    foreach ($spam_patterns as $pattern) {
        if (preg_match($pattern, $message)) {
            return true;
        }
    }
    
    return false;
}

/**
 * Send confirmation email to user
 */
function send_confirmation_email($name, $email) {
    global $site_name, $site_url, $admin_email;
    
    $subject = 'Quote Request Received - ' . $site_name;
    
    $email_body = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { color: #0415DC; margin-bottom: 20px; }
                .content { color: #666; line-height: 1.6; }
                .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #999; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h2>Thank You, $name!</h2>
                </div>
                <div class='content'>
                    <p>We have received your quote request for our printing services.</p>
                    <p>Our team will review your request and contact you within 24 business hours.</p>
                    <p>In the meantime, if you have any questions, please don't hesitate to:</p>
                    <ul>
                        <li>Call us: (123) 456-7890</li>
                        <li>Email us: $admin_email</li>
                        <li>Visit our website: $site_url</li>
                    </ul>
                </div>
                <div class='footer'>
                    <p>Best regards,<br>The $site_name Team</p>
                    <p style='font-size: 12px;'>This is an automated response. Please do not reply to this email.</p>
                </div>
            </div>
        </body>
        </html>
    ";
    
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: $admin_email\r\n";
    
    mail($email, $subject, $email_body, $headers);
}

/**
 * Get client IP address
 */
function get_client_ip() {
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        return $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        return $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        return $_SERVER['REMOTE_ADDR'];
    }
}

/**
 * Send JSON response
 */
function respond_json($success, $message) {
    header('Content-Type: application/json');
    echo json_encode([
        'success' => $success,
        'message' => $message
    ]);
}

// If not POST request, return error
respond_json(false, 'Invalid request method');
?>
=======
<?php
/**
 * BendMark - Contact Form Handler
 * 
 * This file handles contact form submissions.
 * Upload to your web server and update index.html form action to point to this file.
 * 
 * Update the following variables:
 * - $admin_email: Where to send notifications
 * - $site_name: Your company name
 * - $site_url: Your website URL
 */

// Configuration
$admin_email = 'info@bendmark.com';
$site_name = 'BendMark Printing Services';
$site_url = 'https://bendmark.com';

// Get the request method
$request_method = $_SERVER['REQUEST_METHOD'];

// Handle POST requests
if ($request_method === 'POST') {
    
    // Get form data
    $name = isset($_POST['name']) ? sanitize_input($_POST['name']) : '';
    $email = isset($_POST['email']) ? sanitize_input($_POST['email']) : '';
    $phone = isset($_POST['phone']) ? sanitize_input($_POST['phone']) : '';
    $service = isset($_POST['service']) ? sanitize_input($_POST['service']) : 'General Inquiry';
    $message = isset($_POST['message']) ? sanitize_input($_POST['message']) : '';
    
    // Validate
    $errors = validate_form($name, $email, $phone, $message);
    
    if (!empty($errors)) {
        respond_json(false, 'Please correct the following errors: ' . implode(', ', $errors));
        exit;
    }
    
    // Check for spam
    if (is_spam($email, $message)) {
        respond_json(false, 'Form submission failed. Please try again.');
        exit;
    }
    
    // Prepare email
    $subject = "New Quote Request - $service";
    
    $email_body = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; }
                .header { background-color: #0415DC; color: white; padding: 20px; text-align: center; }
                .content { padding: 20px; background-color: #f9f9f9; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #0415DC; }
                .footer { text-align: center; color: #999; font-size: 12px; margin-top: 20px; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h1>New Quote Request</h1>
                </div>
                <div class='content'>
                    <div class='field'>
                        <span class='label'>Name:</span> $name
                    </div>
                    <div class='field'>
                        <span class='label'>Email:</span> <a href='mailto:$email'>$email</a>
                    </div>
                    <div class='field'>
                        <span class='label'>Phone:</span> <a href='tel:$phone'>$phone</a>
                    </div>
                    <div class='field'>
                        <span class='label'>Service:</span> $service
                    </div>
                    <div class='field'>
                        <span class='label'>Message:</span><br>
                        " . nl2br($message) . "
                    </div>
                    <div class='footer'>
                        <p>IP Address: " . get_client_ip() . "</p>
                        <p>Date: " . date('Y-m-d H:i:s') . "</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    ";
    
    // Send email
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    if (mail($admin_email, $subject, $email_body, $headers)) {
        // Send confirmation email to user
        send_confirmation_email($name, $email);
        respond_json(true, 'Thank you! We received your quote request. We will contact you within 24 hours.');
    } else {
        respond_json(false, 'Failed to send form. Please try again later or contact us directly.');
    }
    
    exit;
}

/**
 * Sanitize input to prevent XSS
 */
function sanitize_input($input) {
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
    return $input;
}

/**
 * Validate form data
 */
function validate_form($name, $email, $phone, $message) {
    $errors = [];
    
    if (empty($name) || strlen($name) < 2) {
        $errors[] = 'Name is required (min 2 characters)';
    }
    
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Valid email is required';
    }
    
    if (empty($phone) || strlen($phone) < 10) {
        $errors[] = 'Valid phone number is required';
    }
    
    if (empty($message) || strlen($message) < 10) {
        $errors[] = 'Message is required (min 10 characters)';
    }
    
    return $errors;
}

/**
 * Check for spam
 */
function is_spam($email, $message) {
    // Simple spam checks
    
    // Check for too many links
    if (substr_count($message, 'http') > 3) {
        return true;
    }
    
    // Check message length (likely spam if too long)
    if (strlen($message) > 5000) {
        return true;
    }
    
    // Check for suspicious patterns
    $spam_patterns = [
        '/viagra/i',
        '/cialis/i',
        '/casino/i',
        '/lottery/i',
        '/weight.*loss/i'
    ];
    
    foreach ($spam_patterns as $pattern) {
        if (preg_match($pattern, $message)) {
            return true;
        }
    }
    
    return false;
}

/**
 * Send confirmation email to user
 */
function send_confirmation_email($name, $email) {
    global $site_name, $site_url, $admin_email;
    
    $subject = 'Quote Request Received - ' . $site_name;
    
    $email_body = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { color: #0415DC; margin-bottom: 20px; }
                .content { color: #666; line-height: 1.6; }
                .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #999; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h2>Thank You, $name!</h2>
                </div>
                <div class='content'>
                    <p>We have received your quote request for our printing services.</p>
                    <p>Our team will review your request and contact you within 24 business hours.</p>
                    <p>In the meantime, if you have any questions, please don't hesitate to:</p>
                    <ul>
                        <li>Call us: (123) 456-7890</li>
                        <li>Email us: $admin_email</li>
                        <li>Visit our website: $site_url</li>
                    </ul>
                </div>
                <div class='footer'>
                    <p>Best regards,<br>The $site_name Team</p>
                    <p style='font-size: 12px;'>This is an automated response. Please do not reply to this email.</p>
                </div>
            </div>
        </body>
        </html>
    ";
    
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: $admin_email\r\n";
    
    mail($email, $subject, $email_body, $headers);
}

/**
 * Get client IP address
 */
function get_client_ip() {
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        return $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        return $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        return $_SERVER['REMOTE_ADDR'];
    }
}

/**
 * Send JSON response
 */
function respond_json($success, $message) {
    header('Content-Type: application/json');
    echo json_encode([
        'success' => $success,
        'message' => $message
    ]);
}

// If not POST request, return error
respond_json(false, 'Invalid request method');
?>
>>>>>>> c487bc2 (Added compatible images)
