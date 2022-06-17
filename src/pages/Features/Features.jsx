import {FeatureCard} from "../../components/FeatureCard/FeatureCard";
import {TiDeviceDesktop} from "react-icons/ti";
import {RiLuggageCartLine, RiPaintBrushFill} from "react-icons/ri";
import {BsFillShieldLockFill} from "react-icons/bs";
import {VscFileCode} from "react-icons/vsc";
import {SiDatabricks} from "react-icons/si";
import {MdDarkMode} from "react-icons/md";
import {BiCustomize} from "react-icons/bi";
import {useState} from "react";
import CrossPlatform from "../../assets/features/cross_platform.svg";
import Portable from "../../assets/features/portable.svg";
import PrivateData from "../../assets/features/private_data.svg";
import BrowseFiles from "../../assets/features/browse_files.svg";

const Features = () => {
    const features = [
        {
            title: "Cross-platform",
            description: "MLA works across operating systems. Use it on OS X, Windows or Linux.",
            icon: <TiDeviceDesktop size={24}/>,
            img: CrossPlatform
        },
        {
            title: "Portable",
            description: "Use it on the go. No installation is required.",
            icon: <RiLuggageCartLine size={24}/>,
            extra: "More information",
            img: Portable
        },
        {
            title: "Private",
            description: "Process all the data in your local computer. Your data is yours and only yours.",
            icon: <BsFillShieldLockFill size={24}/>,
            extra: "More information",
            img: PrivateData
        },
        {
            title: "File system browser",
            description: "Easily browse and open Moodle log files.",
            icon: <VscFileCode size={24}/>,
            img: BrowseFiles
        }
    ];

    const customizations = [
        {
            title: "Plugins",
            description: "Enhance and power-up MLA with plugins. Add extra features to the application.",
            icon: <SiDatabricks size={24}/>
        },
        {
            title: "Dark mode",
            description: "For night owls. Only one click away to turn everything dark. Toggle it on or off as you prefer.",
            icon: <MdDarkMode size={24}/>
        },
        {
            title: "Customizable",
            description: "Modify the application according to your needs.",
            icon: <BiCustomize size={24}/>
        },
        {
            title: "Themes",
            description: "MLA ships pre-installed with UI themes in both dark and light colours. Can't find what you're looking for? Create your own.",
            icon: <RiPaintBrushFill size={24}/>
        }
    ];

    // Feature selection
    const [selectedFeat, selectFeat] = useState(0);

    return (
        <section id="features" className="flex flex-col min-h-screen w-full m-auto justify-center content-center gap-y-20
                                          p-20 md:px-32 lg:42 2xl:px-96 dark:bg-dark_bg dark:text-dark_text">
            <div className="flex flex-col w-full h-auto space-y-10">
                <h1 className="flex text-3xl justify-center font-bold md:justify-start md:font-normal"> Got you covered </h1>
                <div className="flex w-full h-full">
                    <div className="flex flex-col w-1/2 space-y-2">
                        {
                            features.map( (feat, index) => {
                                return <FeatureCard feature={feat} key={index} id={index} select={selectFeat}/>
                            })
                        }
                    </div>
                    {/* Feature Card Image */}
                    <div className="flex w-1/2 p-5">
                        <img src={features[selectedFeat].img} alt={features[selectedFeat].title}/>
                    </div>
                </div>
            </div>

            <h1 className="flex text-3xl justify-center font-bold md:justify-start md:font-normal"> Make it yours </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-auto gap-10 gap-y-20">
                {
                    customizations.map( (feat, index) => {
                        return <FeatureCard feature={feat} key={index}/>
                    })
                }
            </div>
        </section>
    );
}

export { Features };