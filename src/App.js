import {DataProvider} from "./context/context";
import {BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import Login from "./components/login/Login";
import {
    Dashboard,
    LiveVideo,
    AdvancedSettings,
    Permissions,
    CarDriver,
    Save,
    Report,
    Members,
    AboutUs,
    Error404, Cameras
} from "./components/dashboard";


function App() {

    return (
        <DataProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}>
                        <Route path="/dashboard" element={<Navigate to="/dashboard/live-video"/>}/>
                        <Route path="/dashboard/live-video" element={<LiveVideo/>}/>
                        <Route path="/dashboard/cameras" element={<Cameras/>}/>
                        <Route path="/dashboard/advanced-settings" element={<AdvancedSettings/>}/>
                        <Route path="/dashboard/permissions" element={<Permissions/>}/>
                        <Route path="/dashboard/car-driver" element={<CarDriver/>}/>
                        <Route path="/dashboard/save" element={<Save/>}/>
                        <Route path="/dashboard/report" element={<Report/>}/>
                        <Route path="/dashboard/members" element={<Members/>}/>
                        <Route path="/dashboard/about-us" element={<AboutUs/>}/>
                    </Route>
                    <Route path="*" element={<Error404/>}/>
                </Routes>
            </BrowserRouter>
        </DataProvider>
    );
}

export default App;
