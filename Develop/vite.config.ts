import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './env',
  plugins: [react()],
  server: {
    port: 10000,
    host: true
  },
  preview: {
    port: 10000,
    host: true
  }
});
