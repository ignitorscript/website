import * as Header from '../Components/Elements/Header'

export default function Index() {
  return (
    <>
      <Header.Root>
        <Header.Navigation>
          <Header.Block>
            <Header.Link />
          </Header.Block>
          <Header.List>
            <Header.Item>
              <Header.Trigger />
              <Header.Content />
            </Header.Item>
            <Header.Item>
              <Header.Trigger />
              <Header.Content>
                <Header.Block />
                <Header.Sub>
                  <Header.Item>
                    <Header.Trigger />
                    <Header.Content />
                  </Header.Item>
                </Header.Sub>
              </Header.Content>
            </Header.Item>
          </Header.List>
          <Header.Viewport />
        </Header.Navigation>
      </Header.Root>
      <div>Hello World</div>
    </>
  )
}
