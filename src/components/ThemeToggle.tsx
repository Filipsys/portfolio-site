"use client";

import { MicroSunIcon, MicroMoonIcon } from "@/icons/dev-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      type="button"
      className="group p-2 border-[1px] border-neutral-700/10 dark:border-neutral-300/10"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      onKeyUp={(e) => {
        if (e.key === "Enter" || e.key === "Space")
          setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      <div className="*:fill-neutral-700/20 dark:*:fill-neutral-300/20 group-hover:*:fill-neutral-700/50 dark:group-hover:*:fill-neutral-300/50 transition-colors duration-150">
        {theme === "dark" ? <MicroSunIcon /> : <MicroMoonIcon />}
      </div>
    </button>
  );
};
