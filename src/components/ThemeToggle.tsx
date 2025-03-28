"use client";

import { useState } from "react";
import { MicroSunIcon, MicroMoonIcon } from "@/icons/dev-icons";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  return (
    <div
      className="p-2 border-[1px] border-white/5 *:fill-white/10 *:hover:fill-white/20 hover:border-white/20 transition-colors"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <MicroSunIcon /> : <MicroMoonIcon />}
    </div>
  );
};
