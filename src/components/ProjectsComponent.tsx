"use client";

import { useState, useContext, memo, useEffect } from "react";
import { RepoCard, SkeletonRepoCard } from "@/components/RepoCard";
import { ProjectContext } from "@/providers/ContextProvider";
import type { SingleProject, ProjectData } from "@/types/env";
import { MicroArrowIcon } from "@/icons/dev-icons";

export const ProjectsComponent = memo(() => {
  const [isLoading, setIsLoading] = useState(true);
  const [categoryPinned, setCategoryPinned] = useState<boolean>(true);
  const { repoListData, setRepoListData } = useContext(ProjectContext);

  useEffect(() => {
    const fetchDataFromGithub = async () => {
      setIsLoading(true);

      const res = await fetch("https://api.github.com/users/Filipsys/repos?sort=updated&direction=desc&per_page=6");
      const data = await res.json();

      const newData: ProjectData[] = [];
      data.forEach((project: SingleProject) => {
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
      });

      setRepoListData(newData);
      setIsLoading(false);
    };

    if (categoryPinned) {
      setIsLoading(false);
      return;
    }

    if (repoListData.length === 0) {
      fetchDataFromGithub();
    } else {
      setIsLoading(false);
    }
  }, [categoryPinned, repoListData.length, setRepoListData]);

  const LoadingSkeleton = () => (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <SkeletonRepoCard key={`skeleton-${index}`} />
      ))}
    </>
  );

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h1>- {categoryPinned ? "Pinned" : "Recent"} Github projects</h1>

        <button
          className="flex gap-1 items-center *:fill-gray-500 hover:underline underline-offset-4 decoration-gray-500"
          onClick={() => setCategoryPinned(!categoryPinned)}
        >
          <p className="text-sm text-gray-500">Switch to {categoryPinned ? "recent" : "pinned"}</p>
          <MicroArrowIcon />
        </button>
      </div>

      <div className="grid grid-cols-2 grid-rows-3 gap-2 *:h-36">
        {isLoading ? (
          <LoadingSkeleton />
        ) : categoryPinned ? (
          /* Make this godawful code dynamic!!!!!!!!! */
          (
            [
              [
                "macreact",
                "💻 Cloning macOS look in React cause I'm bored",
                false,
                false,
                "",
                "TypeScript",
                ["react", "typescript", "bun", "tailwindcss", "vitejs"],
                "https://github.com/Filipsys/macreact",
                "https://github.com/Filipsys/macreact/commits",
              ],
              [
                "arc-captcha-design",
                "🤖 Captcha design based on https://arcprize.org",
                false,
                false,
                "",
                "TypeScript",
                [],
                "https://github.com/Filipsys/arc-captcha-design",
                "https://github.com/Filipsys/arc-captcha-design/commits",
              ],
              [
                "snow-canvas",
                "Snow particles in canvas (WIP)",
                false,
                false,
                "",
                "TypeScript",
                ["typescript", "canvas", "vanilla", "vite"],
                "https://github.com/Filipsys/snow-canvas",
                "https://github.com/Filipsys/snow-canvas/commits",
              ],
              [
                "advent-of-code-2024",
                "No description, website, or topics provided.",
                false,
                false,
                "",
                "Python",
                ["advent-of-code"],
                "https://github.com/Filipsys/advent-of-code-2024",
                "https://github.com/Filipsys/advent-of-code-2024/commits",
              ],
            ] as [string, string, boolean, boolean, string, string, string[], string, string][]
          ).map((project, index) => (
            <RepoCard
              key={`${project[0]}-${index}`}
              repoName={project[0]}
              repoLink={project[7]}
              repoDescription={project[1]}
              isFork={project[2]}
              isTemplate={project[3]}
              lastUpdate={project[4]}
              mainLanguage={project[5]}
              topics={project[6]}
              repositoryLink={project[7]}
              commitsLink={project[8]}
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

        {categoryPinned ? (
          <>
            <SkeletonRepoCard />
            <SkeletonRepoCard />
          </>
        ) : null}
      </div>
    </div>
  );
});

ProjectsComponent.displayName = "ProjectsComponent";
