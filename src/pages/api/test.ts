import type { APIRoute } from 'astro';

console.log('Cargando módulo api/test.ts');

export const GET: APIRoute = async ({ url }) => {
  console.log('Inicio de la función GET en test.ts');
  return new Response(JSON.stringify({
    message: 'Ruta API de prueba funcionando!',
    timestamp: new Date().toISOString(),
  }), { status: 200 });
};
