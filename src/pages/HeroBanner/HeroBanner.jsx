import {DownloadButton} from "../../components/DownloadButton/DownloadButton";

const HeroBanner = (props) => {
    return (
        <section className="w-full h-screen">
            <h1 className="text-5xl"> Moodle Learning Analytics </h1>
            <DownloadButton/>
        </section>
    );
}

export { HeroBanner }