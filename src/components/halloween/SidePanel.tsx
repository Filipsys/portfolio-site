import { Separator } from "@/components/default/fun/Separator";
import { UnderlineAnimate } from "@/components/default/fun/UnderlineAnimate";
import { Latex } from "@/components/default/fun/Latex";

import { HalloweenLatestBlogs } from "@/components/halloween/LatestBlogs";
import { HalloweenSocials } from "@/components/halloween/Socials";
import { ShakingText } from "@/components/halloween/ShakingText";

export const SidePanel = () => (
  <div className="flex flex-col gap-2">
    <a
      href="https://filyys.dev"
      className="border mb-4 flex justify-center items-center p-3"
    >
      Go back to my boring site clicking here
    </a>

    <div className="w-full flex">
      <div
        className="h-36 aspect-square"
        style={{
          backgroundImage: "url(./pumpkins-stack.gif)",
          backgroundSize: "130px",
          backgroundRepeat: "no-repeat",
        }}
      />

      <p className="text-xl">
        This <ShakingText text="spooky" /> place is a <i>NO AI</i> sanctuary. Any AI models seen around will be
        unmercifully spooked away using the a very scary skeleton statue.
      </p>
    </div>

    <HalloweenLatestBlogs />
    <HalloweenSocials />

    <p className="italic text-4xl font-bold ">Spooky site of the week</p>

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

    <div className="text-yellow-400 font-mono text-3xl">
      <UnderlineAnimate text={"Scary quote of the day"} />
    </div>

    <p className="italic">
      &quot;<ShakingText text="Spooky" /> season is very scary rahh are you scared yet&quot; -
      Arystotle
    </p>

    <Separator />

    <div className="w-full h-24" />
  </div>
);
