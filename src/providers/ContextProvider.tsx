"use client";

import { createContext, ReactNode, useState } from "react";
import type { ProjectData } from "@/types/env";

export const ProjectContext = createContext<{
  currentPage: string;
  repoListData: ProjectData[];
  setRepoListData: React.Dispatch<React.SetStateAction<ProjectData[]>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<"home" | "projects">>;
}>({
  currentPage: "home",
  repoListData: [],
  setRepoListData: () => {},
  setCurrentPage: () => {},
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<"home" | "projects">("home");
  const [repoListData, setRepoListData] = useState<ProjectData[]>([]);

  return (
    <ProjectContext.Provider
      value={{
        currentPage: currentPage,
        repoListData: repoListData,
        setRepoListData: setRepoListData,
        setCurrentPage: setCurrentPage,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
