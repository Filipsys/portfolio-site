import { render, route } from "rwsdk/router";
import { defineApp } from "rwsdk/worker";

import { Document } from "@/app/Document";
import { setCommonHeaders } from "@/app/headers";

import { Home } from "@/app/pages/Home";
import { DefaultFunPage } from "@/app/pages/fun/Default";
import { HalloweenFunPage } from "@/app/pages/fun/Halloween";

export type AppContext = {};

export default defineApp([
  setCommonHeaders(),
  ({ ctx }) => { ctx },

  render(Document, [
    route("/", Home),
    route("/fun", [HalloweenFunPage, DefaultFunPage]),
  ]),
]);
