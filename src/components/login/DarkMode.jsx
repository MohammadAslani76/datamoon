import {MdModeNight} from "react-icons/md";
import {BsFillSunFill} from "react-icons/bs";
import {useContext} from "react";
import {DataContext} from "../../context/context";

const DarkMode = () => {
    const value = useContext(DataContext);
    const [dark,setDark] = value.dark;
    const [color] = value.color;

    return (
        <button onClick={() => setDark(!dark)} className={`bg-s-light-blue dark:bg-s-mid-blue text-white p-2 rounded ${color !== "default" ? "opacity-20" : null}`} disabled={color !== "default"}>{
            dark ? <BsFillSunFill /> : <MdModeNight />
        }</button>
    );
};

export default DarkMode;
