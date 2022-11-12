import i18next from "i18next";
import {FaRegUser} from "react-icons/fa";
import {MdLockOutline} from "react-icons/md";
import {useState} from "react";
import Swal from "sweetalert2";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {DataContext} from "../../context/context";

const LoginForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    //Context
    const value = useContext(DataContext);
    const handleFormColor = value.handleFormColor;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const submitData = {
            username, password
        }
        const {data} = await axios.post('http://localhost:4001/users/auth', submitData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        if (data.result === true) {
            Swal.fire({
                icon: "success",
                title: "تبریک",
                text: "با موفقیت وارد حساب کاربری شدید",
                showConfirmButton: true,
                confirmButtonText: "تایید",
                timer: 5000
            })
            navigate("/dashboard");
            setUsername("");
            setPassword("");
        } else {
            Swal.fire({
                icon: "error",
                title: "خطا",
                text: "نام کاربری یا کلمه عبور اشتباه است",
                showConfirmButton: true,
                confirmButtonText: "تایید",
                timer: 5000
            })
            setUsername("");
            setPassword("");
        }
    }

    return (
        <form onSubmit={handleSubmit}
              className="flex flex-col gap-4 rounded-lg bg-white dark:bg-s-mid-blue text-dark-gray dark:text-white p-8 w-full md:basis-1/2 lg:basis-1/3 mt-8 shadow"
              style={{backgroundColor: handleFormColor()}}>
            <h1 className="text-4xl">{i18next.t('loginTitle')}</h1>
            <h3 className="lg:text-xl mb-8">{i18next.t('loginText')}</h3>
            <h3 className="text-2xl">{i18next.t('login')}</h3>
            <div
                className="w-full border-2 border-dark-white dark:border-m-light-blue rounded-lg flex items-center gap-3 px-3 py-2">
                <FaRegUser size={20}/>
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}
                       placeholder={i18next.t('username')}
                       className="w-full placeholder:text-dark-gray dark:placeholder:text-white bg-transparent outline-0 border-0"/>
            </div>
            <div
                className="w-full border-2 border-dark-white dark:border-m-light-blue rounded-lg flex items-center gap-3 px-3 py-2">
                <MdLockOutline size={25}/>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}
                       placeholder={i18next.t('password')}
                       className="w-full placeholder:text-dark-gray dark:placeholder:text-white bg-transparent outline-0 border-0"/>
            </div>
            <div className="flex items-center gap-4 mb-4">
                <input type="checkbox"
                       className="appearance-none w-5 h-5 border-2 border-dark-white dark:border-m-light-blue cursor-pointer rounded checked:bg-m-light-blue"/>
                <p>{i18next.t('rememberMe')}</p>
            </div>
            <button
                className="bg-s-light-blue text-white rounded-lg py-2 text-2xl transition-all duration-300 hover:bg-m-light-blue dark:hover:bg-m-light-blue">{i18next.t('login')}</button>
        </form>
    );
};

export default LoginForm;
