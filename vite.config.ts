import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true, // Permite conexiones externas
    allowedHosts: ['.loca.lt'], // Permite cualquier subdominio de LocalTunnel
  },
});
