import {DownloadButton} from "./components/DownloadButton/DownloadButton";
import {Features} from "./pages/Features";

function App() {
    return (
        <div className="content-center">
            <h1 className="text-5xl"> Moodle Learning Analytics </h1>
            <DownloadButton/>
            <Features/>
        </div>
    );
}

export default App;
