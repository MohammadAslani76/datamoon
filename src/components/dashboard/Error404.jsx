import errorImg from "../../assets/img/error-404.webp";

const Error404 = () => {
    return (
        <div className="text-2xl font-bold text-white  bg-dark-blue p-12 h-screen flex flex-col gap-8 justify-center items-center">
            <p>اشتباه اومدی</p>
            <img src={errorImg} alt="Error 404" className="w-80 h-60"/>
        </div>
    );
};

export default Error404;
