import { Navigation } from "@/components/default/Navigation";
import { Separator } from "@/components/default/Separator";
import { Projects } from "@/components/default/Projects";

export const ProjectsPage = () => {
return (
    <main
      className="min-h-screen h-full flex justify-center bg-neutral-200 dark:bg-neutral-900 font-DMSans text-neutral-700 dark:text-neutral-300 fill-neutral-700 dark:fill-neutral-300"
      id="hover-div"
    >
      <div className="h-full w-full max-w-7xl items-center justify-center lg:flex lg:flex-row">
        <Navigation />

        <div className="hidden h-dvh lg:flex lg:items-center *:h-1/3">
          <Separator vertical />
        </div>

        <main className="flex z-50 items-center justify-center p-8 text-xl lg:h-dvh lg:w-4/5">
          <Projects />
        </main>
      </div>
    </main>
  );
};
