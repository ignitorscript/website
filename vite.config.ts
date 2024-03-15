import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'
import react from '@vitejs/plugin-react'
import tsconfig from 'vite-tsconfig-paths'
import path from 'node:path'
import inertia from '@adonisjs/inertia/client'

export default defineConfig({
  plugins: [
    tsconfig({
      projects: [path.join(import.meta.dirname, 'tsconfig.web.json')],
    }),
    react(),
    adonisjs({
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entrypoints: ['resources/css/app.css', 'resources/js/app.tsx'],

      /**
       * Paths to watch and reload the browser on file change
       */
      reload: ['resources/views/**/*.edge'],
    }),
    inertia({
      ssr: {
        enabled: true,
        entrypoint: 'resources/js/ssr.tsx',
      },
    }),
  ],
})
