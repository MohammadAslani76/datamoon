import demoVideo from "../../../assets/videos/demo.mp4";

const OneColVideo = () => {
    return (
        <div className="mt-2 rounded max-h-custom overflow-auto">
            <div className="rounded overflow-hidden relative mb-4">
                <p className="bg-m-mid-blue text-white absolute top-0 right-0 w-full px-4 py-2 opacity-70 text-xl">دوربین یک</p>
                <video src={demoVideo} className="w-full h-96 object-cover"/>
            </div>
        </div>
    );
};

export default OneColVideo;