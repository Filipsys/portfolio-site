import { Separator } from "@/components/Separator";
import { ChristmasLights } from "@/components/ChristmasLights";
import { Navigation } from "@/components/Navigation";
import { MainSection } from "@/components/MainSection";
import { FunModeTeleporter } from "@/components/FunModeTeleporter";
// import { ThemeToggle } from "@/components/ThemeToggle";

export const FullContent = () => (
  <main className="bg-background text-foreground font-DMSans w-full h-dvh flex justify-center" id="hover-div">
    <ChristmasLights />

    <div className="absolute top-2 left-2">{/* <ThemeToggle /> */}</div>

    <div className="absolute bottom-0 left-0">
      <FunModeTeleporter />
    </div>

    <div className="h-full w-full max-w-7xl items-center justify-center lg:flex lg:flex-row">
      <Navigation />

      <div className="hidden h-dvh lg:flex lg:items-center *:h-1/3">
        <Separator vertical />
      </div>

      <main className="flex z-50 items-center justify-center p-6 text-xl lg:h-dvh lg:w-4/5">
        <MainSection />
      </main>
    </div>
  </main>
);
