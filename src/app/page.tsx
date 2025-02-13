// import { ModeToggle } from "@/app/components/ModeToggle";
import { HomeComponent } from "@/components/Home";
import Link from "next/link";
import Layout from "@/app/layout";

export default function Home() {
  return (
    <Layout>
      <main className="dark:bg-black bg-white text-black dark:text-[#d3d3d3] w-full" id="hover-div">
        <div className="absolute left-0 top-0 z-10 h-screen w-full hidden lg:block overflow-hidden">
          <div
            className="lights absolute -inset-2 -translate-x-20 dark:hidden"
            style={{
              display: "none",
            }}
          >
            light1
          </div>
          <div
            className="lights absolute -inset-2 left-0 translate-x-1/2 w-full dark:hidden"
            style={{
              display: "none",
            }}
          >
            light2
          </div>
          <div
            className="lights absolute -translate-y-2 translate-x-2 right-0 dark:hidden"
            style={{
              display: "none",
            }}
          >
            light3
          </div>
        </div>

        <div className="absolute top-0 right-0 z-50 p-2">{/* <ModeToggle /> */}</div>

        <div className="h-max items-center justify-center font-custom2 md:flex-col lg:mx-16 lg:flex lg:flex-row xl:mx-40 2xl:mx-80">
          <nav className="block h-fit w-full p-8 lg:w-1/5 2xl:w-2/5">
            <ul className="flex select-none justify-center gap-x-8 text-xl tracking-tight sm:gap-x-16 sm:text-2xl lg:flex-col lg:items-end lg:text-3xl">
              <li className="z-50 cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="line-through">
                <a href="/about">About</a>
              </li>
              <li className="line-through">
                <a href="/notes">Notes</a>
              </li>
              <li className="line-through">
                <a href="/projects">Projects</a>
              </li>
            </ul>
          </nav>

          <div className="hidden h-dvh lg:flex lg:items-center *:opacity-15 *:bg-black *:dark:bg-white">
            separator
            {/* <Separator orientation="vertical" className="h-1/3" /> */}
          </div>

          <main className="flex z-50 h-max w-full items-center justify-center p-6 font-custom2 text-xl lg:h-dvh lg:w-4/5">
            <HomeComponent />
          </main>
        </div>

        <div className="absolute left-0 top-0 h-screen w-full z-10">
          <div className="relative h-screen w-full">
            <div
              className="absolute left-0 top-0 h-screen w-full"
              id="mask-div"
              style={{
                backgroundSize: "3vmin 3vmin",
                maskMode: "alpha",
                maskImage: `url(radialmask.svg)`,
                maskPosition: "50% 50%",
                maskRepeat: "no-repeat",
                maskSize: "100vh 100vh",
                transition: "opacity 0.2s ease-in-out",
                opacity: 0,
              }}
            ></div>
            <div
              className="absolute left-0 top-0 h-screen w-full"
              id="grid-pattern"
              style={{
                backgroundSize: "3vmin 3vmin",
              }}
            ></div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
