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
        <h2 className="py-2 text-lg underline underline-offset-4 xs:text-xl">Links</h2>

        <div className="flex flex-col fill-white/50 font-overpassMono dark:text-[#d3d3d3]/50 *:flex *:cursor-pointer *:justify-between *:text-xs *:font-light *:tracking-wide *:xs:text-sm *:sm:text-base">
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
            <a href="mailto:quietus.fits_0p@icloud.com">quietus.fits_0p@icloud.com</a>

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
          <h2 className="py-2 text-lg underline underline-offset-4 xs:text-xl">Tech I know and use</h2>
        </div>

        <div className="mb-8 grid w-full grid-cols-1 gap-3 text-black/50 dark:text-white/50 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:mb-0">
          <div className="h-fit w-full rounded-md dark:border-white/10 border-black/10 border-[1px] flex items-center">
            <div className="*:size-5 p-3 m-2 rounded-md dark:*:fill-[#d3d3d3]/90 fill-black/90 bg-black/10 dark:bg-white/10">
              <TypescriptIcon />
            </div>
            <div>
              <p className="text-sm text-black dark:text-[#d3d3d3]">TypeScript</p>
              <p className="font-extralight text-xs pr-1 [line-height:0.7rem]">Typesafe JavaScript</p>
            </div>
          </div>
          <div className="h-fit w-full rounded-md dark:border-white/10 border-black/10 border-[1px] flex items-center">
            <div className="*:size-5 p-3 m-2 rounded-md dark:*:fill-[#d3d3d3]/90 fill-black/90 bg-black/10 dark:bg-white/10">
              <TailwindIcon />
            </div>
            <div>
              <p className="text-sm text-black dark:text-[#d3d3d3]">TailwindCSS</p>
              <p className="font-extralight text-xs pr-1 [line-height:0.7rem]">Modern CSS framework</p>
            </div>
          </div>
          <div className="h-fit w-full rounded-md dark:border-white/10 border-black/10 border-[1px] flex items-center">
            <div className="*:size-5 p-3 m-2 rounded-md dark:*:fill-[#d3d3d3]/90 fill-black/90 bg-black/10 dark:bg-white/10">
              <VercelIcon />
            </div>
            <div>
              <p className="text-sm text-black dark:text-[#d3d3d3]">Vercel</p>
              <p className="font-extralight text-xs pr-1 [line-height:0.7rem]">Hosting & Cloud infrastructure</p>
            </div>
          </div>
          <div className="h-fit w-full rounded-md dark:border-white/10 border-black/10 border-[1px] flex items-center">
            <div className="*:size-5 p-3 m-2 rounded-md dark:*:fill-[#d3d3d3]/90 fill-black/90 bg-black/10 dark:bg-white/10">
              <BunIcon />
            </div>
            <div>
              <p className="text-sm text-black dark:text-[#d3d3d3]">Bun</p>
              <p className="font-extralight text-xs pr-1 [line-height:0.7rem]">All-in-one JavaScript toolkit</p>
            </div>
          </div>
          <div className="h-fit w-full rounded-md dark:border-white/10 border-black/10 border-[1px] flex items-center">
            <div className="*:size-5 dark:*:fill-[#d3d3d3]/90 fill-black/90 p-3 m-2 rounded-md bg-black/10 dark:bg-white/10">
              <ReactIcon />
            </div>
            <div>
              <p className="text-sm text-black dark:text-[#d3d3d3]">React</p>
              <p className="font-extralight text-xs pr-1 [line-height:0.7rem]">Javascript framework</p>
            </div>
          </div>
          <div className="h-fit w-full rounded-md dark:border-white/10 border-black/10 border-[1px] flex items-center">
            <div className="*:size-5 dark:*:fill-[#d3d3d3]/90 fill-black/90 p-3 m-2 rounded-md bg-black/10 dark:bg-white/10">
              <SqliteIcon />
            </div>
            <div>
              <p className="text-sm text-black dark:text-[#d3d3d3]">SQLite</p>
              <p className="font-extralight text-xs pr-1 [line-height:0.7rem]">Lightweight database</p>
            </div>
          </div>
          <div className="h-fit w-full rounded-md dark:border-white/10 border-black/10 border-[1px] flex items-center">
            <div className="*:size-5 dark:*:fill-[#d3d3d3]/90 fill-black/90 p-3 m-2 rounded-md bg-black/10 dark:bg-white/10">
              <ViteIcon />
            </div>
            <div>
              <p className="text-sm text-black dark:text-[#d3d3d3]">Vite</p>
              <p className="font-extralight text-xs pr-1 [line-height:0.7rem]">Frontend build tool</p>
            </div>
          </div>
          <div className="h-fit w-full rounded-md dark:border-white/10 border-black/10 border-[1px] flex items-center">
            <div className="*:size-5 dark:*:fill-[#d3d3d3]/90 fill-black/90 p-3 m-2 rounded-md bg-black/10 dark:bg-white/10">
              <NextJSIcon />
            </div>
            <div>
              <p className="text-sm text-black dark:text-[#d3d3d3]">Next.js</p>
              <p className="font-extralight text-xs pr-1 [line-height:0.7rem]">Frontend React framework</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
