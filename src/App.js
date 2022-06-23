import NavBar from "./components/NavigationBar/NavBar";
import {useEffect} from "react";
import {Footer} from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {Releases} from "./pages/Releases/Releases";

function App() {
    // Apply dark / light theme on app mount
    useEffect( () => {
        if (localStorage.theme === 'dark' || !('theme' in localStorage)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    },
        []
    );

    return (
        <div className="content-center">
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/releases" element={<Releases/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
