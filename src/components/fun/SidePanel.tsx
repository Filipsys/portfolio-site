import { Socials } from "@/components/fun/Socials";
import { LatestBlogs } from "@/components/fun/LatestBlogs";
import { Separator } from "@/components/fun/Separator";
import { SignList } from "@/components/fun/SignList";
import { Opinions } from "@/components/fun/Opinions";

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
        This place is a <i>NO AI</i> sanctuary. Any AI models seen around will be unmercifully deleted using the newest
        top technology laser ray.
      </p>
    </div>

    <p className="italic text-4xl font-bold ">Website of the week</p>

    <div className="*:overflow-hidden">
      <a target="_blank" href="https://neobrutalism.com/" className="text-green-500">
        https://neobrutalism.com
      </a>
      <iframe
        src="https://neobrutalism.com"
        title="WOTW"
        className="w-full border-dashed aspect-video border-8 border-green-500 shadow-lg shadow-green-500"
        style={{ zoom: "0.25" }}
      ></iframe>
    </div>

    <p className="text-yellow-400 font-mono text-4xl">Quote of the day</p>
    <p className="italic">&quot;When one does not want, you cannot make him want it.&quot; - Arystoteles</p>

    <Separator />

    <Opinions />

    <SignList />

    <div className="w-full h-24" />
  </div>
);
