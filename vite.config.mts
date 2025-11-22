import { defineConfig } from "vite";
import { redwood } from "rwsdk/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

import tailwindcss from "@tailwindcss/vite";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  environments: {
    ssr: {}
  },
  plugins: [
    cloudflare({
      viteEnvironment: { name: "worker" },
    }),
    redwood(),
    tailwindcss(),
    basicSsl(),
  ],
});
