"use client";

import { useRef, useState } from "react";
import { Spinner } from "@/components/fun/Spinner/Spinner";
import { ErrorPopup } from "@/components/fun/Verification/ErrorPopup";

export const Verification = () => {
  const [loading1, setLoading1] = useState<boolean>(false);
  const [loading2, setLoading2] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [clickCount, setClickCount] = useState<number>(0);

  const declineButton = useRef<HTMLButtonElement>(null);
  const verificationWindowRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {showPopup ? <ErrorPopup /> : null}

      <div
        ref={verificationWindowRef}
        className="animate-delayedAppear z-50 fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/40 backdrop-blur-xs"
      >
        <div className="bg-red-500 text-white p-3 w-3/4 md:w-1/2 2xl:w-1/3 max-w-[800px] flex flex-col gap-8">
          <div>
            <p className="text-4xl">
              Please verify your age using our face scanner loyalty programme
            </p>
            <p className=" text-sm">
              UK's Online Safety Act has forced us to verify each user visiting
              our site. You may verify yourself by scanning your face, ID,
              passport, credit or debit card, or any other personal data to
              pass. By verifying your identity, you allow us to use your data
              and never delete it from our storage.
            </p>
            <a
              href="https://filyys.dev/fun/terms"
              className="underline text-xs"
            >
              Read more here
            </a>{" "}
            <a
              href="https://filyys.dev/fun/terms"
              className="underline text-xs"
            >
              Read about UK's OSA here
            </a>{" "}
            <a
              href="https://filyys.dev/fun/terms"
              className="underline text-xs"
            >
              Read about how your data is processed
            </a>
          </div>

          <div className="flex items-center flex-col gap-8 *:bg-red-500 *:p-2">
            <div className="flex gap-2 *:cursor-pointer *:w-40 *:aspect-square *:p-2 *:border-2 *:border-white">
              <button
                type="button"
                className="flex items-center justify-center"
                onClick={() => {
                  const div = verificationWindowRef.current;
                  if (!div) return;

                  setLoading1(true);
                  setTimeout(() => {
                    setShowPopup(true);

                    setTimeout(() => div.remove(), 10);
                  }, 3000);
                }}
              >
                {loading1 ? <Spinner /> : <p>Scan your face</p>}
              </button>
              <button
                type="button"
                className="flex items-center justify-center"
                onClick={() => {
                  const div = verificationWindowRef.current;
                  if (!div) return;

                  setLoading2(true);
                  setTimeout(() => {
                    setShowPopup(true);

                    setTimeout(() => div.remove(), 10);
                  }, 3000);
                }}
              >
                {loading2 ? <Spinner /> : <p>Scan your personal data</p>}
              </button>
            </div>

            <button
              type="button"
              ref={declineButton}
              className="duration-75 ease-in delay-150 border-2 border-white cursor-pointer"
              onClick={() => {
                const btn = declineButton.current;
                if (!btn) return;

                setClickCount((count) => count + 1);
                btn.style.transform = `translate(${100 * (clickCount + 1)}px, 0)`;
              }}
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
