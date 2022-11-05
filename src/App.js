import image from "./img/anpr7glow.png";
import {useState,useEffect} from "react";
import i18next from "i18next";
import DarkMode from "./components/DarkMode";
import Languages from "./components/Languages";
import LoginForm from "./components/LoginForm";

function App() {
    const getMode = () => {
        const initialMode = localStorage.getItem("mode");
        if (initialMode === null){
            if (window.matchMedia("(prefers-color-scheme :dark)").matches) {
                return true;
            } else {
                return false;
            }
        }else {
            return JSON.parse(localStorage.getItem("mode"));
        }
    }

    const [dark,setDark] = useState(getMode())
    const [language,setLanguage] = useState("fa")

    useEffect(() => {
        localStorage.setItem("mode",JSON.stringify(dark))
    },[dark])

  return (
    <div className={dark ? "dark" : null} dir={i18next.language === "en" ? "ltr" : "rtl"}>
        <div className="min-h-screen dark:bg-dark-blue bg-dark-white">
            <div className="container flex flex-col justify-center items-center gap-4 p-4 md:flex-row relative">
                <div className={`absolute top-1 ${i18next.language === "en" ? "left-4" : "right-4"} flex justify-center items-stretch gap-2`}>
                    <DarkMode dark={dark} setDark={setDark}/>
                    <Languages language={language} setLanguage={setLanguage}/>
                </div>
                <LoginForm />
                <div className="md:basis-1/2 lg:basis-2/3 flex justify-center items-center">
                    <img src={image} alt="datamoon" className="lg:max-w-lg md:max-w-md object-cover"/>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 text-dark-gray dark:text-white">
                <p className="text-xl">{i18next.t('companyName')}</p>
                <p className="text-lg">www.datamoon.ir</p>
            </div>
        </div>
    </div>
  );
}

export default App;
