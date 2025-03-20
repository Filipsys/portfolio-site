"use client";

import { HomeComponent } from "@/components/Home";
import { ProjectsComponent } from "@/components/ProjectsComponent";
import { ProjectContext } from "@/providers/ContextProvider";
import { useContext } from "react";

export const MainSection = () => {
  const { currentPage } = useContext(ProjectContext);

  return currentPage === "home" ? <HomeComponent /> : currentPage === "projects" ? <ProjectsComponent /> : null;
};
