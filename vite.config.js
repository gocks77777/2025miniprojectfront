import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // ← 또는 아예 제거
  plugins: [react()],
});