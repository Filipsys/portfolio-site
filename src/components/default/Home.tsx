"use client";

import { Separator } from "@/components/default/Separator";
import { TechCards } from "@/components/default/TechCards";
import { Links } from "@/components/default/Links";

import { useTranslation } from "react-i18next";

export const HomeComponent = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div>
        <h1 className="text-xl font-light tracking-wide xs:text-2xl sm:text-3xl">
          {/* {t.rich("MainInfo", {
            green: (chunks) => <span className="text-green-500">{chunks}</span>,
            yellow: (chunks) => (
              <span className="dark:text-yellow-400 text-yellow-700">
                {chunks}
              </span>
            ),
            darkBlue: (chunks) => (
              <span className="dark:text-blue-200 text-blue-500">{chunks}</span>
            ),
            blue: (chunks) => <span className="text-blue-500">{chunks}</span>,
            orange: (chunks) => (
              <span className="text-orange-400">{chunks}</span>
            ),
          })} */}
        </h1>
      </div>

      <div className="py-6">
        <Separator />
      </div>

      <div>
        <h1>- {t($ => $["SocialLinksHeader"])}</h1>

        <Links />
      </div>

      <div className="py-3" />

      <div>
        <h1>- {t($ => $["TechHeader"])}</h1>

        <div className="mb-8 grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:mb-0">
          {/* <TechCards /> */}
        </div>
      </div>
    </div>
  );
};
