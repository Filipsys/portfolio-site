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
import { useEffect, useState } from "react";
import i18next from "i18next";

type Languages = "english" | "german" | "polish" | "russian";
const langsDict: Record<Languages, string> = {
  english: "English",
  german: "Deutsch",
  polish: "Polski",
  russian: "Русский",
};
const shortLangsDict: Record<string, string> = {
  english: "en",
  german: "de",
  polish: "pl",
  russian: "ru",
};

export const LanguageComponent = () => {
  const [language, setLanguage] = useState("english");

  useEffect(() => {
    const lng = shortLangsDict[language];
    console.log(lng);
    i18next
      .changeLanguage(lng)
      .then(() => {
        console.log("Language changed to:", lng);
      })
      .catch((error) => {
        console.error("Error changing language:", error);
      });
  }, [language]);

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

        <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
          <DropdownMenuRadioItem value="english">English</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="german">German</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="polish">Polish</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="russian">Russian</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
