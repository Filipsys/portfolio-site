"use client";

import { useRef } from "react";

export const Cookies = () => {
  const declineButton = useRef<HTMLButtonElement>(null);
  const cookiesWindowRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cookiesWindowRef}
      className="z-50 fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/40 backdrop-blur-sm"
    >
      <div className="bg-red-500 text-white p-3 w-3/4 md:w-1/2 2xl:w-1/3 max-w-[800px] flex flex-col gap-8">
        <div>
          <p className="text-4xl">Cookies!!! Please accept cookies to continue</p>
          <p className=" text-sm">
            Cookies allow us to earn money off of your data, it helps us pick ads that are more specifially chosen to
            your recommendations, they will not be used for mischief.
          </p>
          <a href="#" className="underline text-xs">
            Read the full terms here
          </a>
        </div>

        <div className="flex justify-between gap-2 *:border-white *:bg-red-500 *:border-2 *:p-2">
          <button
            onClick={() => {
              const div = cookiesWindowRef.current;
              if (!div) return;

              div.remove();
            }}
          >
            <p>🍪 Accept all the cookies (yummy)</p>
          </button>

          <button
            ref={declineButton}
            className="duration-1000 ease-in-out delay-150"
            onClick={() => {
              const btn = declineButton.current;
              if (!btn) return;

              btn.style.transform = "translateY(1000px) rotate(60deg)";
            }}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};
