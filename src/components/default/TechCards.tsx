import {
  TypescriptIcon,
  TailwindIcon,
  CloudflareIcon,
  BunIcon,
  ReactIcon,
  MySQLIcon,
  ViteIcon,
  NextJSIcon,
} from "@/icons/dev-icons";
import { useTranslation } from "react-i18next";

import type { ComponentType } from "react";

const tech: [ComponentType, string, string][] = [
  [TypescriptIcon, "TypeScript", "TypeScript"],
  [TailwindIcon, "TailwindCSS", "TailwindCSS"],
  [CloudflareIcon, "Cloudflare", "Cloudflare"],
  [BunIcon, "Bun", "Bun"],
  [ReactIcon, "React", "React"],
  [MySQLIcon, "MySQL", "MySQL"],
  [ViteIcon, "Vite", "Vite"],
  [NextJSIcon, "Next.js", "NextJS"],
];

const TechCard = (props: {
  icon: ComponentType;
  name: string;
  translationID: string;
}) => {
  const t = useTranslation("Tech");

  return (
    <div className="h-fit w-full border-[1px] border-neutral-700/10 dark:border-neutral-300/10 flex items-center">
      <div className="p-3 m-2 bg-neutral-900/10 dark:bg-neutral-300/10 *:size-5">
        <props.icon />
      </div>

      <div>
        <p className="text-sm">{props.name}</p>
        <p className="font-extralight text-xs pr-1 [line-height:0.7rem]">
          {t(props.translationID)}
        </p>
      </div>
    </div>
  );
};

export const TechCards = () => (
  <>
    {tech.map((element) => (
      <TechCard
        key={element[1]}
        icon={element[0]}
        name={element[1]}
        translationID={element[2]}
      />
    ))}
  </>
);
