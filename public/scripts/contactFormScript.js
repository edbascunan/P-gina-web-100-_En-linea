// Script para manejar el envío del formulario de contacto al endpoint del servidor.

// Función para mostrar mensajes (adaptada)
function showMessage(message, type) {
  const messageDiv = document.querySelector('#form-message') || createMessageDiv();
  messageDiv.textContent = message;
  messageDiv.className = `alert alert-${type === 'success' ? 'success' : 'danger'}`;
  messageDiv.style.display = 'block';

  // Ocultar mensaje después de 5 segundos
  setTimeout(() => {
    messageDiv.style.display = 'none';
  }, 5000);
}

// Crear div para mensajes si no existe (mantenido)
function createMessageDiv() {
  const div = document.createElement('div');
  div.id = 'form-message';
  div.style.display = 'none';
  div.style.marginTop = '1rem';
  div.style.padding = '1rem';
  div.style.borderRadius = '4px';

  const form = document.querySelector('#contact-form');
  if (form && form.parentNode) {
    form.parentNode.insertBefore(div, form.nextSibling);
  }

  return div;
}

// Event listener para el formulario
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#contact-form');
  const submitButton = document.querySelector('#submit-btn');

  if (form) {
    // Habilitar el botón de envío por defecto
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = 'Enviar Mensaje';
    }

    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      console.log('Evento submit del formulario capturado.');

      // Deshabilitar botón y mostrar estado de envío
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';
      }
      showMessage('Enviando mensaje...', 'info');

      // Recopilar datos del formulario
      const formData = {
        nombre: form.querySelector('[name="nombre"]')?.value || '',
        email: form.querySelector('[name="email"]')?.value || '',
        telefono: form.querySelector('[name="telefono"]')?.value || '',
        empresa: form.querySelector('[name="empresa"]')?.value || '',
        servicio: form.querySelector('[name="servicio"]')?.value || '',
        mensaje: form.querySelector('[name="mensaje"]')?.value || ''
      };
      console.log('Datos del formulario recopilados:', formData);

      // Validación básica
      if (!formData.nombre || !formData.email || !formData.mensaje) {
        showMessage('Por favor, completa todos los campos obligatorios.', 'error');
         if (submitButton) {
           submitButton.disabled = false;
           submitButton.textContent = 'Enviar Mensaje';
         }
        return;
      }

      try {
        // Enviar datos al endpoint del servidor /api/contact
        console.log('Intentando enviar datos al endpoint /api/contact...');
        console.log('Cuerpo de la petición:', JSON.stringify(formData));
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        console.log('Respuesta recibida del servidor:', response.status, response.statusText);
        const result = await response.json();
        console.log('Cuerpo de la respuesta:', result);

        if (response.ok) {
          showMessage('¡Mensaje enviado correctamente!', 'success');
          form.reset(); // Limpiar formulario si el envío fue exitoso
        } else {
          showMessage(`Error al enviar el mensaje: ${result.message || response.statusText}`, 'error');
        }

      } catch (error) {
        console.error('Error al enviar el formulario:', error);
        showMessage(`Error al enviar el mensaje: ${error.message}`, 'error');
      } finally {
        // Habilitar botón de nuevo
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = 'Enviar Mensaje';
        }
      }
    });
  }
});
