import { useEffect, useState, useContext, memo } from "react";
import { RepoCard } from "@/components/RepoCard";
import { ProjectContext } from "@/providers/ContextProvider";
import type { SingleProject, GithubResponseJSON, ProjectData } from "@/types/env";

export const ProjectsComponent = memo(() => {
  const [isLoading, setIsLoading] = useState(true);
  const { repoListData, setRepoListData } = useContext(ProjectContext);

  console.log(repoListData);

  useEffect(() => {
    const fetchDataFromGithub = async () => {
      setIsLoading(true);

      await fetch("https://api.github.com/users/Filipsys/repos?sort=updated&direction=desc&per_page=6")
        .then((response) => response.json())
        .then((response: GithubResponseJSON) => {
          const newData: ProjectData[] = [];

          response.forEach((project: SingleProject) => {
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
        })
        .catch((error) => {
          console.error("Error fetching GitHub repos:", error);
        });
    };

    if (repoListData.length === 0) fetchDataFromGithub();
    setIsLoading(false);
  }, [repoListData.length, setRepoListData]);

  const LoadingSkeleton = () => (
    <>
      <div className="rounded-md h-full w-full border-white/10 bg-neutral-950 border-[1px]" />
      <div className="rounded-md h-full w-full border-white/10 bg-neutral-950 border-[1px]" />
      <div className="rounded-md h-full w-full border-white/10 bg-neutral-950 border-[1px]" />
      <div className="rounded-md h-full w-full border-white/10 bg-neutral-950 border-[1px]" />
      <div className="rounded-md h-full w-full border-white/10 bg-neutral-950 border-[1px]" />
      <div className="rounded-md h-full w-full border-white/10 bg-neutral-950 border-[1px]" />
    </>
  );

  return (
    <div className="w-full">
      <h1>- Latest Github projects</h1>

      <div className="grid grid-cols-2 grid-rows-3 gap-2 *:h-36">
        {isLoading ? (
          <LoadingSkeleton />
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
              staggerDelay={index}
            />
          ))
        )}
      </div>
    </div>
  );
});

ProjectsComponent.displayName = "ProjectsComponent";
