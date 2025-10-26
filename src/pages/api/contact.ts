import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // Reenviar la solicitud a la Netlify Function
    const netlifyFunctionUrl = '/.netlify/functions/formularioContacto'; // Ruta relativa a la raíz del sitio

    const response = await fetch(netlifyFunctionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      // Si la respuesta de la función no es OK (ej. 400, 500), devolver el error
      return new Response(JSON.stringify(result), {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Si la respuesta de la función es OK, devolver el resultado
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    console.error('Error en el endpoint /api/contact:', error);
    return new Response(JSON.stringify({ message: 'Error interno del servidor.', error: error instanceof Error ? error.message : 'Error desconocido' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
