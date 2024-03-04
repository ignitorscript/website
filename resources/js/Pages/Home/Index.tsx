import Announce from '~/js/Components/Elements/Announce'
import HeaderBlock from '~/js/Components/Blocks/Header'
import { Link } from '@inertiajs/react'

export default function Index() {
  return (
    <>
      <HeaderBlock />
      <div className="flex items-start justify-around my-20 mx-3 h-full">
        <div id="content" className="flex flex-col justify-start items-start w-1/2 mx-3">
          <Announce className="py-1 min-w-max bg-accent/10 rounded-full flex items-center justify-start">
            <Announce.Indicator className="px-2 h-full bg-accent/30 rounded-full ml-3 font-black">
              New
            </Announce.Indicator>
            <Announce.Link className="px-3 block" href="/docs/components#header">
              <b>Header</b> <span>Component Has Been Released</span>
            </Announce.Link>
          </Announce>
          <div className="mt-8 mb-8 font-sans z-10">
            <div className="text-[122px] leading-snug">
              <h1 className="font-light">Beyond</h1>
              <div className="flex items-center justify-start">
                <h1 className="font-light">The</h1>
                <span className="mx-2" />
                <h1 className="font-semibold">Customized</h1>
              </div>
            </div>
            <h2 className="font-bold text-text/60">Build Everything Amazing In Your Own Hand</h2>
          </div>
          <div className="flex items-center justify-between">
            <Link
              href="/why"
              className="mx-3 dark:bg-accent/50 dark:hover:bg-accent/40 dark:active:bg-accent/20 bg-accent/60 hover:bg-accent/70 active:bg-accent px-3 py-2 rounded"
            >
              Why Ignitor-ui?
            </Link>
            <Link
              href="/docs"
              className="mx-3 dark:bg-primary/50 dark:hover:bg-primary/40 dark:active:bg-primary/20 bg-primary/60 hover:bg-primary/70 active:bg-primary px-3 py-2 rounded"
            >
              Getting Start
            </Link>
          </div>
        </div>
        <div className="w-3/4 bg-accent/10 h-[32rem]" />
      </div>
      <div className="mx-3">
        <h1></h1>
        <div>asd</div>
      </div>
    </>
  )
}
