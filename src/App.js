import {Features} from "./pages/Features/Features";
import {HeroBanner} from "./pages/HeroBanner/HeroBanner";
import {Roadmap} from "./pages/Roadmap/Roadmap";
import NavBar from "./components/NavigationBar/NavBar";

function App() {
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
