import {BsApple, BsWindows, SiLinux} from "react-icons/all";
import {OScard} from "../../components/OSCard/OScard";
import MLALogo from '../../assets/mla_logo.svg';
import {useEffect, useState} from "react";
import axios from "axios";

const HeroBanner = (props) => {
    const MLA_RELEASES = "https://api.github.com/repos/LS-LEDA/MLA/releases";
    const [os, setOS] = useState([
        {
            name: "Windows",
            download_url: "",
            icon: <BsWindows size={64}/>
        },
        {
            name: "Windows Portable",
            download_url: "",
            icon: <BsWindows size={64}/>
        },
        {
            name: "macOS",
            download_url: "",
            icon: <BsApple size={64}/>
        },
        {
            name: "Linux",
            download_url: "",
            icon: <SiLinux size={64}/>
        }
    ]);

    useEffect(() => {
        axios.get(MLA_RELEASES).then( (resp) => {
            // Get the latest release's assets
            let release_assets = resp.data[0].assets;
            const updated_os = [...os];

            release_assets.forEach( asset => {
                // Windows exe
                if ( asset.content_type === 'application/octet-stream' && asset.name.includes('Setup') )
                    updated_os[0].download_url = asset.browser_download_url;
                // Windows portable
                if ( asset.content_type === 'application/octet-stream' && !asset.name.includes('Setup'))
                    updated_os[1].download_url = asset.browser_download_url;
                // TODO: macOS & Linux
            })

            // Update the array of OS
            setOS(updated_os);
        })
    }, [os]);

    return (
        <section className="flex w-full min-h-screen">
            {/* Header */}
            <div className="flex flex-col w-full h-full justify-center place-items-center gap-y-20">
                <h1 className="flex w-auto text-6xl font-bold"> Moodle Learning Analytics </h1>
                <img src={MLALogo} alt="MLA Logo" width={128}/>
                {/* OS and download buttons for different platforms */}
                <div className="flex flex-col gap-y-20 md:grid md:grid-cols-2 xl:flex xl:flex-row md:gap-x-20">
                    {
                        os.map( (system, index) => {
                            return <OScard os={system} key={index}/>
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export { HeroBanner }