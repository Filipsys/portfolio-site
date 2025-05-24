"use client";

import {
  MicroSunIcon,
  MicroMoonIcon,
  MicroLanguageIcon,
} from "@/icons/dev-icons";
import { useEffect, useState } from "react";
import { redirect } from "@/i18n/navigation";
import { useRouter } from "@/i18n/navigation";

export const LanguageToggle = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="group py-1 px-2 border-[1px] border-neutral-700/10 dark:border-neutral-300/10">
      <select
        className="text-sm text-neutral-500 dark:text-neutral-600 hover:text-neutral-600 hover:dark:text-neutral-500 transition-colors duration-150"
        name="language-select"
        id="languages"
        value={window.location.pathname.slice(1, 3) || "en"}
        onChange={(event) =>
          router.replace("/", { locale: event.currentTarget.value })
        }
      >
        <option value="en">English</option>
        <option value="pl">Polski</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  );
};
