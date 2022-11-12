import i18next from 'i18next';
import fa from "./fa"
import en from "./en"
import arab from "./arab";

const getLanguage = () => {
    const initialMode = localStorage.getItem("language");
    if (initialMode === null){
        return "fa"
    }else{
        return JSON.parse(localStorage.getItem("language"));
    }
}

i18next.init({
    lng: getLanguage(),
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