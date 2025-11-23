import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/', // Use '/' for Azure Static Web Apps root deployment
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
    },
})
