import { MicroArchiveIcon, MicroLinkIcon } from "@/icons/dev-icons";
import { ProjectContext } from "@/providers/ContextProvider";
import { useContext, useEffect, useRef, useState } from "react";

const Badge = (props: { forked?: boolean; template?: boolean }) => (
  <div
    className={`flex h-min items-center px-[8px] text-[10px] text-gray-400 rounded-full border-[1px] ${
      props.forked
        ? "bg-blue-400/10  border-blue-400/20"
        : props.template
        ? "bg-green-400/10  border-green-400/20"
        : null
    }`}
  >
    <p>{props.forked ? "forked" : props.template ? "template" : null}</p>
  </div>
);

const Topic = (props: { name: string }) => (
  <div className="flex h-min w-fit break-keep items-center px-[8px] text-[10px] text-gray-500 rounded-full bg-blue-400/10">
    {props.name}
  </div>
);

const LanguageCircle = (props: { language: string }) => {
  const [colour, setColour] = useState<string>("#ffffff");

  const { languageColourData, setLanguageColourData } = useContext(ProjectContext);
  const languageColourDataRef = useRef(languageColourData);

  useEffect(() => {
    languageColourDataRef.current = languageColourData;
  }, [languageColourData]);

  useEffect(() => {
    const getColourFromWorker = async () => {
      const response = await (
        await fetch(`https://language-colour.filipsysak.workers.dev/get?l=${props.language}`)
      ).json();

      setColour(response["color"] ?? "#ffffff");
      setLanguageColourData((prevData) => ({
        ...prevData,
        [props.language]: response["color"] ?? "#ffffff",
      }));
    };

    if (props.language in languageColourDataRef.current) {
      setColour(languageColourDataRef.current[props.language]);
      console.log("No need for fetching, already in cache");

      return;
    }

    if (props.language !== "unknown") getColourFromWorker();
  }, [languageColourDataRef, props.language, setLanguageColourData]);

  return (
    <div
      className={`size-2.5 border-[1px] rounded-full`}
      style={{ borderColor: `#ffffff4c`, backgroundColor: `${colour}80` }}
    />
  );
};

const PulsingSkeletonText = (props: { length: number; list: string[] }) => (
  <div className="w-full flex flex-wrap gap-2">
    {Array.from({ length: props.length }).map((_, index) => (
      <div
        key={`loader-${index}`}
        className={`${
          props.list[Math.floor(Math.random() * props.list.length)]
        } h-3 pb-2 bg-white/5 rounded-full animate-pulse delay-500`}
        style={{ transitionDelay: `${index * 1000}ms` }}
      />
    ))}
  </div>
);

export const SkeletonRepoCard = () => {
  const listOfLengths = ["w-8", "w-12", "w-16", "w-20", "w-24", "w-28", "w-32"];

  return (
    <div className="rounded-md border-white/10 bg-neutral-950 border-[1px] h-full w-full p-2">
      <div className="flex flex-col justify-between h-full">
        <PulsingSkeletonText length={6} list={listOfLengths} />

        <div className="*:justify-end">
          <PulsingSkeletonText length={2} list={listOfLengths} />
        </div>
      </div>
    </div>
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
}) => (
  <div className="rounded-md text-xs text-gray-300 border-white/10 bg-neutral-950 border-[1px] p-3 flex flex-col h-full">
    <div className="flex justify-between rounded-md">
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
        <a href={props.repositoryLink ?? props.repoLink} target="_blank" className="*:fill-gray-500 hover:*:fill-white">
          <MicroLinkIcon />
        </a>

        <a
          href={props.commitsLink ?? `${props.repoLink}/commits`}
          target="_blank"
          className="*:fill-gray-500 hover:*:fill-white"
        >
          <MicroArchiveIcon />
        </a>
      </div>
    </div>

    <div className="flex flex-col flex-grow">
      <div className="flex-grow">
        <p>{props.repoDescription}</p>
      </div>

      <div className={`flex flex-wrap gap-1 ${props.topics.length > 0 ? "pb-2" : null}`}>
        {props.topics.map((topic, index) => (
          <Topic key={`${topic}-${index}`} name={topic} />
        ))}
      </div>

      <div className="flex justify-between">
        <p className="text-gray-600">Last updated: {new Date(props.lastUpdate).toDateString()}</p>

        <div className="flex items-center gap-1">
          <LanguageCircle language={props.mainLanguage ?? "unknown"} />

          <p className="text-gray-600">{props.mainLanguage ?? "unknown"}</p>
        </div>
      </div>
    </div>
  </div>
);
