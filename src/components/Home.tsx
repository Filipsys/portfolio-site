import {
  SmallGithubIcon,
  SmallLinkedinIcon,
  SmallGmailIcon,
  TypescriptIcon,
  TailwindIcon,
  ReactIcon,
  NextJSIcon,
  VercelIcon,
  SqliteIcon,
  BunIcon,
  ViteIcon,
} from "@/icons/dev-icons";
import { Separator } from "@/components/Separator";
import { ComponentType } from "react";

const TechCard = (props: { icon: ComponentType; name: string; description: string }) => (
  <div className="h-fit w-full rounded-md border-white/10 border-[1px] flex items-center">
    <div className="*:size-5 p-3 m-2 rounded-md *:fill-[#d3d3d3]/90 bg-white/10">
      <props.icon />
    </div>

    <div>
      <p className="text-sm text-[#d3d3d3]">{props.name}</p>
      <p className="font-extralight text-xs pr-1 [line-height:0.7rem]">{props.description}</p>
    </div>
  </div>
);

export const HomeComponent = () => {
  return (
    <div>
      <div className="px-2 py-6">
        <h1 className="text-xl font-light tracking-wide xs:text-2xl sm:text-3xl">
          Hi, I&apos;m Filip, a self-taught front-end developer from Poland. I mainly work with{" "}
          <span className="text-green-500">React</span>, <span className="text-pink-500">NextJS</span>,{" "}
          <span className="dark:text-blue-200 text-blue-500">TailwindCSS</span>,{" "}
          <span className="text-blue-600">TypeScript</span>, and relational databases like{" "}
          <span className="text-orange-400">SQLite</span>.
        </h1>
      </div>

      <Separator />

      <div className="px-2 py-6">
        <h1 className="pt-2">- Links</h1>

        <div className="flex flex-col fill-white/50 font-DMMono dark:text-[#d3d3d3]/50 *:flex *:cursor-pointer *:justify-between *:text-xs *:font-light *:tracking-wide *:xs:text-sm *:sm:text-base">
          <div className="group/github z-50 transition-colors duration-200 hover:text-black dark:hover:text-white">
            <a href="https://github.com/Filipsys" target="_blank">
              github.com/Filipsys
            </a>

            <div className="flex items-center gap-2">
              <p className="hidden sm:block">Github</p>
              <div className="size-4 duration-200 dark:fill-white/50 dark:group-hover/github:fill-white fill-black">
                <SmallGithubIcon />
              </div>
            </div>
          </div>

          <div className="group/linkedin z-50 py-1 transition-colors duration-200 hover:text-black dark:hover:text-white xs:p-0">
            <a href="https://linkedin.com/in/filipsysak" target="_blank">
              linkedin.com/in/filipsysak
            </a>
            <div className="flex items-center gap-2">
              <p className="hidden sm:block">LinkedIn</p>
              <div className="size-4 duration-200 dark:fill-white/50 dark:group-hover/linkedin:fill-white fill-black">
                <SmallLinkedinIcon />
              </div>
            </div>
          </div>

          <div className="group/email z-50 transition-colors duration-200 hover:text-black dark:hover:text-white">
            <a href="mailto:mail@filyys.dev">mail@filyys.dev</a>

            <div className="flex items-center gap-2">
              <p className="hidden sm:block">Email</p>
              <div className="size-4 duration-200 dark:fill-white/50 dark:group-hover/email:fill-white fill-black">
                <SmallGmailIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="z-50 px-2">
        <div className="flex items-center">
          <h1 className="pt-2">- Tech I know and use</h1>
        </div>

        <div className="mb-8 grid w-full grid-cols-1 gap-3 text-black/50 dark:text-white/50 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:mb-0">
          {(
            [
              [TypescriptIcon, "TypeScript", "Typesafe JavaScript"],
              [TailwindIcon, "TailwindCSS", "Modern CSS framework"],
              [VercelIcon, "Vercel", "Hosting & Cloud infrastructure"],
              [BunIcon, "Bun", "All-in-one JavaScript toolkit"],
              [ReactIcon, "React", "Javascript framework"],
              [SqliteIcon, "SQLite", "Lightweight database"],
              [ViteIcon, "Vite", "Frontend build tool"],
              [NextJSIcon, "Next.js", "Frontend React framework"],
            ] as [ComponentType, string, string][]
          ).map((element) => (
            <TechCard key={element[1]} icon={element[0]} name={element[1]} description={element[2]} />
          ))}
        </div>
      </div>
    </div>
  );
};
