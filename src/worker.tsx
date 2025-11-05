import { render, route } from "rwsdk/router";
import { defineApp } from "rwsdk/worker";

import { Document } from "@/app/Document";
import { setCommonHeaders } from "@/app/headers";

import  Home from "@/app/pages/Home";
import { DefaultFunPage } from "@/app/pages/fun/Default";
import { HalloweenFunPage } from "@/app/pages/fun/Halloween";

import i18n from "@/i18n";

export type AppContext = {};

export default defineApp([
  setCommonHeaders(),

  async ({ ctx }) => {
    const lang = i18n.language || "en";
    const initialI18nStore = {};

    i18n.languages.forEach((l) => {
      initialI18nStore[l] = i18n.services.resourceStore.data[l];
    });

    ctx.initialLanguage = lang;
    ctx.initialI18nStore = initialI18nStore;
    return ctx;
  },

  render(Document, [
    route("/", ({ ctx }) => (
      <Home
        initialLanguage={ctx.initialLanguage}
        initialI18nStore={ctx.initialI18nStore}
      />
    )),
    route("/fun", [HalloweenFunPage, DefaultFunPage]),
  ]),
]);
