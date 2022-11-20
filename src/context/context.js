import axios from "axios";
import {createContext, useState,useEffect} from "react";
import {data} from "autoprefixer";

export const DataContext = createContext({

});

export const DataProvider = (props) => {

    // ----------- Login ----------------------

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
        const initialColor = localStorage.getItem("color");
        if (initialColor === null){
            return "default"
        }else{
            return JSON.parse(localStorage.getItem("color"));
        }
    }
    // Get Language in local storage
    const getLanguage = () => {
        const initialLanguage = localStorage.getItem("language");
        if (initialLanguage === null){
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

    // ---------------- Authenticate -----------------------------------

    // Get User in local storage
    const getUser = () => {
        const initialUser = localStorage.getItem("user");
        if (initialUser){
            return JSON.parse(localStorage.getItem("user"))
        }else{
            return {loggedIn : false}
        }
    }

    const [user,setUser] = useState(getUser());

    // Set Language in local storage
    useEffect(() => {
        localStorage.setItem("user",JSON.stringify(user))
    },[user])


    // ---------------- Dashboard -----------------------------------

    // Get User in local storage
    // const getUser = () => {
    //     const initialUser = localStorage.getItem("user");
    //     if (initialUser){
    //         return JSON.parse(localStorage.getItem("user"))
    //     }else{
    //         return {username : null}
    //     }
    // }
    //States
    // const [user,setUser] = useState(getUser());
    // const [cameras,setCameras] = useState([]);

    // Set Language in local storage
    // useEffect(() => {
    //     localStorage.setItem("user",JSON.stringify(user))
    // },[user])

    // Get cameras list
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const {data} = await axios.get("http://localhost:4001/cameras/",{
    //             headers: {
    //                 Accept: "application/json",
    //                 "Content-Type": "application/json",
    //                 Authorization: `Bearer ${user.token}`
    //             }
    //         });
    //         setCameras(data);
    //     }
    //     fetchData();
    //
    // },[])

    // Values
    const value = {
        dark : [dark,setDark],
        color : [color,setColor],
        language : [language,setLanguage],
        user : [user,setUser],
        handleColor,
        handleFormColor
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}