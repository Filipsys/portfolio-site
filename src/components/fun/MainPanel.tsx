import { Separator } from "@/components/fun/Separator";
import { TechList } from "@/components/fun/TechList";

export const MainPanel = () => (
  <div className="flex flex-col">
    <div className="w-full flex justify-center">
      <div
        className="h-32 w-32"
        style={{
          backgroundImage: "url(./campfire.gif)",
          backgroundSize: "150px",
        }}
      />
    </div>

    <p>
      Welcome to my hidden part of the internet. You have been through a lot, take a rest, relax, sip some coffee and
      sit down next to the campfire.
      <div className="animate-sidewaysGlitch">Don&apos;t worry, it won&apos;t bite :)</div>
    </p>

    <Separator />

    <div className="w-full flex justify-center">
      <p className="text-3xl text-red-700 text-center">About Me Section</p>
    </div>

    <Separator />

    <div className="px-2 py-6">
      Hi, I&apos;m Filip, also known as filyys or Filipsys. I&apos;m a self-taught front-end developer from Poland. I
      mainly work with React, NextJS, TailwindCSS, TypeScript, and relational databases like SQLite.
    </div>

    <TechList />
  </div>
);
