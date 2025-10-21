"use client";

import { useState } from "react";

import { Cookies } from "@/components/default/fun/Cookies";
import { CAPTCHA } from "@/components/default/fun/CAPTCHA";
import { Verification } from "@/components/default/fun/verification/Verification";
import { ErrorPopup } from "@/components/default/fun/ErrorPopup";
import { MainPanel } from "@/components/default/fun/MainPanel";
import { SidePanel } from "@/components/default/fun/SidePanel";

export const DefaultFunPage = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(false);
  const [verificationPassed, setVerificationPassed] = useState<boolean>(true);

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
        <Cookies setCookiesAccepted={setCookiesAccepted} />

        {cookiesAccepted ? <Verification /> : null}
        {!verificationPassed ? <CAPTCHA /> : null}

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
