import {OScard} from "../../components/OSCard/OScard";
import {Release} from "../../components/ReleaseCard/Release";
import {useEffect, useState} from "react";
import axios from "axios";
import {BsWindows, BsApple} from "react-icons/bs";
import {SiLinux} from "react-icons/si";

const Releases = () => {
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

    const [releases, setReleases] = useState([]);
    const [versionName, setVersionName] = useState("");
    const [numReleases, setNumReleses] = useState(0);

    useEffect(() => {
        axios.get(MLA_RELEASES).then( (resp) => {
            // Get the latest release's assets
            let release_assets = resp.data[0].assets;
            const updated_os = [...os];
            // Get the latest version name and set it for the featured downloads
            setVersionName(resp.data[0].name);
            setNumReleses(resp.data.length);
            setReleases(resp.data);

            release_assets.forEach( asset => {
                // Windows exe
                if (
                    ( asset.content_type === 'application/x-msdownload' && asset.name.includes('Setup') )
                    || ( asset.name.includes('exe') && asset.name.includes('Setup') )
                )
                    updated_os[0].download_url = asset.browser_download_url;
                // Windows portable
                if (
                    ( asset.content_type === 'application/x-msdownload' && !asset.name.includes('Setup') )
                    || ( asset.name.includes('exe') && !asset.name.includes('Setup') )
                )
                    updated_os[1].download_url = asset.browser_download_url;
                // Mac dmg
                if ( asset.name.includes('dmg') )
                    updated_os[2].download_url = asset.browser_download_url;
                // Linux deb
                // TODO: Other linux distros
                if ( asset.name.includes('deb') )
                    updated_os[3].download_url = asset.browser_download_url;
            })

            // Update the array of OS
            setOS(updated_os);
        })
    }, []);

    /**
     * Renders a list the latest release of all the supported platform with OSCards component
     * @returns {JSX.Element}
     */
    const loadLatestReleaseDownloads = () => {
        return (
            <section className="flex flex-col w-full dark:bg-dark_bg dark:text-dark_text
                                pt-32 py-10 px-10 md:px-20 lg:px-32 xl:px-40 2xl:px-44 space-y-10">
                <div className="text-4xl font-bold pt-8">
                    Latest version downloads ({versionName})
                </div>
                <div className="flex flex-col gap-y-20 md:grid md:grid-cols-2 md:gap-x-20 xl:flex xl:flex-row justify-center">
                    {
                        os.map((system, index) => {
                            return <OScard os={system} key={index}/>
                        })
                    }
                </div>
            </section>
        )
    }

    /**
     * Loads the releases list after the retrieval of its information
     * @returns {JSX.Element}
     */
    const loadReleases = () => {
        return (
            <section className="flex flex-col dark:bg-dark_bg dark:text-dark_text px-10 md:px-20 lg:px-32 xl:px-40 2xl:px-44">
                <div className="flex h-auto w-full">
                    <span className="flex text-3xl font-bold content-center">
                        Releases
                    </span>
                    <span className="flex ml-5 px-5 bg-primary dark:bg-dark_primary font-semibold
                                    rounded-md text-xl place-items-center">
                        {numReleases}
                    </span>
                </div>

                {/* Releases List*/}
                {
                    releases.map( (release, index) => {
                        return <Release release={release} key={index}/>
                    })
                }
            </section>
        )
    }

    return (
        <>
            {loadLatestReleaseDownloads()}
            {loadReleases()}
        </>
    )
}

export { Releases };