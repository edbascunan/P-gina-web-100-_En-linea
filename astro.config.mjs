import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify'; // Importa el adaptador de Netlify

export default defineConfig({
  output: 'server', // Importante: habilita el renderizado del lado del servidor y las rutas API
  adapter: netlify(), // Usa el adaptador de Netlify
  integrations: [
    react({
      include: ['**/*.tsx', '**/*.jsx'],
      experimentalReactChildren: true
    }),
    tailwind()
  ],
  vite: {
    ssr: {
      noExternal: ['react-dom', 'lucide-react', 'react-router-dom']
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'lucide-react', 'react-router-dom'],
      exclude: []
    },
    build: {
      commonjsOptions: {
        include: [/node_modules/]
      }
    }
  }
});
