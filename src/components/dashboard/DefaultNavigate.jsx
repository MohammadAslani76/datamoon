import {useContext} from "react";
import {DataContext} from "../../context/context";
import {Navigate} from "react-router-dom";

const DefaultNavigate = () => {
    const value = useContext(DataContext);
    const [user] = value.user;

    if (user && !user.loggedIn){
        return <Navigate to="/login" replace/>
    }else{
        return <Navigate to="/" replace/>
    }
};

export default DefaultNavigate;
