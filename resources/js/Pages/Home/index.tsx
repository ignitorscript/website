import * as Navigation from '~/js/Components/Elements/Navigation'

export default function Index() {
  return (
    <>
      <Navigation.Group>
        <Navigation.Root className="flex items-center justify-between">
          <Navigation.Stack>
            <Navigation.Link href="/">Logo</Navigation.Link>
          </Navigation.Stack>
          <Navigation.List className="flex items-center justify-between">
            <Navigation.Item className="bg-red-900">
              <Navigation.Link href="/">Documentation</Navigation.Link>
            </Navigation.Item>
            <Navigation.Item className="bg-red-900">
              <Navigation.Button>Social</Navigation.Button>
              <Navigation.Panel className="bg-blue-800">Facebook</Navigation.Panel>
            </Navigation.Item>
            <Navigation.Item className="bg-red-900">
              <Navigation.Button>Blogs</Navigation.Button>
              <Navigation.Content>Blogs Content</Navigation.Content>
            </Navigation.Item>
            <Navigation.Item className="bg-red-900">
              <Navigation.Button>Resources</Navigation.Button>
              <Navigation.Content>Resources Content</Navigation.Content>
            </Navigation.Item>
          </Navigation.List>
          <Navigation.Portal className="bg-blue-800 absolute" />
        </Navigation.Root>
      </Navigation.Group>
      <div>Hello</div>
    </>
  )
}
