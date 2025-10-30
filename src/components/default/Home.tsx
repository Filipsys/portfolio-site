"use client";

import { Separator } from "@/components/default/Separator";
import { TechCards } from "@/components/default/TechCards";
import { Links } from "@/components/default/Links";

import { useTranslation } from "react-i18next";

export const HomeComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-xl font-light tracking-wide xs:text-2xl sm:text-3xl">
        {t($ => $["Home.MainInfo"])}
      </h1>

      <div className="py-6">
        <Separator />
      </div>

      <div>
        <h1>- {t($ => $["Home.SocialLinksHeader"])}</h1>

        <Links />
      </div>

      <div className="py-3" />

      <div>
        <h1>- {t($ => $["Home.TechHeader"])}</h1>

        <div className="mb-8 grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:mb-0">
          {/* <TechCards /> */}
        </div>
      </div>
    </div>
  );
};
