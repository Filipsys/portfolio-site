"use client";

import { HomeComponent } from "@/components/Home";
// import { ProjectContext } from "@/providers/ContextProvider";
import { useContext, lazy } from "react";

// const ProjectsComponent = lazy(
//   () => import("@/components/projects/ProjectsComponent"),
// );

export const MainSection = () => {
  const { currentPage } = useContext(ProjectContext);

  return currentPage === "home" ? (
    <HomeComponent />
  ) : currentPage === "projects" ? (
    <ProjectsComponent />
  ) : null;
};
