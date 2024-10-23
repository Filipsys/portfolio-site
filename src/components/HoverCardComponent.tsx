import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { InfoIcon } from "@/icons/dev-icons";

export const HoverCardComponent = () => {
  return (
    <HoverCard openDelay={50}>
      <HoverCardTrigger className="z-50 *:hidden *:size-4 *:sm:block">
        <InfoIcon />
      </HoverCardTrigger>
      <HoverCardContent className="p-2 bg-white dark:bg-[#09090b] border-white/10">
        <p className="text-xs text-black dark:text-white">
          The stars indicate my level of proficiency in each technology.
        </p>
      </HoverCardContent>
    </HoverCard>
  );
};
