import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const sass = require('sass');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/_variables.scss";`,
        quietDeps: true,
      },
    }
  },
  root: './src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: './public/index.html',
      }
    }
  }
})
