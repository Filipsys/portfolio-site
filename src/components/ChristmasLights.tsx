"use client";

import { Lights1, Lights2, Lights3 } from "@/assets/lights";
import { useState, useEffect } from "react";

export const ChristmasLights = () => {
  const [isChristmas, setIsChristmas] = useState(false);

  useEffect(() => {
    if ([12, 1].includes(new Date().getMonth() + 1)) setIsChristmas(true);
  }, []);

  return isChristmas ? (
    <div className="absolute left-0 top-0 z-10 h-screen w-full hidden lg:block overflow-hidden">
      <div
        className="lights absolute -inset-2 -translate-x-20 dark:hidden"
        style={{
          display: "none",
        }}
      >
        <Lights1 />
      </div>
      <div
        className="lights absolute -inset-2 left-0 translate-x-1/2 w-full dark:hidden"
        style={{
          display: "none",
        }}
      >
        <Lights2 />
      </div>
      <div
        className="lights absolute -translate-y-2 translate-x-2 right-0 dark:hidden"
        style={{
          display: "none",
        }}
      >
        <Lights3 />
      </div>
    </div>
  ) : null;
};
