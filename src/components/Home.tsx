import { Separator } from "@/components/Separator";
import { TechCards } from "@/components/TechCards";
import { Links } from "@/components/Links";

export const HomeComponent = () => {
  return (
    <div>
      <div className="px-2 py-6">
        <h1 className="text-xl font-light tracking-wide xs:text-2xl sm:text-3xl">
          Hi, I&apos;m Filip, a self-taught front-end developer from Poland. I mainly work with{" "}
          <span className="text-green-500">React</span>,{" "}
          <span className="text-pink-500">NextJS</span>,{" "}
          <span className="dark:text-blue-200 text-blue-500">TailwindCSS</span>,{" "}
          <span className="text-blue-600">TypeScript</span>, and relational databases like{" "}
          <span className="text-orange-400">SQLite</span>.
        </h1>
      </div>

      <Separator />

      <div className="px-2 py-6">
        <h1 className="pt-2">- Links</h1>

        <div className="flex flex-col fill-white/50 font-DMMono text-[#d3d3d3]/50 *:flex *:cursor-pointer *:justify-between *:text-xs *:font-light *:tracking-wide *:xs:text-sm *:sm:text-base">
          <Links />
        </div>
      </div>

      <div className="z-50 px-2">
        <h1 className="pt-2">- Tech I know and use</h1>

        <div className="mb-8 grid w-full grid-cols-1 gap-3 text-white/50 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:mb-0">
          <TechCards />
        </div>
      </div>
    </div>
  );
};
