import ReactDOMServer from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import type { Page, PageProps } from '@inertiajs/core'
import { parse } from 'node-html-parser'
import { StrictMode } from 'react'

export default async function render(page: Page<PageProps>) {
  const template = await createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) =>
      resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup: ({ App, props }) => (
      <StrictMode>
        <App {...props} />
      </StrictMode>
    ),
  })

  const root = await Promise.resolve(parse(template.body))

  const el = await Promise.resolve(root.querySelector('#app')!)

  await Promise.resolve(el.setAttribute('role', 'presentation'))

  return await Promise.resolve({ head: template.head, body: el.toString() })
}
