import i18next from "i18next";

i18next.init({
  fallbackLng: "en",
  resources: {
    "zh-Hant": {
      translations: require("./locales/zh_hant.json"),
    },
    en: {
      translations: require("./locales/en.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
  returnObjects: true,
  debug: process.env.NODE_ENV === "development",
});

i18next.languages = ["zh-Hant", "en"];

export default i18next;
