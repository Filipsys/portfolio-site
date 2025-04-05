"use client";

import { useState, useContext, memo, useEffect } from "react";
import { RepoCard } from "@/components/projects/RepoCard";
import { ProjectContext } from "@/providers/ContextProvider";
import { MicroArrowIcon } from "@/icons/dev-icons";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import type { ProjectData, GithubResponseJSON } from "@/types/global";

export const ProjectsComponent = memo(() => {
  const [isLoading, setIsLoading] = useState(true);
  const [categoryPinned, setCategoryPinned] = useState<boolean>(true);
  const { repoListData, setRepoListData, pinnedRepoListData, setPinnedRepoListData } =
    useContext(ProjectContext);

  useEffect(() => {
    const fetchDataFromGithub = async () => {
      setIsLoading(true);

      let link: string;
      if (categoryPinned) {
        link = "https://pinned-repos.filipsysak.workers.dev/get?user=Filipsys";
      } else {
        link = "https://api.github.com/users/Filipsys/repos?sort=updated&direction=desc&per_page=6";
      }

      const res = await fetch(link);
      const data = await res.json();

      let newData: ProjectData[] = data;
      if (!categoryPinned) {
        newData = [];

        for (const project of data as GithubResponseJSON) {
          newData.push({
            repoName: project.name,
            repoLink: project.html_url,
            repoDescription: project.description,
            isFork: project.fork,
            isTemplate: project.is_template,
            lastUpdate: project.updated_at,
            mainLanguage: project.language,
            topics: project.topics,
          });
        }
      }

      if (categoryPinned) {
        setPinnedRepoListData(newData);
      } else {
        setRepoListData(newData);
      }

      setIsLoading(false);
    };

    if (repoListData.length === 0) {
      fetchDataFromGithub();
    } else {
      setIsLoading(false);
    }
  }, [categoryPinned, repoListData.length, setPinnedRepoListData, setRepoListData]);

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h1>- {categoryPinned ? "Pinned" : "Recent"} Github projects</h1>

        <button
          className="flex gap-1 items-center *:fill-gray-500 hover:underline underline-offset-4 decoration-gray-500 cursor-pointer"
          onClick={() => setCategoryPinned(!categoryPinned)}
          type="button"
        >
          <p className="text-sm text-gray-500">Switch to {categoryPinned ? "recent" : "pinned"}</p>

          <MicroArrowIcon />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-3 gap-2 *:w-full *:h-36">
        {isLoading ? (
          <LoadingSkeleton />
        ) : categoryPinned ? (
          pinnedRepoListData.map((project, index) => (
            <RepoCard
              key={`${project.repoName}-${index}`}
              repoName={project.repoName}
              repoLink={project.repoLink}
              repoDescription={project.repoDescription}
              isFork={project.isFork}
              isTemplate={project.isTemplate}
              lastUpdate={project.lastUpdate}
              mainLanguage={project.mainLanguage}
              topics={project.topics}
            />
          ))
        ) : (
          repoListData.map((project, index) => (
            <RepoCard
              key={`${project.repoName}-${index}`}
              repoName={project.repoName}
              repoLink={project.repoLink}
              repoDescription={project.repoDescription}
              isFork={project.isFork}
              isTemplate={project.isTemplate}
              lastUpdate={project.lastUpdate}
              mainLanguage={project.mainLanguage}
              topics={project.topics}
            />
          ))
        )}
      </div>
    </div>
  );
});
