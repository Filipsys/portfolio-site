"use client";

import { useRouter } from "@/i18n/navigation";
import { useEffect, useState } from "react";
import { LanguageIcon } from "@/icons/dev-icons";

type supportedLanguages = "en" | "de" | "pl";

const languages = {
  en: "english",
  de: "german",
  pl: "polish",
};

const checkLangPrefCookie = (): boolean => {
  return document.cookie.includes("keepLangPref=true");
};

export const LanguageSwitch = () => {
  const [detectedLanguage, setDetectedLanguage] =
    useState<supportedLanguages>("en");
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

  const router = useRouter();

  const handleSwitchLocale = (locale: supportedLanguages) => {
    router.replace("/", { locale: locale });

    setModalIsVisible(false);
  };

  const handleDismiss = () => {
    setModalIsVisible(false);

    document.cookie = "keepLangPref=true; path=*; max-age=604800";
  };

  useEffect(() => {
    if (checkLangPrefCookie()) return;

    const browserLanguage = navigator.language.slice(0, 2);
    if (!["en", "de", "pl"].includes(browserLanguage)) return;

    const urlPath = window.document.URL.split("/").at(3);
    const urlLanguage =
      urlPath === "" || urlPath === undefined ? "en" : urlPath.slice(0, 2);

    if (urlLanguage !== browserLanguage) {
      setModalIsVisible(true);
      setDetectedLanguage(browserLanguage as supportedLanguages);

      return;
    }

    setModalIsVisible(false);
  }, []);

  return modalIsVisible ? (
    <div className="absolute top-0 left-0 w-full h-dvh flex justify-center items-center backdrop-blur-xs backdrop-brightness-75 z-[100]">
      <div className="flex flex-col gap-8 p-4 bg-neutral-200 dark:bg-neutral-900 border-[1px] border-black/10 dark:border-white/10">
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            <LanguageIcon />

            <p className="text-xl">Change language</p>
          </div>

          <p className="text-neutral-500">
            Would you like to switch to {languages[detectedLanguage]}?
          </p>
        </div>

        <div className="flex gap-2 *:transition-colors duration-150">
          <button
            type="button"
            onClick={() => handleSwitchLocale(detectedLanguage)}
            className="w-full p-2 px-14 bg-neutral-900 text-white border-[1px] border-black/10 dark:bg-neutral-300 dark:text-black dark:border-white/10 hover:bg-neutral-800 dark:hover:bg-neutral-200"
          >
            <p>Switch</p>
          </button>

          <button
            type="button"
            onClick={() => handleDismiss()}
            className="w-full p-2 px-14 bg-neutral-300 text-black border-[1px] border-black/10 dark:bg-neutral-900 dark:text-white dark:border-white/10 hover:bg-neutral-400 dark:hover:bg-neutral-800"
          >
            <p>Dismiss</p>
          </button>
        </div>
      </div>
    </div>
  ) : null;
};
