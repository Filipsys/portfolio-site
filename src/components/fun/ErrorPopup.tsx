"use client";

import { CloseIcon, InfoIcon } from "@/icons/fun-icons";
import { useEffect, useState } from "react";

export const ErrorPopup = () => {
  const [counter, setCounter] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [randomness, setRandomness] = useState(0.6);

  useEffect(() => {
    const interval = setInterval(() => setCounter((counter) => counter + 1), 1000 * multiplier * randomness);

    return () => clearInterval(interval);
  }, [multiplier, randomness]);

  return (
    <div
      className={`h-10 w-fit bg-red-500 text-white flex flex-row items-center gap-2 p-2 ${
        counter > 200 ? "animate-random1" : ""
      }`}
    >
      <div className={`*:size-5 ${counter > 100 ? "animate-bounce" : ""}`}>
        <InfoIcon />
      </div>

      <div className={`flex flex-row gap-1 ${randomness < 0.3 ? "animate-spin" : ""}`}>
        {counter} <p>errors</p>
      </div>

      <div
        className="*:size-5 hover:*:scale-150 cursor-pointer"
        onClick={() => {
          setMultiplier((multiplier) => (multiplier > 0.05 ? multiplier - 0.05 : 0.05));
          setRandomness(Math.random());
        }}
      >
        <CloseIcon />
      </div>
    </div>
  );
};
