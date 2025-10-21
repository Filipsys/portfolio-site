import { MainPanel } from "@/components/halloween/MainPanel";
import { SidePanel } from "@/components/halloween/SidePanel";

export const HalloweenFunPage = () => {
  // const isHalloween = new Date().getMonth() + 1 === 10;
  const isHalloween = false;

  return isHalloween ? (
    <>
      <div className="absolute w-full h-24 bg-gradient-to-b from-black z-20" />
      <div className="absolute w-full bottom-0 h-24 bg-gradient-to-b to-black z-0" />

      <img src="/halloween.gif" className="z-20 absolute -top-12 left-1/6" />
      <img src="/halloween.gif" className="z-20 absolute top-0 left-1/8" />
      <img src="/halloween.gif" className="z-20 absolute -top-14 left-1/2" />
      <img src="/halloween.gif" className="z-20 absolute top-0 left-1/5" />

      <img src="/bats.gif" className="absolute top-1/3 left-8" />
      <img src="/bats.gif" className="absolute top-1/2 right-8" />
      <img src="/bats.gif" className="absolute top-5/6 right-8" />

      <main
        className="text-white h-dvh w-full flex justify-center"
        id="main"
        style={{
          backgroundImage: "url(/glitch.webp)",
          backgroundSize: "30vw 30vw",
        }}
        >
          <div className="z-10 bg-zinc-950 max-w-7xl [font-family:serif] flex flex-col h-dvh [box-shadow:_0px_0px_50px_30px_rgba(0,_0,_0,_1)]">
            <div className="w-full h-dvh flex flex-row">
              <div className="h-full w-2/3">
                <div className="w-full flex justify-center ">
                  <MainPanel />
                </div>
              </div>

              <div className="h-full w-1/3">
                <SidePanel />
              </div>
            </div>
          </div>
        </main>

    </>
  ) : null;
}
