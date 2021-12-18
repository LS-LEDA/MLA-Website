import {
    BiCustomize,
    BsFillShieldLockFill,
    MdDarkMode,
    RiLuggageCartLine, RiPaintBrushFill,
    SiDatabricks,
    TiDeviceDesktop,
    VscFileCode
} from "react-icons/all";
import {FeatureCard} from "../../components/FeatureCard/FeatureCard";

const Features = (props) => {
    const features = [
        {
            title: "Cross-platform",
            description: "MLA works across operating systems. Use it on OS X, Windows or Linux.",
            icon: <TiDeviceDesktop size={24}/>
        },
        {
            title: "Portable",
            description: "Use it on the go. No installation is required.",
            icon: <RiLuggageCartLine size={24}/>,
            extra: "More information"
        },
        {
            title: "Private",
            description: "Process all the data in your local computer. Your data is yours and only yours.",
            icon: <BsFillShieldLockFill size={24}/>,
            extra: "More information"
        },
        {
            title: "File system browser",
            description: "Easily browse and open Moodle log files.",
            icon: <VscFileCode size={24}/>
        }
    ];

    const customizations = [
        {
            title: "Plugins",
            description: "",
            icon: <SiDatabricks size={24}/>
        },
        {
            title: "Dark mode",
            description: "For night owls",
            icon: <MdDarkMode size={24}/>
        },
        {
            title: "Customizable",
            description: "",
            icon: <BiCustomize size={24}/>
        },
        {
            title: "Themes",
            description: "MLA ships pre-installed with UI themes in both dark and light colours. Can't find what you're looking for? Create your own.",
            icon: <RiPaintBrushFill size={24}/>
        }
    ];

    return (
        <section id="features" className="flex flex-col min-h-screen w-full m-auto justify-center content-center gap-y-20
                                          px-20 md:px-32 lg:42 2xl:px-96">
            <h1 className="flex text-3xl justify-center font-bold md:justify-start md:font-normal"> Got you covered </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-auto gap-10 gap-y-20">
                {
                    features.map( (feat, index) => {
                        return <FeatureCard feature={feat} key={index}/>
                    })
                }
            </div>

            <h1 className="flex text-3xl justify-center md:justify-start"> Make it yours </h1>
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