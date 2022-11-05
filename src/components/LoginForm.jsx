import i18next from "i18next";
import {FaRegUser} from "react-icons/fa";
import {MdLockOutline} from "react-icons/md";

const LoginForm = () => {
    return (
        <form onSubmit={e => e.preventDefault()} className="flex flex-col gap-4 rounded-lg bg-white dark:bg-s-mid-blue text-dark-gray dark:text-white p-8 w-full md:basis-1/2 lg:basis-1/3 mt-8 shadow">
            <h1 className="text-4xl">{i18next.t('loginTitle')}</h1>
            <h3 className="lg:text-xl mb-8">{i18next.t('loginText')}</h3>
            <h3 className="text-2xl">{i18next.t('login')}</h3>
            <div className="w-full border-2 border-dark-white dark:border-m-light-blue rounded-lg flex items-center gap-3 px-3 py-2">
                <FaRegUser size={20}/>
                <input type="text" placeholder={i18next.t('username')} className="w-full placeholder:text-dark-gray dark:placeholder:text-white bg-transparent outline-0"/>
            </div>
            <div className="w-full border-2 border-dark-white dark:border-m-light-blue rounded-lg flex items-center gap-3 px-3 py-2">
                <MdLockOutline size={25}/>
                <input type="text" placeholder={i18next.t('password')} className="w-full placeholder:text-dark-gray dark:placeholder:text-white bg-transparent outline-0"/>
            </div>
            <div className="flex items-center gap-4 mb-4">
                <input type="checkbox" className="appearance-none w-5 h-5 border-2 border-dark-white dark:border-m-light-blue cursor-pointer rounded checked:bg-m-light-blue"/>
                <p>{i18next.t('rememberMe')}</p>
            </div>
            <button className="bg-s-light-blue text-white rounded-lg py-2 text-2xl transition-all duration-300 hover:bg-s-light-blue dark:hover:bg-m-light-blue">{i18next.t('login')}</button>
        </form>
    );
};

export default LoginForm;
