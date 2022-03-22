import {Features} from "./pages/Features/Features";
import {HeroBanner} from "./pages/HeroBanner/HeroBanner";
import {Roadmap} from "./pages/Roadmap/Roadmap";
import NavBar from "./components/NavigationBar/NavBar";
import {useEffect} from "react";

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
            <HeroBanner/>
            <Features/>
            <Roadmap/>
        </div>
    );
}

export default App;
