<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $to = "ebascunan@ebfservicios.cl";
    $subject = "Nuevo contacto desde EBF Servicios";
    
    // Recopilar todos los datos del formulario
    $nombre = isset($data['nombre']) ? $data['nombre'] : 'No especificado';
    $email = isset($data['email']) ? $data['email'] : 'No especificado';
    $telefono = isset($data['telefono']) ? $data['telefono'] : 'No especificado';
    $empresa = isset($data['empresa']) ? $data['empresa'] : 'No especificado';
    $servicio = isset($data['servicio']) ? $data['servicio'] : 'No especificado';
    $mensaje = isset($data['mensaje']) ? $data['mensaje'] : 'No especificado';
    
    $message = "Nombre: " . $nombre . "\n";
    $message .= "Email: " . $email . "\n";
    $message .= "Teléfono: " . $telefono . "\n";
    $message .= "Empresa: " . $empresa . "\n";
    $message .= "Servicio: " . $servicio . "\n";
    $message .= "Mensaje:\n" . $mensaje;
    
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Validación básica en el servidor
    if (empty($nombre) || empty($email) || empty($mensaje)) {
        echo json_encode(['success' => false, 'message' => 'Por favor, completa los campos obligatorios (Nombre, Email, Mensaje).']);
        exit; // Detener la ejecución si faltan campos obligatorios
    }

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['success' => true, 'message' => '¡Mensaje enviado correctamente!']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error al enviar el correo.']);
    }
} else {
    // Responder a métodos no permitidos
    http_response_code(405); // Method Not Allowed
    echo json_encode(['success' => false, 'message' => 'Método no permitido.']);
}
?>
