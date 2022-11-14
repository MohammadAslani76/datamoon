import {GiCctvCamera} from "react-icons/gi";
import {FaWifi} from "react-icons/fa";
import {RiDownloadCloudLine} from "react-icons/ri";
import {IoMdTrash} from "react-icons/io";
import {MdOutlineEdit} from "react-icons/md";


const CameraDetails = () => {
    return (
        <div className="dark:bg-s-mid-blue bg-dark-white rounded-lg p-2 grid grid-cols-5 items-stretch gap-4">
            <div className="col-span-2 flex flex-col justify-center items-center gap-4 border border-m-light-blue rounded-lg px-1 py-3">
                <GiCctvCamera size={35} className="text-m-light-blue"/>
                <div className="flex items-center gap-1">
                    <FaWifi className="text-red-500"/>
                    <small className="text-xs">اتصال به شبکه</small>
                </div>
                <div className="flex items-center gap-1">
                    <RiDownloadCloudLine className="text-green-500"/>
                    <small className="text-xs">بارگزاری فایل</small>
                </div>
            </div>
            <div className="col-span-3 flex flex-col justify-between gap-3">
                <div className="flex gap-2">
                    <span className="text-x-dark-white">نام</span>
                    <span>همدان</span>
                </div>
                <div className="flex gap-2">
                    <span className="text-x-dark-white">شناسه</span>
                    <span>15</span>
                </div>
                <div className="flex gap-2">
                    <span className="text-x-dark-white">جایگاه</span>
                    <span>1</span>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-1 text-xs bg-m-light-blue text-white px-2 py-1 rounded-lg hover:bg-s-light-blue transition-all duration-300">
                        <IoMdTrash size={20} />
                        <span>حذف</span>
                    </button>
                    <button className="flex items-center gap-1 text-xs bg-m-light-blue text-white px-2 py-1 rounded-lg hover:bg-s-light-blue transition-all duration-300">
                        <MdOutlineEdit size={20} />
                        <span>ویرایش</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CameraDetails;
