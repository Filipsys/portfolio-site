import Layout from "@/app/layout";
import { MainPanel } from "@/components/fun/MainPanel";
import { SidePanel } from "@/components/fun/SidePanel";
import { ErrorPopup } from "@/components/fun/ErrorPopup";

export default function Fun() {
  return (
    <Layout>
      <main
        className="text-white w-full"
        id="hover-div"
        style={{
          backgroundImage: "url(/background3.webp)",
          backgroundSize: "10vw 10vw",
        }}
      >
        <div className="bg-zinc-950 [font-family:serif] flex flex-col h-dvh justify-center lg:mx-40 lg:flex xl:mx-80 2xl:mx-80 [box-shadow:_0px_0px_50px_30px_rgba(0,_0,_0,_1)]">
          <div
            className="w-full h-24 mb-12"
            style={{
              backgroundImage: "url(./sparkles.gif)",
              backgroundSize: "12vw",
              backgroundRepeat: "10",
            }}
          />

          <div className="w-full h-dvh flex flex-row">
            <div className="h-full w-2/3">
              <div className="w-full flex justify-center">
                <MainPanel />
              </div>
            </div>

            <div className="h-full w-1/3">
              <SidePanel />
            </div>
          </div>
        </div>

        {/* <div
          className="h-40 w-24"
          id="extinguisher"
          style={{
            backgroundImage: "url(./extinguisher.gif)",
            backgroundSize: "150px",
            backgroundRepeat: "no-repeat",
            opacity: "0",
            zIndex: "100",
          }}
        /> */}

        <div className="fixed top-4 left-4">
          <ErrorPopup />
        </div>
      </main>
    </Layout>
  );
}
