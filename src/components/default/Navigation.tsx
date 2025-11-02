"use client";

import { useTranslation } from "react-i18next";

type Pages = "home" | "projects";

const getPageCookie = async (): Promise<Pages | null> => {
  return browser.cookies.get({ name: "current_page" });
};

const setPageCookie = (page: Pages) => {
  browser.cookies.set({
    name: "current_page",
    value: page,
    expirationDate: 60
  });
};

export const Navigation = () => {
  const { t } = useTranslation("Navigation");

  return (
    <nav className="block w-full lg:w-fit pt-8 lg:pt-0 lg:pr-8">
      <div className="flex justify-center gap-x-8 text-xl tracking-tight *:z-50 sm:gap-x-16 sm:text-2xl lg:flex-col lg:items-end lg:text-3xl">
        <button
          className="cursor-pointer"
          onClick={() => setPageCookie("home")}
          type="button"
        >
          {t("Home")}
        </button>
        <button
          className="cursor-pointer"
          onClick={() => setPageCookie("projects")}
          type="button"
        >
          {t("Projects")}
        </button>
        <button className="line-through cursor-default" type="button">
          {t("About")}
        </button>
        <button className="line-through cursor-default" type="button">
          {t("Notes")}
        </button>
      </div>
    </nav>
  );
};
