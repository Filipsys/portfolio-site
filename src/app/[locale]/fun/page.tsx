"use client";

import { MainPanel } from "@/components/fun/MainPanel";
import { SidePanel } from "@/components/fun/SidePanel";
import { ErrorPopup } from "@/components/fun/ErrorPopup";
import { Cookies } from "@/components/fun/Cookies";
import { CAPTCHA } from "@/components/fun/CAPTCHA";
import { Verification } from "@/components/fun/Verification/Verification";

import { HalloweenMainPanel } from "@/components/fun/halloween/MainPanel";
import { HalloweenSidePanel } from "@/components/fun/halloween/SidePanel";

import { useState } from "react";

const halloweenMode = true;

export default function Fun() {
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(false);

  if (halloweenMode)
    return (
      <>
        <div className="absolute w-full h-24 bg-gradient-to-b from-black" />
        <div className="absolute w-full bottom-0 h-24 bg-gradient-to-b to-black z-0" />

        <img src="/halloween.gif" className="absolute -top-12 left-1/6" />
        <img src="/halloween.gif" className="absolute top-0 left-1/8" />
        <img src="/halloween.gif" className="absolute -top-14 left-1/2" />
        <img src="/halloween.gif" className="absolute top-0 left-1/5" />

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
                  <HalloweenMainPanel />
                </div>
              </div>

              <div className="h-full w-1/3">
                <HalloweenSidePanel />
              </div>
            </div>
          </div>
        </main>
      </>
    );

  return (
    <>
      <div className="absolute w-full h-12 bg-gradient-to-b from-zinc-700" />

      <main
        className="text-white h-full w-full flex justify-center"
        id="main"
        style={{
          backgroundImage: "url(/background3.webp)",
          backgroundSize: "10vw 10vw",
        }}
      >
        {cookiesAccepted ? <Verification /> : null}
        <Cookies setCookiesAccepted={setCookiesAccepted} />

        <CAPTCHA />

        <div className="bg-zinc-950 max-w-7xl [font-family:serif] flex flex-col h-dvh [box-shadow:_0px_0px_50px_30px_rgba(0,_0,_0,_1)]">
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

        <div className="fixed top-4 left-4">
          <ErrorPopup />
        </div>
      </main>
    </>
  );
}
