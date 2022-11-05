import {MdModeNight} from "react-icons/md";
import {BsFillSunFill} from "react-icons/bs";

const DarkMode = ({dark,setDark}) => {
    return (
        <button onClick={() => setDark(!dark)} className="bg-s-light-blue dark:bg-s-mid-blue text-white p-2 rounded">{
            dark ? <MdModeNight /> : <BsFillSunFill />
        }</button>
    );
};

export default DarkMode;
