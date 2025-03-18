import { createContext } from "react";
import type { ProjectContextType } from "@/types/env";

export const ProjectContext = createContext<ProjectContextType>({
  repoListData: [],
  setRepoListData: () => {},
});
