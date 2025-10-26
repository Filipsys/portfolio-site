"use client";

import { useTranslation } from "react-i18next";
// import { ProjectContext } from "@/providers/ContextProvider";
// import { useContext } from "react";

export const Navigation = () => {
  // const { setCurrentPage } = useContext(ProjectContext);
  const { t } = useTranslation("Navigation");

  // const handlePageState = (page: "home" | "projects") => {
  //   setCurrentPage(page);
  // };

  return (
    <nav className="block w-full lg:w-fit pt-8 lg:pt-0 lg:pr-8">
      <div className="flex justify-center gap-x-8 text-xl tracking-tight *:z-50 sm:gap-x-16 sm:text-2xl lg:flex-col lg:items-end lg:text-3xl">
        <button
          className="cursor-pointer"
          // onClick={() => handlePageState("home")}
          type="button"
        >
          {t("Home")}
        </button>
        <button
          className="cursor-pointer"
          // onClick={() => handlePageState("projects")}
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
