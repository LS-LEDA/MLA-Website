import {BsFillShieldLockFill, RiLuggageCartLine, TiDeviceDesktop, VscFileCode} from "react-icons/all";
import {FeatureCard} from "../components/FeatureCard/FeatureCard";

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

    return (
        <section id="features" className="flex w-full place-content-center">
            <div className="grid grid-cols-1 md:grid-cols-2 md:auto-rows-auto gap-10 gap-y-20">
                {
                    features.map( (feat, index) => {
                        return <FeatureCard feature={feat} key={index}/>
                    })
                }
            </div>
        </section>
    );
}

export { Features };