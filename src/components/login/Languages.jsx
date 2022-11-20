import i18next from "i18next";
import {useContext} from "react";
import {DataContext} from "../../context/context";

const Languages = () => {
    const value = useContext(DataContext);
    const [language,setLanguage] = value.language;

    return (
        <select onChange={e => {
            setLanguage(e.target.value)
            i18next.changeLanguage(e.target.value)
        }} value={language} className="bg-white dark:bg-s-mid-blue rounded border-2 border-dark-white dark:border-m-light-blue outline-0 cursor-pointer text-dark-gray dark:text-white py-0.5 px-1">
            <option value="fa">فارسی</option>
            <option value="en">English</option>
            <option value="arab">العربیه</option>
        </select>
    );
};

export default Languages;