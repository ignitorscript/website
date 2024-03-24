import '../css/app.css'
import './bootstrap'
import { createInertiaApp } from '@inertiajs/react'
import { hydrateRoot } from 'react-dom/client'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { StrictMode } from 'react'

void createInertiaApp({
  progress: false,
  title: (title) => {
    return title ? `${title} - ${import.meta.env.VITE_APP_NAME}` : import.meta.env.VITE_APP_NAME
  },
  resolve: (name) =>
    resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
  setup: ({ App, el, props }) => {
    el.setAttribute('role', 'presentation')
    hydrateRoot(
      el,
      <StrictMode>
        <App {...props} />
      </StrictMode>
    )
  },
})
