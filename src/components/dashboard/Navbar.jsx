import {VscThreeBars} from "react-icons/vsc";
import {BiRadioCircleMarked} from "react-icons/bi";
import {HiOutlineUser} from "react-icons/hi";
import { useNavigate} from "react-router-dom";
import i18next from "i18next";
import {useContext} from "react";
import {DataContext} from "../../context/context";


const Navbar = () => {

    const value = useContext(DataContext);
    const [user,setUser] = value.user;

    const navigate = useNavigate();

    const logout = () => {
        if (user && !user.loggedIn) return;
        setUser({loggedIn : false})
        // navigate("/login");
    }

    return (
        <header>
            <nav className="container flex justify-between items-center py-3 px-2 dark:text-white text-dark-gray">
                <div className="flex justify-center items-center gap-10">
                    <VscThreeBars className="cursor-pointer hover:text-s-light-blue duration-300" size={50}/>
                    <h1 className="text-4xl">{i18next.t('loginTitle')}</h1>
                </div>
                <div className="flex justify-center items-center gap-10">
                    <div className="navbarItems">
                        <HiOutlineUser size={28}/>
                        <p>{i18next.t('manager')}</p>
                    </div>
                    <div className="navbarItems" onClick={logout}>
                        <BiRadioCircleMarked size={40}/>
                        <p>{i18next.t('logOut')}</p>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
