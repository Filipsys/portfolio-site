import { Separator } from "@/components/fun/Separator";
import { TechList } from "@/components/fun/TechList";
import { Campfire } from "@/components/fun/Campfire";
import { ShakingText } from "../ShakingText";

export const HalloweenMainPanel = () => (
  <div className="flex flex-col">
    <h1 className="py-8 italic text-7xl text-shadow-white font-bold text-transparent bg-clip-text [-webkit-text-stroke:2px_red] bg-gradient-to-b from-green-400 to-green-900 text-center">
      Welcome to my spooky site
    </h1>

    <div className="w-full flex justify-center">
      <Campfire />
    </div>

    <span>
      🎃🎃🎃 Welcome to my hidden part of the internet. 🍬🍬🍬 You have been through a lot,
      take a rest, relax, sip some coffee and sit down next to the campfire. 👻👻👻 
      <span className="pl-1 inline-block animate-sidewaysGlitch">
        Don&apos;t worry, it won&apos;t bite :)
      </span>
    </span>

    <Separator />

    <div className="w-full flex justify-center">
      <p className="text-3xl text-red-700 text-center flex gap-1"><ShakingText text="Scary" /><ShakingText text="me" /></p>
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
