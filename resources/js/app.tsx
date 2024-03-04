import '../css/app.css'
import './bootstrap'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import { resolvePageComponent } from '@adonisjs/vite/helpers'
import { ThemeProvider } from './Contexts/Theme'

void createInertiaApp({
  progress: false,
  title: (title) => (title ? `${title} - Scypher` : 'Scypher'),
  resolve: (name) => resolvePageComponent(`${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
  setup: ({ App, el, props }) => {
    createRoot(el).render(
      <ThemeProvider el={el}>
        <App {...props} />
      </ThemeProvider>
    )
  },
})
