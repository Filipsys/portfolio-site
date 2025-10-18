import { ShakingText } from "@/components/halloween/ShakingText";

const Social = (props: { displayedText: string; displayedLink: string; link: string }) => (
  <li>
    <div
      className={`group/github transition-colors duration-0 border-2 border-red-500 [background-image:url(/candy-corn.png)] [background-size:10vw_10vw] hover:[background-size:10vw_10vw] hover:[background-image:url(/moving-formation.gif)]`}>
      <div className="bg-black/50">
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
        >
          {props.displayedLink}
        </a>

        <p className="italic">{props.displayedText}</p>
      </div>
    </div>
  </li>
);

export const HalloweenSocials = () => (
  <div>
    <h2 className="text-4xl text-red-500">Links to my <ShakingText text="spooky" /> socials</h2>

    <ol className="text-white px-2 *:mb-2">
      <Social
        displayedText="Github"
        displayedLink="github.com/Filipsys"
        link="https://github.com/Filipsys"
      /> 
      <Social
        displayedText="LinkedIn"
        displayedLink="linkedin.com/in/filipsysak"
        link="https://github.com/Filipsys"
      /> 
      <Social
        displayedText="Email"
        displayedLink="mail@filyys.dev"
        link="mailto:mail@filyys.dev"
      /> 
    </ol>
  </div>
);
