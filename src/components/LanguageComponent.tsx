import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { LangIcon } from "@/icons/dev-icons";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type Languages = "english" | "german" | "polish" | "russian";

export const LanguageComponent = () => {
  const [language, setLanguage] = useState<Languages>("english");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="text-gray-700 px-2 py-1.5 dark:*:stroke-white/25 *:stroke-black/50 *:hover:stroke-black dark:*:hover:stroke-white/75 transition-colors"
        >
          <LangIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuRadioGroup
          value={language} /* onValueChange={setLanguage} */
        >
          <DropdownMenuRadioItem value="english">English</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="german">Deutsch</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="polish">Polish</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="russian">Русский</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
