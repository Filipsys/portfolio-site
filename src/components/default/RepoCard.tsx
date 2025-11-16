import { useEffect, useRef, useState } from "react";
import { MicroArchiveIcon, MicroLinkIcon } from "@/icons/dev-icons";
import { Tooltip } from "@/components/default/Tooltip";
import { useTranslation } from "react-i18next";

const Badge = (props: { forked?: boolean; template?: boolean }) => {
  const isForked = props.forked ? "bg-blue-400/10  border-blue-400/20" : null;
  const isTemplate = props.template ? "bg-green-400/10  border-green-400/20" : null;

  return (
    <div className={`flex h-min items-center px-[8px] text-[10px] text-gray-400 border-[1px] ${isForked ?? isTemplate}`}>
      <p>{props.forked ? "forked" : props.template ? "template" : "empty"}</p>
    </div>
  );
}

const Topic = (props: { name: string }) => (
  <div className="flex h-min w-fit break-keep items-center px-[8px] text-[10px] text-gray-500 bg-blue-400/10">
    {props.name}
  </div>
);

const LanguageCircle = (props: { language: string }) => {
  const [colour, setColour] = useState<string>("#ffffff");

  useEffect(() => {
    const getColourFromWorker = async () => {
      const response = await (
        await fetch(`https://language-colour.filipsysak.workers.dev/get?l=${props.language}`)
      ).json() as { color: string };

      setColour(response.color ?? "#ffffff");
    };

    // if (props.language in languageColourDataRef.current) {
    //   setColour(languageColourDataRef.current[props.language]);
    //
    //   return;
    // }

    if (props.language !== "unknown") getColourFromWorker();
  }, [props.language]);

  return (
    <div
      className={"size-2.5 border-[1px] border-neutral-700/15 dark:border-neutral-300/15"}
      style={{ backgroundColor: `${colour}80` }}
    />
  );
};

export const RepoCard = (props: {
  repoName: string;
  repoLink: string;
  repoDescription: string;
  isFork: boolean;
  isTemplate: boolean;
  lastUpdate: string;
  mainLanguage: string;
  topics: string[];
  forkLink?: string;
  repositoryLink?: string;
  commitsLink?: string;
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col h-full p-3 text-xs border-[1px] border-neutral-700/10 dark:border-neutral-300/10">
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-2">
            <p className="text-base">{props.repoName}</p>

            <div className="flex gap-1">
              {props.isFork ? <Badge forked /> : null}
              {props.isTemplate ? <Badge template /> : null}
            </div>
          </div>
        </div>

        <div className="flex gap-1 items-center *:transition-colors *:duration-300">
          <div className="relative">
            <a
              href={props.repositoryLink ?? props.repoLink}
              className="peer *:fill-neutral-700/50 dark:*:fill-neutral-300/50 *:hover:fill-neutral-700 dark:*:hover:fill-neutral-300"
              target="_blank"
              rel="noreferrer"
            >
              <MicroLinkIcon />
            </a>

            <Tooltip text={t("Projects.visitRepo")} />
          </div>

          <div className="relative">
            <a
              href={props.commitsLink ?? `${props.repoLink}/commits`}
              className="peer *:fill-neutral-700/50 dark:*:fill-neutral-300/50 *:hover:fill-neutral-700 dark:*:hover:fill-neutral-300"
              target="_blank"
              rel="noreferrer"
            >
              <MicroArchiveIcon />
            </a>

            <Tooltip text={t("Projects.commits")} />
          </div>
        </div>
      </div>

      <div className="flex flex-col grow">
        <div className="grow">
          <p>{props.repoDescription || t("Projects.noDescription")}</p>
        </div>

        <div
          className={`flex flex-wrap gap-1 ${props.topics.length > 0 ? "pb-2" : null}`}
        >
          {props.topics.map((topic) => (
            <Topic key={`repo-${props.repoName}-topic-${topic}`} name={topic} />
          ))}
        </div>

        <div className="flex justify-between">
          <p className="text-neutral-700/50 dark:text-neutral-300/50">
            {t("Projects.recentlyUpdated")}: {new Date(props.lastUpdate).toDateString()}
          </p>

          <div className="flex items-center gap-1">
            <LanguageCircle language={props.mainLanguage ?? "unknown"} />

            <p className="text-neutral-700/50 dark:text-neutral-300/50">
              {props.mainLanguage ?? "unknown"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
