import Vue from "vue";
import VueI18n from "vue-i18n";

import enLocale from "./multipleLanguage/en";
import vnLocale from "./multipleLanguage/vn";

import { getLanguage } from "./getLanguage";

Vue.use(VueI18n);

const messages = {
  en: enLocale,
  vn: vnLocale,
};

const i18n = new VueI18n({
  locale: getLanguage(),
  messages,
});

export default i18n;
