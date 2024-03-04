import { useCallback, useState } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'
import { createReactContext } from '~/js/Utilities/createReactContext'

export const [Theme, useTheme] = createReactContext<{
  el: HTMLElement
  theme: undefined | 'dark' | 'light'
  toggle: () => void
}>('Theme')

export const ThemeProvider = ({ el, children }: React.PropsWithChildren<{ el: HTMLElement }>) => {
  const [theme, setTheme] = useState<'dark' | 'light'>()

  useIsomorphicLayoutEffect(() => {
    if (el != null) {
      el.classList.add('bg-background', 'min-h-screen', 'h-full', 'text-text')
    }

    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setTheme(() => 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setTheme(() => 'light')
    }
  }, [])

  const toggle = useCallback(() => {
    if (theme === 'dark') {
      setTheme(() => 'light')
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
      return
    }

    if (theme === 'light') {
      setTheme(() => 'dark')
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
      return
    }
  }, [theme])

  return (
    <Theme.Provider el={el} theme={theme} toggle={toggle}>
      {children}
    </Theme.Provider>
  )
}
