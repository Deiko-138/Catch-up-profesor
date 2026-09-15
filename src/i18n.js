import es from "./locales/es";
import en from "./locales/en.json"
import{createI18n} from "vue-i18n";

const i18n = createI18n({
    locale: en,
    fallbackLng: "en",
    messages: {en,es}
})

export default i18n;