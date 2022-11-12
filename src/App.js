import {DataProvider} from "./context/context";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";


function App() {

    return (
        <DataProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Routes>
            </BrowserRouter>
        </DataProvider>
    );
}

export default App;
