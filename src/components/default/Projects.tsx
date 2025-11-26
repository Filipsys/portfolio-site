"use client";

import { useState, memo, useEffect } from "react";
import { RepoCard } from "@/components/default/RepoCard";
import { MicroArrowIcon } from "@/icons/dev-icons";
import { LoadingSkeleton } from "@/components/default/LoadingSkeleton";
import { useTranslation } from "react-i18next";

import type { ProjectData, GithubResponseJSON } from "@/../types/global";

export const Projects = memo(() => {
  const [isLoading, setIsLoading] = useState(true);
  const [categoryPinned, setCategoryPinned] = useState<boolean>(true);
  const [repos, setRepos] = useState<ProjectData[]>([]);

  const { t } = useTranslation();

  const getPinnedLocal = () => {
    const repos = localStorage.getItem("pinned-repos");

    return repos ? JSON.parse(repos) : {};
  };

  const getRecentLocal = () => {
    const repos = localStorage.getItem("recent-repos");

    return repos ? JSON.parse(repos) : {};
  };

  const setPinnedLocal = (repos: ProjectData[]) => {
    localStorage.setItem("pinned-repos", JSON.stringify(repos));
  };

  const setRecentLocal = (repos: ProjectData[]) => {
    localStorage.setItem("recent-repos", JSON.stringify(repos));
  };

  useEffect(() => {
    const fetchDataFromGithub = async () => {
      // Local storage repos
      const LSRepos = categoryPinned ? getPinnedLocal() : getRecentLocal();

      if (LSRepos.length !== 0) {
        setRepos(LSRepos);
        setIsLoading(false);

        return;
      }

      setIsLoading(true);

      const link = categoryPinned ?
        "https://pinned-repos.filipsysak.workers.dev/get?user=Filipsys" :
        "https://api.github.com/users/Filipsys/repos?sort=updated&direction=desc&per_page=6";

      const res = await fetch(link);
      const data = await res.json() as ProjectData | GithubResponseJSON;


      if (!categoryPinned) {
        const items: ProjectData[] = [];
        for (const project of data as GithubResponseJSON) {
          items.push({
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

        setRepos(items);
        setRecentLocal(items);
      } else {
        setRepos(data);
        setPinnedLocal(data);
      }

      setIsLoading(false);
    };

    fetchDataFromGithub();
  }, [categoryPinned]);

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h1>
          -{" "}
          {categoryPinned
            ? t("Projects.pinnedProjectsHeader")
            : t("Projects.recentProjectsHeader")}
        </h1>

        <button
          className="flex gap-1 items-center *:fill-gray-500 hover:underline underline-offset-4 decoration-gray-500 cursor-pointer"
          onClick={() => {
            setCategoryPinned(!categoryPinned)
            setRepos([]);
          }}
          type="button"
        >
          <p className="text-sm text-gray-500">
            {categoryPinned
              ? t("Projects.recentProjectsSwitch")
              : t("Projects.pinnedProjectsSwitch")}
          </p>

          <MicroArrowIcon />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-3 gap-2 *:w-full *:h-36">
        {isLoading
          ? <LoadingSkeleton />
          : (
            console.log(repos),
            repos.map((project, index) => (
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
