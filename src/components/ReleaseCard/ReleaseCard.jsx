import {BsBox} from "react-icons/bs";
import {MdDownload} from "react-icons/md";
import {useState} from "react";
import {motion} from "framer-motion";

// EasIn animation from right to left and incrementing opacity
const DownloadMotion = {
    visible: {opacity: 1, x: 0, transition:{ ease: "easeIn", duration: 0.25}},
    hidden: {opacity: 0, x: 10}
};

/**
 * Release card contains the name of the release and other insightful information
 * like the size and the publishing date.
 * Clicking on it will download the resource
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const ReleaseCard = (props) => {
    const [isHovering, setIsHovering] = useState(false);
    const [releaseDate, setReleaseDate] = useState(new Date(props.release.published_at));

    const handleMouse = (hoverValue) => {
        setIsHovering(hoverValue);
    };

    /**
     * Converts bytes to a more readable format
     * @param bytes: Bytes to be transformed
     * @param decimals: Decimals specification
     * @return {string}: Converted bytes
     */
     const formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';

        const k = 1024; // 1024
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    return (
        <li className="flex w-full h-auto rounded-md border border-transparent hover:border-primary hover:dark:border-dark_primary
                       space-x-2 items-center p-3 hover:cursor-pointer duration-500"
            onMouseOver={() => handleMouse(true)}
            onMouseLeave={() => handleMouse(false)}>
            <a href={ props.platform.browser_download_url }
               className="flex w-full h-auto space-x-2 items-center justify-center"
               download>
                <BsBox style={isHovering ? {filter: "drop-shadow(0px 1px 2px rgb(6 182 212))"} : {}}/>
                <span className="flex-1">{ props.platform.name }</span>
                <span className="flex-initial w-32 text-gray-500">{ formatBytes(props.platform.size) }</span>
                <span className="flex-initial w-24 text-gray-500">{ releaseDate.toDateString().split(' ').slice(1).join(' ') }</span>
                {
                    isHovering &&
                    <motion.div
                        initial="hidden"
                        animate={["hidden", "visible"]}
                        variants={DownloadMotion}
                    >
                        <MdDownload/>
                    </motion.div>
                }
            </a>
        </li>
    )
}

export { ReleaseCard };