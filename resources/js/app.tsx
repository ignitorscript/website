import '../css/app.css'
import './bootstrap'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'

void createInertiaApp({
  progress: false,
  title: (title) => (title ? `${title} - Scypher` : 'Scypher'),
  resolve: (name) =>
    resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
  setup: ({ App, el, props }) => {
    createRoot(el).render(<App {...props} />)
  },
})
