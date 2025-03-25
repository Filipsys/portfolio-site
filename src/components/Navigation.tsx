"use client";

import { ProjectContext } from "@/providers/ContextProvider";
import { useContext } from "react";

export const Navigation = () => {
  const { setCurrentPage } = useContext(ProjectContext);

  const handlePageState = (page: "home" | "projects") => {
    setCurrentPage(page);
  };

  return (
    <nav className="block h-fit w-full lg:w-fit p-8">
      <ul className="flex select-none justify-center gap-x-8 text-xl tracking-tight *:z-50 sm:gap-x-16 sm:text-2xl lg:flex-col lg:items-end lg:text-3xl">
        <li className="cursor-pointer">
          <button onClick={() => handlePageState("home")}>Home</button>
        </li>
        <li className="cursor-pointer">
          <button onClick={() => handlePageState("projects")}>Projects</button>
        </li>
        <li className="*:line-through *:cursor-default">
          <button>About</button>
        </li>
        <li className="*:line-through *:cursor-default">
          <button>Notes</button>
        </li>
      </ul>
    </nav>
  );
};
