"use client";

import { Grid } from "@/components/Grid";
import { HomeComponent } from "@/components/Home";
import { Separator } from "@/components/Separator";
import { ProjectsComponent } from "@/components/ProjectsComponent";
import { ChristmasLights } from "@/components/ChristmasLights";
import { useEffect, useRef, useState, memo, useMemo } from "react";
import { ProjectContext } from "@/providers/ContextProvider";
import type { ProjectData } from "@/types/env";

const FullContent = memo(
  (props: {
    isChristmas: boolean;
    currentPage: string;
    setCurrentPage: React.Dispatch<React.SetStateAction<"home" | "projects">>;
  }) => (
    <>
      {props.isChristmas ? <ChristmasLights /> : null}

      <div className="h-max items-center justify-center md:flex-col lg:mx-16 lg:flex lg:flex-row xl:mx-40 2xl:mx-80">
        <nav className="block h-fit w-full p-8 lg:w-1/5 2xl:w-2/5">
          <ul className="flex select-none justify-center gap-x-8 text-xl tracking-tight *:z-50 sm:gap-x-16 sm:text-2xl lg:flex-col lg:items-end lg:text-3xl">
            <li className="cursor-pointer">
              <button onClick={() => props.setCurrentPage("home")}>Home</button>
            </li>
            <li className="cursor-pointer">
              <button onClick={() => props.setCurrentPage("projects")}>Projects</button>
            </li>
            <li className="*:line-through *:cursor-default">
              <button>About</button>
            </li>
            <li className="*:line-through *:cursor-default">
              <button>Notes</button>
            </li>
          </ul>
        </nav>

        <div className="hidden h-dvh lg:flex lg:items-center *:h-1/3">
          <Separator vertical />
        </div>

        <main className="flex z-50 h-max w-full items-center justify-center p-6 text-xl lg:h-dvh lg:w-4/5">
          {props.currentPage === "home" ? (
            <HomeComponent />
          ) : props.currentPage === "projects" ? (
            <ProjectsComponent />
          ) : null}
        </main>
      </div>
    </>
  )
);

FullContent.displayName = "FullContent";

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [currentPage, setCurrentPage] = useState<"home" | "projects">("home");
  const [repoListData, setRepoListData] = useState<ProjectData[]>([]);
  const [isChristmas, setIsChristmas] = useState(false);

  const movableGridRef = useRef<HTMLDivElement>(null);
  const projectState = useMemo(() => ({ repoListData, setRepoListData }), [repoListData]);

  useEffect(() => {
    if ([12, 1].includes(new Date().getMonth() + 1)) setIsChristmas(true);
  }, []);

  return (
    <ProjectContext.Provider value={projectState}>
      <main
        className="bg-background text-foreground font-overpass w-full"
        id="hover-div"
        onMouseMove={(event) => setCursorPosition({ x: event.clientX, y: event.clientY })}
        onMouseOut={() => (movableGridRef.current ? (movableGridRef.current.style.opacity = "0") : null)}
        onMouseOver={() =>
          movableGridRef.current && cursorPosition.x !== 0 && cursorPosition.y !== 0
            ? (movableGridRef.current.style.opacity = "1")
            : null
        }
      >
        <FullContent isChristmas={isChristmas} currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <Grid cursorPosition={cursorPosition} ref={movableGridRef} />
      </main>
    </ProjectContext.Provider>
  );
}
