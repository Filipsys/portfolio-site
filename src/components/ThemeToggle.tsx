"use client";

import { useEffect, useState } from "react";
import { MicroSunIcon, MicroMoonIcon } from "@/icons/dev-icons";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const handleThemeChange = (theme: "dark" | "light") => {
    setTheme(theme);
    localStorage.setItem("theme", theme);

    if (theme === "dark" || theme === "light") {
      document.documentElement.style.colorScheme = theme;
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    console.log(storedTheme);

    if (storedTheme === "dark" || storedTheme === "light") {
      document.documentElement.style.colorScheme = theme;
    }
  }, [theme]);

  return (
    <button
      type="button"
      className="p-2 border-[1px] border-primary/10 *:fill-primary/20"
      onClick={() => handleThemeChange(theme === "dark" ? "light" : "dark")}
      onKeyUp={(e) => {
        if (e.key === "Enter" || e.key === " ") setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "dark" ? <MicroSunIcon /> : <MicroMoonIcon />}
    </button>
  );
};
