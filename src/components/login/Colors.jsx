import {useContext} from "react";
import {DataContext} from "../../context/context";

const Colors = () => {
    const value = useContext(DataContext);
    const [color,setColor] = value.color;
    return (
        <select onChange={e => {
            setColor(e.target.value)
        }} value={color} className="bg-s-light-blue dark:bg-s-mid-blue rounded border-0 outline-0 cursor-pointer text-white py-0.5 px-1">
            <option value="default">Default</option>
            <option value="orange">Orange</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
        </select>
    );
};

export default Colors;
