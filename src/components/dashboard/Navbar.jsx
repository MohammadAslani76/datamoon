import {VscThreeBars} from "react-icons/vsc";
import {BiRadioCircleMarked} from "react-icons/bi";
import {HiOutlineUser} from "react-icons/hi";

const Navbar = () => {
    return (
        <header>
            <nav className="container flex justify-between items-center py-3 px-2 dark:text-white text-dark-gray">
                <div className="flex justify-center items-center gap-10">
                    <VscThreeBars className="cursor-pointer hover:text-s-light-blue duration-300" size={50}/>
                    <h1 className="text-4xl">خودنگار</h1>
                </div>
                <div className="flex justify-center items-center gap-10">
                    <div className="navbarItems">
                        <HiOutlineUser size={28}/>
                        <p>مدیر</p>
                    </div>
                    <div className="navbarItems">
                        <BiRadioCircleMarked size={40}/>
                        <p>خروج</p>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
