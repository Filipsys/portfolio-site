"use client";

import { ProjectContext } from "@/providers/ContextProvider";
import { useContext } from "react";

export const Navigation = () => {
  const { setCurrentPage } = useContext(ProjectContext);

  const handlePageState = (page: "home" | "projects") => {
    setCurrentPage(page);
  };

  return (
    <nav className="block w-full lg:w-fit pt-8 lg:pt-0 lg:pr-8">
      <div className="flex justify-center gap-x-8 text-xl tracking-tight *:z-50 sm:gap-x-16 sm:text-2xl lg:flex-col lg:items-end lg:text-3xl">
        <button
          className="cursor-pointer"
          onClick={() => handlePageState("home")}
          type="button"
        >
          Home
        </button>
        <button
          className="cursor-pointer"
          onClick={() => handlePageState("projects")}
          type="button"
        >
          Projects
        </button>
        <button className="line-through cursor-default" type="button">
          About
        </button>
        <button className="line-through cursor-default" type="button">
          Notes
        </button>
      </div>
    </nav>
  );
};
