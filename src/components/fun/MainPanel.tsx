import { Separator } from "@/components/fun/Separator";
import { TechList } from "@/components/fun/TechList";
import { Campfire } from "@/components/fun/Campfire";

export const MainPanel = () => (
  <div className="flex flex-col">
    <h1 className="py-8 italic text-8xl text-shadow-white font-bold text-transparent bg-clip-text [-webkit-text-stroke:2px_red] bg-gradient-to-b from-green-400 to-green-900 text-center">
      Welcome to my site
    </h1>

    <div className="w-full flex justify-center">
      <Campfire />
    </div>

    <p>
      Welcome to my hidden part of the internet. You have been through a lot,
      take a rest, relax, sip some coffee and sit down next to the campfire.
    </p>
    <div className="animate-sidewaysGlitch">
      Don&apos;t worry, it won&apos;t bite :)
    </div>

    <Separator />

    <div className="w-full flex justify-center">
      <p className="text-3xl text-red-700 text-center">About Me Section</p>
    </div>

    <Separator />

    <div className="px-2 py-6">
      Hi, I&apos;m Filip, also known as filyys or Filipsys. I&apos;m a
      self-taught front-end developer from Poland. I mainly work with React,
      NextJS, TailwindCSS, TypeScript, and relational databases like SQLite.
    </div>

    <TechList />
  </div>
);
