import { Socials } from "@/components/default/fun/Socials";
import { LatestBlogs } from "@/components/default/fun/LatestBlogs";
import { Separator } from "@/components/default/fun/Separator";
// import { SignList } from "@/components/default/fun/SignList";
import { NoAI } from "@/components/default/fun/NoAI";
import { UnderlineAnimate } from "@/components/default/fun/UnderlineAnimate";
import { Latex } from "@/components/default/fun/Latex";

export const SidePanel = () => (
  <div className="flex flex-col gap-2">
    <a
      href="https://filyys.dev"
      className="border mb-4 flex justify-center items-center p-3"
    >
      Go back to my boring site clicking here
    </a>

    <NoAI />

    <LatestBlogs />
    <Socials />

    <p className="italic text-4xl font-bold ">Website of the week</p>

    <div className="*:overflow-hidden">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://deluks2006.github.io"
        className="text-green-500"
      >
        https://deluks2006.github.io
      </a>
      <iframe
        src="https://deluks2006.github.io"
        title="WOTW"
        className="w-full border-dashed aspect-video border-8 border-green-500 shadow-lg shadow-green-500"
      />
    </div>

    <Latex />

    <div className="text-yellow-400 font-mono text-4xl">
      <UnderlineAnimate text={"Quote of the day"} />
    </div>

    <p className="italic">
      &quot;When one does not want, you cannot make him want it.&quot; -
      Arystotle
    </p>

    <Separator />

    {/* TODO: <Opinions /> */}

    <p>
      The sign list is currently under maintenance, please forgive me for the
      broken website
    </p>

    {/* <SignList /> */}

    <div className="w-full h-24" />
  </div>
);

