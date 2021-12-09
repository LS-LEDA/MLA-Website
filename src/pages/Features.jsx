import {BsFillShieldLockFill, RiLuggageCartLine, TiDeviceDesktop, VscFileCode} from "react-icons/all";
import {FeatureCard} from "../components/FeatureCard/FeatureCard";

const Features = (props) => {
    const features = [
        {
            title: "Cross-platform",
            description: "MLA works across operating systems. Use it on OS X, Windows or Linux.",
            icon: <TiDeviceDesktop/>
        },
        {
            title: "Portable",
            description: "Use it on the go, without any installation.",
            icon: <RiLuggageCartLine/>
        },
        {
            title: "Private",
            description: "Process all the data in your local computer.",
            icon: <BsFillShieldLockFill/>
        },
        {
            title: "File system browser",
            description: "Easily browse and open Moodle log files.",
            icon: <VscFileCode/>
        }
    ];

    return (
        <section id="features" className="flex w-full h-screen">
            {
                features.map( (feat) => {
                    return <FeatureCard title={feat.title} description={feat.description} icon={feat.icon}/>
                })
            }
        </section>
    );
}

export { Features };