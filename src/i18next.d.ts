import "i18next";

import en from "./locales/en.json";
import de from "./locales/de.json";
import pl from "./locales/pl.json";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      en: typeof en;
      de: typeof de;
      pl: typeof pl;
    };
  }
}

