"use client";

import { HomeComponent } from "@/components/Home";
import { Separator } from "@/components/Separator";
import { Grid } from "@/components/Grid";
import { ChristmasLights } from "@/components/ChristmasLights";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isChristmas, setIsChristmas] = useState(false);
  const movableGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMonth = new Date().getMonth() + 1;

    if ([12, 1].includes(currentMonth)) setIsChristmas(true);
  }, []);

  return (
    <main
      className="bg-background text-foreground font-overpass w-full"
      id="hover-div"
      onMouseMove={(event) => setCursorPosition({ x: event.clientX, y: event.clientY })}
      onMouseOut={() => (movableGridRef.current ? (movableGridRef.current.style.opacity = "0") : null)}
      onMouseOver={() => (movableGridRef.current ? (movableGridRef.current.style.opacity = "1") : null)}
    >
      {isChristmas ? <ChristmasLights /> : null}

      <div className="h-max items-center justify-center md:flex-col lg:mx-16 lg:flex lg:flex-row xl:mx-40 2xl:mx-80">
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

        <div className="hidden h-dvh lg:flex lg:items-center *:h-1/3">
          <Separator vertical />
        </div>

        <main className="flex z-50 h-max w-full items-center justify-center p-6 text-xl lg:h-dvh lg:w-4/5">
          <HomeComponent />
        </main>
      </div>

      <Grid cursorPosition={cursorPosition} ref={movableGridRef} />
    </main>
  );
}
