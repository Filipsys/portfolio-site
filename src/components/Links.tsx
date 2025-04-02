import { SmallGithubIcon, SmallGmailIcon, SmallLinkedinIcon } from "@/icons/dev-icons";
import type { JSX } from "react";

const links: {
  name: string;
  link: string;
  icon: () => JSX.Element;
}[] = [
  {
    name: "Github",
    link: "github.com/filipsys",
    icon: SmallGithubIcon,
  },
  {
    name: "LinkedIn",
    link: "linkedin.com/in/filipsysak",
    icon: SmallLinkedinIcon,
  },
  {
    name: "Email",
    link: "mail@filyys.dev",
    icon: SmallGmailIcon,
  },
];

export const Links = () => (
  <>
    {links.map((element) => (
      <div
        key={`${element.name}-link`}
        className="group z-50 transition-colors duration-200 hover:text-white"
      >
        <a
          href={element.name === "Email" ? `mailto:${element.link}` : `https://${element.link}`}
          target="_blank"
          rel="noreferrer"
        >
          {element.link}
        </a>

        <div className="flex items-center gap-2">
          <p className="hidden sm:block">{element.name}</p>

          <div className="size-4 duration-200 fill-white/50 group-hover:fill-white">
            <element.icon />
          </div>
        </div>
      </div>
    ))}
  </>
);
