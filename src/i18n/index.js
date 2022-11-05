import i18next from 'i18next';
import fa from "./fa"
import en from "./en"
import arab from "./arab";

i18next.init({
    lng: 'fa',
    debug: true,
    resources: {
        en: {
            translation: en
        },
        fa: {
            translation : fa
        },
        arab: {
            translation : arab
        }
    }
});

export default i18next;