// import { memo } from "react";
import { MicroArchiveIcon, MicroLinkIcon } from "@/icons/dev-icons";

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

export const RepoCard = (props: {
  repoName: string;
  repoLink: string;
  repoDescription: string;
  isFork: boolean;
  isTemplate: boolean;
  lastUpdate: string;
  mainLanguage: string;
  topics: string[];
  staggerDelay: number;
  forkLink?: string;
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

      <div className="flex gap-1 items-center *:transition-all *:duration-100">
        <a href={props.repoLink} target="_blank" className="*:fill-gray-500 hover:*:fill-white hover:scale-125">
          <MicroLinkIcon />
        </a>

        <a
          href={`${props.repoLink}/commits`}
          target="_blank"
          className="*:fill-gray-500 hover:*:fill-white hover:scale-125"
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
          {/* TODO: Create the coloured circles for the languages */}
          {/* <div className="size-2.5 border-[1px] border-red-500/30 rounded-full bg-red-400/30" /> */}
          <p className="text-gray-600">{props.mainLanguage ?? "unknown"}</p>
        </div>
      </div>
    </div>
  </div>
);

RepoCard.displayName = "RepoCard";
