import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'microfrontend2',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.tsx'
      }
    })
  ],
  build: {
    target: 'esnext',
    minify: false
  },
  server: {
    port: 3002,
    cors: true
  }
})
