import en from "./locales/en.json";
import de from "./locales/de.json";
import pl from "./locales/pl.json";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    resources: {
      en: { translation: en },
      de: { translation: de },
      pl: { translation: pl }
    }
  });

export default i18n;
