import {ImSearch} from "react-icons/im";
import {HiPlus} from "react-icons/hi";
import {CameraDetails} from "../index";

const Cameras = () => {
    return (
        <div className="text-dark-gray dark:text-mid-white max-h-main-full overflow-auto">
            <h3 className="text-xl mb-3">مدیریت دوربین ها</h3>
            <div className="w-full border border-m-light-blue rounded-xl py-3 px-6 flex items-center gap-2 mb-3">
                <ImSearch size={25} />
                <input type="text" className="w-full bg-transparent outline-0 border-0 dark:placeholder:text-mid-white placeholder:text-dark-gray placeholder:text-sm" placeholder="جستجوی دوربین"/>
            </div>
            <div className="grid grid-cols-3 gap-3">
                <div className="border-2 border-dashed border-light-gray flex justify-center items-center gap-3 rounded-lg h-40 cursor-pointer hover:bg-dark-white dark:hover:bg-s-mid-blue transition-all duration-300">
                    <HiPlus size={35} />
                    <span>افزودن دوربین</span>
                </div>
                <CameraDetails />
            </div>
        </div>
    );
};

export default Cameras;
