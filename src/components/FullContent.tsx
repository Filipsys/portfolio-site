import { Separator } from "@/components/Separator";
import { ChristmasLights } from "@/components/ChristmasLights";
import { Navigation } from "@/components/Navigation";
import { MainSection } from "@/components/MainSection";
import { FunModeTeleporter } from "@/components/FunModeTeleporter";
// import { ThemeToggle } from "@/components/ThemeToggle";

export const FullContent = () => (
  <main className="bg-background text-foreground font-DMSans w-full" id="hover-div">
    <ChristmasLights />

    <div className="absolute top-2 left-2">{/* <ThemeToggle /> */}</div>

    <div className="absolute bottom-0 left-0">
      <FunModeTeleporter />
    </div>

    <div className="h-max items-center justify-center md:flex-col lg:mx-16 lg:flex lg:flex-row xl:mx-40 2xl:mx-80">
      <Navigation />

      <div className="hidden h-dvh lg:flex lg:items-center *:h-1/3">
        <Separator vertical />
      </div>

      <main className="flex z-50 h-max w-full items-center justify-center p-6 text-xl lg:h-dvh lg:w-4/5">
        <MainSection />
      </main>
    </div>
  </main>
);
