import * as Navigation from '~/js/Components/Elements/Navigation'

export default function Index() {
  return (
    <>
      <Navigation.Group className="px-3 py-4">
        <Navigation.Root className="flex items-center justify-between">
          <Navigation.Stack
            focusable
            className="absolute data-[focus=false]:-top-20 data-[focus=true]:top-1 left-0"
          >
            <Navigation.Button>Skip To Content</Navigation.Button>
          </Navigation.Stack>
          <Navigation.Stack>
            <Navigation.Link href="/">Logo</Navigation.Link>
          </Navigation.Stack>
          <Navigation.List className="flex items-center justify-between">
            <Navigation.Item className="bg-red-900">
              <Navigation.Link href="/">Documentation</Navigation.Link>
            </Navigation.Item>
            <Navigation.Item className="bg-red-900">
              <Navigation.Button>Social</Navigation.Button>
              <Navigation.Panel className="bg-blue-800 absolute">Facebook</Navigation.Panel>
            </Navigation.Item>
            <Navigation.Item className="bg-red-900">
              <Navigation.Button>Blogs</Navigation.Button>
              <Navigation.Content>Blogs Content</Navigation.Content>
            </Navigation.Item>
            <Navigation.Item className="bg-red-900">
              <Navigation.Button>Resources</Navigation.Button>
              <Navigation.Panel className="bg-blue-800 absolute">
                Resources Content
              </Navigation.Panel>
            </Navigation.Item>
          </Navigation.List>
          <Navigation.Portal className="bg-blue-800 top-[--navigation-portal-offset-top] absolute inset-x-0" />
        </Navigation.Root>
      </Navigation.Group>
    </>
  )
}
