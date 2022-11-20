import {MdVideocam,MdSettingsSuggest,MdLock,MdBuild,MdAssessment} from "react-icons/md";
import {RiCarFill} from "react-icons/ri";
import {HiUsers} from "react-icons/hi";
import {FaUserAlt} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import {GiCctvCamera} from "react-icons/gi";
import i18next from "i18next";

const Sidebar = () => {
    return (
        <aside className="col-span-1 px-4 py-8 flex flex-col justify-start items-start gap-6 text-dark-gray dark:text-white">
            <NavLink to="/live-video" className={({ isActive }) =>
                isActive ? "text-m-light-blue navLinkStyle" : "navLinkStyle"
            }>
                <MdVideocam size={35}/>
                <p>{i18next.t('liveVideo')}</p>
            </NavLink>
            <NavLink to="/cameras" className={({ isActive }) =>
                isActive ? "text-m-light-blue navLinkStyle" : "navLinkStyle"
            }>
                <GiCctvCamera size={30}/>
                <p>{i18next.t('cameraManagement')}</p>
            </NavLink>
            <NavLink to="/advanced-settings" className={({ isActive }) =>
                isActive ? "text-m-light-blue navLinkStyle" : "navLinkStyle"
            }>
                <MdSettingsSuggest size={35}/>
                <p>{i18next.t('advancedSettings')}</p>
            </NavLink>
            <NavLink to="/permissions" className={({ isActive }) =>
                isActive ? "text-m-light-blue navLinkStyle" : "navLinkStyle"
            }>
                <MdLock size={30}/>
                <p>{i18next.t('permissions')}</p>
            </NavLink>
            <NavLink to="/car-driver" className={({ isActive }) =>
                isActive ? "text-m-light-blue navLinkStyle" : "navLinkStyle"
            }>
                <RiCarFill size={30}/>
                <p>{i18next.t('carAndDriver')}</p>
            </NavLink>
            <NavLink to="/save" className={({ isActive }) =>
                isActive ? "text-m-light-blue navLinkStyle" : "navLinkStyle"
            }>
                <MdBuild size={30}/>
                <p>{i18next.t('save')}</p>
            </NavLink>
            <NavLink to="/report" className={({ isActive }) =>
                isActive ? "text-m-light-blue navLinkStyle" : "navLinkStyle"
            }>
                <MdAssessment size={30}/>
                <p>{i18next.t('report')}</p>
            </NavLink>
            <NavLink to="/members" className={({ isActive }) =>
                isActive ? "text-m-light-blue navLinkStyle" : "navLinkStyle"
            }>
                <FaUserAlt size={20}/>
                <p>{i18next.t('members')}</p>
            </NavLink>
            <NavLink to="/about-us" className={({ isActive }) =>
                isActive ? "text-m-light-blue navLinkStyle" : "navLinkStyle"
            }>
                <HiUsers size={30}/>
                <p>{i18next.t('aboutUs')}</p>
            </NavLink>

        </aside>
    );
};

export default Sidebar;
