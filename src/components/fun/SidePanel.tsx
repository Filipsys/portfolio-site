import { Socials } from "@/components/fun/Socials";
import { LatestBlogs } from "@/components/fun/LatestBlogs";
import { Separator } from "@/components/fun/Separator";
import { SignList } from "@/components/fun/SignList";
import { UnderlineAnimate } from "@/components/fun/UnderlineAnimate";
import { Latex } from "@/components/fun/Latex";

export const SidePanel = () => (
  <div className="flex flex-col gap-2">
    <LatestBlogs />
    <Socials />

    <div className="w-full">
      <div
        className="h-36 w-36"
        style={{
          backgroundImage: "url(./noai.gif)",
          backgroundSize: "150px",
          backgroundRepeat: "no-repeat",
        }}
      />
      <p>
        This place is a <i>NO AI</i> sanctuary. Any AI models seen around will be unmercifully
        deleted using the newest top technology laser ray.
      </p>
    </div>

    <p className="italic text-4xl font-bold ">Website of the week</p>

    <div className="*:overflow-hidden">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://neobrutalism.com/"
        className="text-green-500"
      >
        https://neobrutalism.com
      </a>
      <iframe
        src="https://neobrutalism.com"
        title="WOTW"
        className="w-full border-dashed aspect-video border-8 border-green-500 shadow-lg shadow-green-500"
        style={{ zoom: "0.25" }}
      />
    </div>

    <Latex />

    <div className="text-yellow-400 font-mono text-4xl">
      <UnderlineAnimate text={"Quote of the day"} />
    </div>

    <p className="italic">
      &quot;When one does not want, you cannot make him want it.&quot; - Arystotle
    </p>

    <Separator />

    {/* TODO: <Opinions /> */}

    <SignList />

    <div className="w-full h-24" />
  </div>
);
