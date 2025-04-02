"use client";

import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { ProjectData } from "@/types/global";

export const ProjectContext = createContext<{
  currentPage: string;
  repoListData: ProjectData[];
  setRepoListData: React.Dispatch<React.SetStateAction<ProjectData[]>>;
  pinnedRepoListData: ProjectData[];
  setPinnedRepoListData: React.Dispatch<React.SetStateAction<ProjectData[]>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<"home" | "projects">>;
  languageColourData: Record<string, string>;
  setLanguageColourData: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}>({
  currentPage: "home",
  repoListData: [],
  setRepoListData: () => {},
  pinnedRepoListData: [],
  setPinnedRepoListData: () => {},
  languageColourData: {},
  setLanguageColourData: () => {},
  setCurrentPage: () => {},
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<"home" | "projects">("home");
  const [repoListData, setRepoListData] = useState<ProjectData[]>([]);
  const [pinnedRepoListData, setPinnedRepoListData] = useState<ProjectData[]>([]);
  const [languageColourData, setLanguageColourData] = useState<Record<string, string>>({});

  return (
    <ProjectContext.Provider
      value={{
        currentPage: currentPage,
        repoListData: repoListData,
        setRepoListData: setRepoListData,
        pinnedRepoListData: pinnedRepoListData,
        setPinnedRepoListData: setPinnedRepoListData,
        languageColourData: languageColourData,
        setLanguageColourData: setLanguageColourData,
        setCurrentPage: setCurrentPage,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
