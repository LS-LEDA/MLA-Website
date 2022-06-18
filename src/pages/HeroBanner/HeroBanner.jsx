import {useEffect, useState} from "react";
import axios from "axios";
import IconButton from "../../components/UI/IconButton";
import {MdDownload} from "react-icons/md";

const HeroBanner = (props) => {
    const MLA_RELEASES = "https://api.github.com/repos/LS-LEDA/MLA/releases";
    const [os, setOS] = useState([]);

    useEffect(() => {
        // Check operating system and display platform specific download button
        let osType;
        // Extensions to be searched
        let searchExt = [];
        if ( navigator.userAgent.indexOf('Linux') !== -1 ) {
            osType = 'Linux';
            searchExt = ['deb', 'rpm'];
        }
        if ( navigator.userAgent.indexOf('Windows') !== -1 ) {
            osType = 'Windows';
            searchExt = ['exe'];
        }
        if ( navigator.userAgent.indexOf('Mac') !== -1 ) {
            osType = 'MacOS';
            searchExt = ['dmg'];
        }

        // Get MLA assets
        axios.get(MLA_RELEASES).then( (resp) => {
            // Get the latest release's assets
            let release_assets = resp.data[0].assets;
            // Search each extension in the assets array
            searchExt.forEach( ext => {
                release_assets.forEach( asset => {
                    if ( osType === 'Windows' ) {
                        // Setup MLA
                        if ( asset.name.includes(ext) && asset.name.includes('Setup') ) {
                            setOS(prevOS => [...prevOS, {
                                name: `Download .${ext}`,
                                download_url: asset.browser_download_url,
                                icon: <MdDownload/>
                            }]);
                        }
                        // Portable MLA
                        if ( asset.name.includes(ext) && !asset.name.includes('Setup') ) {
                            setOS(prevOS => [...prevOS, {
                                name: `Download portable .${ext}`,
                                download_url: asset.browser_download_url,
                                icon: <MdDownload/>
                            }]);
                        }
                    } else {
                        if ( asset.name.includes(ext) ) {
                            setOS(prevOS => [...prevOS, {
                                name: `Download .${ext}`,
                                download_url: asset.browser_download_url,
                                icon: <MdDownload/>
                            }]);
                        }
                    }
                });
            });
        })
    }, []);

    return (
        <section className="flex flex-col w-full h-screen place-items-center dark:bg-dark_bg px-10 md:px-20 lg:px-32 xl:40 2xl:px-44">
            <div className="flex w-full h-[90vh] place-items-center">
                <div className="flex flex-col w-1/2 h-full place-items-center justify-center">
                    {/* Header */}
                    <h1 className="flex text-center w-auto text-8xl font-bold dark:text-dark_text"> Moodle Learning Analytics </h1>
                    {/* Download buttons */}
                    <div className="flex w-fit h-fit space-x-5 mt-20">
                        {
                            os.map( (system, index) => {
                                return <IconButton text={system.name} icon={system.icon} link={system.download_url} download={false} key={index}/>
                            })
                        }
                    </div>
                    {/* Link to other platforms download */}
                    <a className="dark:text-dark_text mt-5" href="#">
                        Other platforms
                    </a>
                </div>

                <img className="flex w-1/2 h-fit"
                     src="https://raw.githubusercontent.com/LS-LEDA/MLA/main/resources/demo/demo_dashboard.png"
                     alt="Logo"/>
            </div>
            {/* Slogan text */}
            <div className="flex h-[10vh] text-4xl dark:text-dark_text text-center">
                <span className="opacity-60">
                    Analyse logs and get
                </span>
                <span className="opacity-[.87] font-bold">
                    &nbsp;insightful&nbsp;
                </span>
                <span className="opacity-60">
                    data of your
                </span>
                <span className="opacity-[.87] font-bold">
                    &nbsp;students
                </span>
            </div>
        </section>
    );
}

export { HeroBanner }