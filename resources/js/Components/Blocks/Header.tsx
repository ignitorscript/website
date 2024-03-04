import { Link } from '@inertiajs/react'
import Header from '~/js/Components/Elements/Header'
import { useTheme } from '~/js/Contexts/Theme'

export default function HeaderBlock() {
  const theme = useTheme()

  return (
    <Header className="backdrop-blur-sm">
      <Header.Navigation className="flex items-center justify-between p-3 py-4">
        <Header.Block>
          <Link href="/" aria-label="logo">
            {theme != null && theme.theme === 'dark' ? (
              <div className="bg-text w-10 h-10" />
            ) : (
              <div className="bg-text w-10 h-10" />
            )}
          </Link>
        </Header.Block>
        <Header.List className="flex items-center justify-end">
          <Header.Item className="relative after:absolute after:-bottom-2 after:h-1 after:data-[hover=true]:w-full after:data-[hover=false]:w-0 after:bg-text after:left-0 after:transition-all after:duration-200 mx-4">
            <Link href="/docs">Documentation</Link>
          </Header.Item>
          <Header.Item className="relative after:absolute after:-bottom-2 after:h-1 after:data-[hover=true]:w-full after:data-[hover=false]:w-0 after:bg-text after:left-0 after:transition-all after:duration-200 mx-4">
            <Link href="/releases-process">Releases Process</Link>
          </Header.Item>
          <Header.Block className="flex items-center">
            <Header.Link
              aria-label="github"
              href="https://github.com/ignitorscript"
              className="px-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 48 48">
                <title>Github</title>
                <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                  <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20S35.046 4 24 4M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24s-10.745 24-24 24S0 37.255 0 24" />
                  <path d="M19.183 45.472c-.193-.25-.193-2.475 0-6.674c-2.072.072-3.38-.072-3.927-.431c-.819-.539-1.64-2.2-2.367-3.371c-.728-1.17-2.343-1.356-2.995-1.618c-.652-.261-.816-1.328 1.797-.522c2.613.807 2.74 3.005 3.565 3.518c.825.514 2.796.29 3.689-.122c.893-.412.827-1.944.987-2.551c.201-.567-.509-.693-.524-.697c-.873 0-5.454-.997-6.713-5.433c-1.258-4.437.363-7.337 1.228-8.583c.576-.832.525-2.603-.153-5.314c2.464-.315 4.365.46 5.703 2.326c.002.01 1.756-1.043 4.527-1.043c2.772 0 3.755.858 4.514 1.043c.76.185 1.366-3.266 6.053-2.326c-.979 1.923-1.798 4.326-1.173 5.314c.626.987 3.08 4.127 1.573 8.583c-1.006 2.97-2.982 4.781-5.929 5.433c-.337.108-.506.282-.506.522c0 .36.456.399 1.114 2.086c.44 1.124.471 4.336.096 9.635c-.951.242-1.691.405-2.22.488c-.937.147-1.955.23-2.955.261c-1 .032-1.347.029-2.73-.1a19.799 19.799 0 0 1-2.654-.424" />
                </g>
              </svg>
            </Header.Link>
            <Header.Trigger
              className="px-4"
              aria-label="change theme"
              onClick={() => {
                if (theme) {
                  theme.toggle()
                }
              }}
            >
              {theme !== null && theme.theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
                  <title>Current Mode Is Dark</title>
                  <path
                    fill="currentColor"
                    d="M12 20a8 8 0 1 1 8-8a8 8 0 0 1-8 8m0-18a10 10 0 1 0 10 10A10 10 0 0 0 12 2"
                  />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
                  <title>Current Mode Is Light</title>
                  <path
                    fill="currentColor"
                    d="m3.55 19.09l1.41 1.41l1.8-1.79l-1.42-1.42M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.71l1.8 1.79l1.41-1.41l-1.79-1.8M20.45 5l-1.41-1.4l-1.8 1.79l1.42 1.42M13 1h-2v3h2M6.76 5.39L4.96 3.6L3.55 5l1.79 1.81zM1 13h3v-2H1m12 9h-2v3h2"
                  />
                </svg>
              )}
            </Header.Trigger>
          </Header.Block>
        </Header.List>
      </Header.Navigation>
    </Header>
  )
}
