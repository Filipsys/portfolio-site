import {
  TypescriptIcon,
  TailwindIcon,
  VercelIcon,
  BunIcon,
  ReactIcon,
  SqliteIcon,
  ViteIcon,
  NextJSIcon,
} from "@/icons/dev-icons";
import type { ComponentType } from "react";

const tech: [ComponentType, string, string][] = [
  [TypescriptIcon, "TypeScript", "Typesafe JavaScript"],
  [TailwindIcon, "TailwindCSS", "Modern CSS framework"],
  [VercelIcon, "Vercel", "Hosting & Cloud infrastructure"],
  [BunIcon, "Bun", "All-in-one JavaScript toolkit"],
  [ReactIcon, "React", "Javascript framework"],
  [SqliteIcon, "SQLite", "Lightweight database"],
  [ViteIcon, "Vite", "Frontend build tool"],
  [NextJSIcon, "Next.js", "Frontend React framework"],
];

const TechCard = (props: { icon: ComponentType; name: string; description: string }) => (
  <div className="h-fit w-full text-primary border-[1px] border-primary/10 flex items-center">
    <div className="*:size-5 p-3 m-2 *:fill-primary bg-primary/10">
      <props.icon />
    </div>

    <div>
      <p className="text-sm">{props.name}</p>
      <p className="font-extralight text-xs pr-1 [line-height:0.7rem]">{props.description}</p>
    </div>
  </div>
);

export const TechCards = () => (
  <>
    {tech.map((element) => (
      <TechCard key={element[1]} icon={element[0]} name={element[1]} description={element[2]} />
    ))}
  </>
);
