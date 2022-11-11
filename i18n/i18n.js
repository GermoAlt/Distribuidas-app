import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import es from "./translations/es.json"
import en from "./translations/en.json"


const resources = { en, es }

i18n
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        resources,
        lng: "es",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;