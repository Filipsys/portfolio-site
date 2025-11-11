// import { withSSR } from 'react-i18next';

import { Separator } from "@/components/default/Separator";
import { Navigation } from "@/components/default/Navigation";
import { HomeComponent } from "@/components/default/Home";
import { FunModeTeleporter } from "@/components/default/FunModeTeleporter";
import { Projects } from "@/components/default/Projects";

import { Suspense } from "react";

type Pages = "home" | "projects";

// const getPageCookie = async (): Promise<Pages | null> => {
//   "use client";
//
//   return browser.cookies.get({ name: "current_page" });
// };

const Home = async () => (
  <main
    className="min-h-screen h-full flex justify-center bg-neutral-200 dark:bg-neutral-900 font-DMSans text-neutral-700 dark:text-neutral-300 fill-neutral-700 dark:fill-neutral-300"
    id="hover-div"
  >
    {/* <ChristmasLights />

    <div className="absolute top-2 left-2">
      <ThemeToggle />
    </div>

    <div className="absolute top-2 left-12">
      <LanguageToggle />
    </div> */}

    <div className="absolute bottom-0 left-0">
      <FunModeTeleporter />
    </div>

    <div className="h-full w-full max-w-7xl items-center justify-center lg:flex lg:flex-row">
      <Navigation />

      <div className="hidden h-dvh lg:flex lg:items-center *:h-1/3">
        <Separator vertical />
      </div>

      <main className="flex z-50 items-center justify-center p-8 text-xl lg:h-dvh lg:w-4/5">
        <HomeComponent />

        {/* <Suspense fallback=<HomeComponent />>
          {<Projects /> ? await getPageCookie() === "projects" : null}
        </Suspense> */}
      </main>
    </div>
  </main>
);

// export default withSSR()(Home);
export default Home;
