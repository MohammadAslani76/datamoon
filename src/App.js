import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
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
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/" element={<Dashboard/>}>
                        <Route path="/" element={<Navigate to="/live-video" replace/>}/>
                        <Route path="/live-video" element={<LiveVideo/>}/>
                        <Route path="/cameras" element={<Cameras/>}/>
                        <Route path="/advanced-settings" element={<AdvancedSettings/>}/>
                        <Route path="/permissions" element={<Permissions/>}/>
                        <Route path="/car-driver" element={<CarDriver/>}/>
                        <Route path="/save" element={<Save/>}/>
                        <Route path="/report" element={<Report/>}/>
                        <Route path="/members" element={<Members/>}/>
                        <Route path="/about-us" element={<AboutUs/>}/>
                    </Route>
                    <Route path="*" element={<Error404/>}/>
                </Routes>
            </BrowserRouter>
    );
}

export default App;
