import {createContext, useState,useEffect} from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
    // Get Dark mode in local storage
    const getMode = () => {
        const initialMode = localStorage.getItem("dark");
        if (initialMode === null){
            if (window.matchMedia("(prefers-color-scheme :dark)").matches) {
                return true;
            } else {
                return false;
            }
        }else {
            return JSON.parse(localStorage.getItem("dark"));
        }
    }
    // Get Color in local storage
    const getColor = () => {
        const initialMode = localStorage.getItem("color");
        if (initialMode === null){
            return "default"
        }else{
            return JSON.parse(localStorage.getItem("color"));
        }
    }
    // Get Language in local storage
    const getLanguage = () => {
        const initialMode = localStorage.getItem("language");
        if (initialMode === null){
            return "fa"
        }else{
            return JSON.parse(localStorage.getItem("language"));
        }
    }


    //States
    const [dark,setDark] = useState(getMode())
    const [color,setColor] = useState(getColor())
    const [language,setLanguage] = useState(getLanguage())

    // Set Dark mode in local storage
    useEffect(() => {
        localStorage.setItem("dark",JSON.stringify(dark))
    },[dark])
    // Set Color in local storage
    useEffect(() => {
        localStorage.setItem("color",JSON.stringify(color))
    },[color])
    // Set Language in local storage
    useEffect(() => {
        localStorage.setItem("language",JSON.stringify(language))
    },[language])


    // Handle Background color theme
    const handleColor = () => {
        switch (color){
            case "orange":
                return "#f15908"
            case "red":
                return "#ec1e0d"
            case "green":
                return "#33f108"
            default:
                if (dark){
                    return "#052439"
                }else{
                    return "#ebebeb"
                }
        }
    }
    //Handle background form color
    const handleFormColor = () => {
        switch (color){
            case "orange":
                return "#c5632f"
            case "red":
                return "#c93327"
            case "green":
                return "#59c041"
            default:
                if (dark){
                    return "#0E3453"
                }else{
                    return "#fff"
                }
        }
    }

    const value = {
        dark : [dark,setDark],
        color : [color,setColor],
        language : [language,setLanguage],
        handleColor,
        handleFormColor
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}