import * as React from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<
    "theme-light" | "dark" | "fun" | "system"
  >("theme-light");

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    window.dispatchEvent(new Event("storage"));
  }, [theme]);
  console.log(window.location.pathname);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="transition-colors *:stroke-black/50 *:hover:stroke-black dark:*:stroke-white/25 dark:*:hover:stroke-white/75"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 stroke-white/25 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setThemeState("theme-light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("system")}>
          System
        </DropdownMenuItem>
        {window.location.pathname == "/" ? (
          <DropdownMenuItem
            onClick={() => (
              setThemeState("dark"), (window.location.href = "/fun")
            )}
            className="bg-gradient-to-tr from-yellow-400 to-orange-800"
          >
            <span className="animate-none">Fun mode</span>
            <span className="relative -top-5">
              <span className="absolute">🎉</span>
              <span className="absolute animate-ping">🎉</span>
            </span>
            <span className="relative -top-1 left-1">
              <span className="absolute">🪩</span>
              <span className="absolute animate-ping delay-500">🪩</span>
            </span>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem
            onClick={() => (
              setThemeState("system"), (window.location.href = "/")
            )}
            className="bg-gradient-to-tr from-white to-gray-500"
          >
            <span className="animate-none text-black">Normal mode</span>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
