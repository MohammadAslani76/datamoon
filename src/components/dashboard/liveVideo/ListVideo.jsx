import {BsFillCircleFill} from "react-icons/bs";
import demoVideo from "../../../assets/videos/demo.mp4";

const ListVideo = () => {
    return (
        <div className="dark:bg-s-mid-blue bg-dark-white text-dark-gray dark:text-white mt-2 rounded max-h-custom overflow-auto">
            <table className="w-full rounded font-vazir font-light text-lg divide-y divide-mid-white dark:divide-m-mid-blue">
                <thead>
                    <tr>
                        <th className="py-3">وضعیت</th>
                        <th className="py-3"></th>
                        <th className="py-3">نام</th>
                        <th className="py-3">آدرس</th>
                        <th className="py-3">مدل</th>
                        <th className="py-3"></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-mid-white dark:divide-m-mid-blue">
                    <tr>
                        <td>
                            <BsFillCircleFill size={10} className="text-green-500 translate-full w-full"/>
                        </td>
                        <td className="py-3 flex justify-center items-center">
                            <div className="w-24 h-24 border-2 border-m-light-blue rounded-xl overflow-hidden">
                                <video src={demoVideo} className="w-full h-full object-cover"/>
                            </div>
                        </td>
                        <td className="text-center ">دوربین یک</td>
                        <td className="text-center text-sm">rtsp://192.168.1.1</td>
                        <td className="text-center text-sm">IP Camera</td>
                        <td className="text-center text-sm">
                            <button className="text-white rounded-lg px-4 py-1 bg-m-light-blue text-xs">
                                فعال
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <BsFillCircleFill size={10} className="text-green-500 translate-full w-full"/>
                        </td>
                        <td className="py-3 flex justify-center items-center">
                            <div className="w-24 h-24 border-2 border-m-light-blue rounded-xl overflow-hidden">
                                <video src={demoVideo} className="w-full h-full object-cover"/>
                            </div>
                        </td>
                        <td className="text-center ">دوربین یک</td>
                        <td className="text-center text-sm">rtsp://192.168.1.1</td>
                        <td className="text-center text-sm">IP Camera</td>
                        <td className="text-center text-sm">
                            <button className="text-white rounded-lg px-4 py-1 bg-m-light-blue text-xs">
                                فعال
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <BsFillCircleFill size={10} className="text-red-500 translate-full w-full"/>
                        </td>
                        <td className="py-3 flex justify-center items-center">
                            <div className="w-24 h-24 border-2 border-m-light-blue rounded-xl overflow-hidden">
                                <video src={demoVideo} className="w-full h-full object-cover"/>
                            </div>
                        </td>
                        <td className="text-center ">دوربین یک</td>
                        <td className="text-center text-sm">rtsp://192.168.1.1</td>
                        <td className="text-center text-sm">IP Camera</td>
                        <td className="text-center text-sm">
                            <button className="text-white rounded-lg px-4 py-1 bg-m-light-blue text-xs">
                                غیر فعال
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <BsFillCircleFill size={10} className="text-green-500 translate-full w-full"/>
                        </td>
                        <td className="py-3 flex justify-center items-center">
                            <div className="w-24 h-24 border-2 border-m-light-blue rounded-xl overflow-hidden">
                                <video src={demoVideo} className="w-full h-full object-cover"/>
                            </div>
                        </td>
                        <td className="text-center ">دوربین یک</td>
                        <td className="text-center text-sm">rtsp://192.168.1.1</td>
                        <td className="text-center text-sm">IP Camera</td>
                        <td className="text-center text-sm">
                            <button className="text-white rounded-lg px-4 py-1 bg-m-light-blue text-xs">
                                فعال
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ListVideo;
