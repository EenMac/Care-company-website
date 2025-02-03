import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "Care-company-website",
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});