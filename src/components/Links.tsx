import {
  RedirectIcon,
  SmallGithubIcon,
  SmallGmailIcon,
  SmallLinkedinIcon,
} from "@/icons/dev-icons";
import type { JSX } from "react";

const links: {
  id: number;
  name: string;
  link: string;
  icon: () => JSX.Element;
}[] = [
  {
    id: 1,
    name: "Github",
    link: "github.com/filipsys",
    icon: SmallGithubIcon,
  },
  {
    id: 2,
    name: "LinkedIn",
    link: "linkedin.com/in/filipsysak",
    icon: SmallLinkedinIcon,
  },
  {
    id: 3,
    name: "Email",
    link: "mail@filyys.dev",
    icon: SmallGmailIcon,
  },
];

const DesktopLink = (props: {
  element: { name: string; link: string; icon: () => JSX.Element };
}) => (
  <div className="flex justify-between group z-50 transition-colors duration-200 hover:text-neutral-700 dark:hover:text-neutral-300">
    <a
      className="flex gap-1 items-center"
      href={
        props.element.name === "Email"
          ? `mailto:${props.element.link}`
          : `https://${props.element.link}`
      }
      target="_blank"
      rel="noreferrer"
    >
      {props.element.link}

      <div className="opacity-0 duration-200 transition-opacity group-hover:opacity-100">
        <RedirectIcon />
      </div>
    </a>

    <a
      href={
        props.element.name === "Email"
          ? `mailto:${props.element.link}`
          : `https://${props.element.link}`
      }
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2"
    >
      <span className="hidden sm:block">{props.element.name}</span>

      <div className="size-4 duration-200 fill-neutral-700/50 dark:fill-neutral-300/50 group-hover:fill-neutral-700 dark:group-hover:fill-neutral-300">
        <props.element.icon />
      </div>
    </a>
  </div>
);

const MobileLink = (props: {
  element: { name: string; link: string; icon: () => JSX.Element };
}) => (
  <a
    href={
      props.element.name === "Email"
        ? `mailto:${props.element.link}`
        : `https://${props.element.link}`
    }
    target="_blank"
    rel="noreferrer"
    className="h-fit w-full py-5 flex gap-0.5 flex-col items-center justify-center border-[1px] border-neutral-700/10 dark:border-neutral-300/10 hover:bg-neutral-900/10 dark:hover:bg-neutral-300/10 transition-colors duration-150"
  >
    <div className="size-5 fill-neutral-700 dark:fill-neutral-300">
      <props.element.icon />
    </div>

    <p className="text-sm font-DMMono">{props.element.name}</p>
  </a>
);

export const Links = () => (
  <>
    <div className="hidden text-base font-DMMono text-neutral-700/50 dark:text-neutral-300/50 sm:block *:cursor-pointer">
      {links.map((element) => (
        <DesktopLink element={element} key={`desktop-link-${element.id}`} />
      ))}
    </div>

    {/* Display this code on small devices */}
    <div className="flex gap-2 sm:hidden">
      {links.map((element) => (
        <MobileLink element={element} key={`mobile-link-${element.id}`} />
      ))}
    </div>
  </>
);
