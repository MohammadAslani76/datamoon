import i18next from "i18next";
import DarkMode from "./DarkMode";
import LoginForm from "./LoginForm";
import image from "../../assets/img/anpr7glow.png";
import {useContext} from "react";
import {DataContext} from "../../context/context";
import {Navigate, useLocation} from "react-router-dom";

const Login = () => {
    // Context
    const value = useContext(DataContext);
    const handleColor = value.handleColor;
    const [dark] = value.dark;
    const [user] = value.user;

    const location = useLocation();

    if (user && user.loggedIn){
        return <Navigate to="/" replace state={{from : location}}/>
    }else {
        return (
            <div className={dark ? "dark" : null} dir={i18next.language === "en" ? "ltr" : "rtl"}>
                <div className="min-h-screen dark:bg-dark-blue bg-dark-white" style={{backgroundColor: handleColor()}}>
                    <div className="container flex flex-col justify-center items-center gap-4 p-4 md:flex-row relative">
                        {/*<div className={`absolute top-1 ${i18next.language === "en" ? "left-4" : "right-4"} flex justify-center items-stretch gap-2`}>*/}
                        {/*    <DarkMode />*/}
                        {/*</div>*/}
                        <LoginForm/>
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
};

export default Login;
