import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'lucide-react',
      'react-router-dom'
    ],
    exclude: []
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.astro'],
    dedupe: ['react', 'react-dom']
  },
  server: {
    port: 3000,
    strictPort: true,
  }
});