// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import astroI18next from "astro-i18next";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://filipsysak.vercel.app",
  integrations: [
    react(),
    astroI18next(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
