import demoVideo from "../../../assets/videos/demo.mp4";

const ThreeColsVideo = () => {
    return (
        <div className="mt-2 rounded max-h-custom overflow-auto grid grid-cols-3 gap-3">
            <div className="rounded overflow-hidden relative">
                <p className="bg-m-mid-blue text-white absolute top-0 right-0 w-full px-4 py-2 opacity-70 text-xl">دوربین یک</p>
                <video src={demoVideo} className="w-full h-64 object-cover"/>
            </div>
            <div className="rounded overflow-hidden relative">
                <p className="bg-m-mid-blue text-white absolute top-0 right-0 w-full px-4 py-2 opacity-70 text-xl">دوربین یک</p>
                <video src={demoVideo} className="w-full h-64 object-cover"/>
            </div>
            <div className="rounded overflow-hidden relative">
                <p className="bg-m-mid-blue text-white absolute top-0 right-0 w-full px-4 py-2 opacity-70 text-xl">دوربین یک</p>
                <video src={demoVideo} className="w-full h-64 object-cover"/>
            </div>

        </div>
    );
};

export default ThreeColsVideo;
