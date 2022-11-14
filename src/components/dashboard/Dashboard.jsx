import {useContext} from "react";
import {DataContext} from "../../context/context";
import i18next from "i18next";
import {Sidebar,Navbar} from "./index";
import {Outlet} from "react-router-dom";


const Dashboard = () => {
    const value = useContext(DataContext);
    const [dark] = value.dark;


    return (
        <div className={dark ? "dark" : null} dir={i18next.language === "en" ? "ltr" : "rtl"}>
            <div className="min-h-screen dark:bg-s-mid-blue bg-dark-white">
                <Navbar />
                <div className="container grid grid-cols-5">
                    <Sidebar/>
                    <main className="col-span-4 rounded-xl bg-white dark:bg-dark-blue p-4 m-2">
                        <Outlet/>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

