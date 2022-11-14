import {AiOutlineUnorderedList,AiOutlineAppstore} from "react-icons/ai";
import {MdOutlineViewAgenda} from "react-icons/md";
import {TiThSmallOutline} from "react-icons/ti";
import {ListVideo, OneColVideo, ThreeColsVideo, TwoColsVideo} from "../index";
import { useState} from "react";

const LiveVideo = () => {
    const [view,setView] = useState("list");

    const handleView = () => {
        switch (view){
            case "list" :
                return <ListVideo/>
            case "one-col" :
                return <OneColVideo/>
            case "two-cols" :
                return <TwoColsVideo/>
            case "three-cols" :
                return <ThreeColsVideo/>
            default:
                return <ListVideo/>
        }
    }


    return (
        <div className="p-4 rounded dark:bg-m-mid-blue bg-mid-white">
            <div className="flex gap-2 text-dark-gray dark:text-white">
                <button onClick={e => setView("list")} className={view === "list" ? "text-m-light-blue" : null}>
                    <AiOutlineUnorderedList size={30}/>
                </button>
                <button onClick={e => setView("three-cols")} className={view === "three-cols" ? "text-m-light-blue" : null}>
                    <TiThSmallOutline size={30} className="cursor-pointer"/>
                </button>
                <button onClick={e => setView("one-col")} className={view === "one-col" ? "text-m-light-blue" : null}>
                    <MdOutlineViewAgenda size={30} className="cursor-pointer"/>
                </button>
                <button onClick={e => setView("two-cols")} className={view === "two-cols" ? "text-m-light-blue" : null}>
                    <AiOutlineAppstore size={30} className="cursor-pointer"/>
                </button>
            </div>
            {handleView()}
        </div>
    );
};

export default LiveVideo;
