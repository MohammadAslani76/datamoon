import {MdVideocam,MdSettingsSuggest,MdLock,MdBuild,MdAssessment} from "react-icons/md";
import {RiCarFill} from "react-icons/ri";
import {HiUsers} from "react-icons/hi";
import {FaUserAlt} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import {GiCctvCamera} from "react-icons/gi";

const Sidebar = () => {
    return (
        <aside className="col-span-1 px-4 py-8 flex flex-col justify-start items-start gap-6 text-dark-gray dark:text-white">
            <NavLink to="/dashboard/live-video" className={({ isActive }) =>
                isActive ? "text-m-light-blue navLinkStyle" : "navLinkStyle"
            }>
                <MdVideocam size={35}/>
                <p>تصویر زنده</p>
            </NavLink>
            <NavLink to="/dashboard/cameras" className={({ isActive }) =>
                isActive ? "text-m-light-blue navLinkStyle" : "navLinkStyle"
            }>
                <GiCctvCamera size={30}/>
                <p>مدیریت دوربین ها</p>
            </NavLink>
            <NavLink to="/dashboard/advanced-settings" className={({ isActive }) =>
                isActive ? "text-m-light-blue navLinkStyle" : "navLinkStyle"
            }>
                <MdSettingsSuggest size={35}/>
                <p>تنظیمات پیشرفته</p>
            </NavLink>
            <NavLink to="/dashboard/permissions" className={({ isActive }) =>
                isActive ? "text-m-light-blue navLinkStyle" : "navLinkStyle"
            }>
                <MdLock size={30}/>
                <p>مجوزها</p>
            </NavLink>
            <NavLink to="/dashboard/car-driver" className={({ isActive }) =>
                isActive ? "text-m-light-blue navLinkStyle" : "navLinkStyle"
            }>
                <RiCarFill size={30}/>
                <p>خودرو و راننده</p>
            </NavLink>
            <NavLink to="/dashboard/save" className={({ isActive }) =>
                isActive ? "text-m-light-blue navLinkStyle" : "navLinkStyle"
            }>
                <MdBuild size={30}/>
                <p>نگهداری</p>
            </NavLink>
            <NavLink to="/dashboard/report" className={({ isActive }) =>
                isActive ? "text-m-light-blue navLinkStyle" : "navLinkStyle"
            }>
                <MdAssessment size={30}/>
                <p>گزارش</p>
            </NavLink>
            <NavLink to="/dashboard/members" className={({ isActive }) =>
                isActive ? "text-m-light-blue navLinkStyle" : "navLinkStyle"
            }>
                <FaUserAlt size={20}/>
                <p>اعضا</p>
            </NavLink>
            <NavLink to="/dashboard/about-us" className={({ isActive }) =>
                isActive ? "text-m-light-blue navLinkStyle" : "navLinkStyle"
            }>
                <HiUsers size={30}/>
                <p>درباره ما</p>
            </NavLink>

        </aside>
    );
};

export default Sidebar;
