import IconButton from "../UI/IconButton";
import {CgClose, CgNotes} from "react-icons/cg";
import {ReleaseCard} from "./ReleaseCard";
import {useState} from "react";
import ReactMarkdown from "react-markdown";
import styles from "./Release.module.css"

/**
 * Release component includes a list of releases for different platforms
 * and a button to show the release notes
 * @param props: release related information
 * @returns {JSX.Element}
 */
const Release = (props) => {
    const [rsNotes, toggleReleaseNotes] = useState(false);

    /**
     * Toggles release notes and enables/disables body scrolling
     */
    const showReleaseNotes = () => {
        // Add a class to document's body to disable scroll
        if (rsNotes) {
            document.body.classList.remove("overflow-hidden");
        } else {
            document.body.classList.add("overflow-hidden");
        }
        toggleReleaseNotes(!rsNotes);
    }

    return (
        <div className="flex flex-col w-full py-10 space-y-5">
            {/* Release note card pop-up */}
            <div className={`${rsNotes ? "flex-col" : "hidden"} fixed flex translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] max-w-7xl max-h-96 bg-dark_bg text-dark_text dark:bg-bg dark:text-text rounded-md p-5 z-50`}>
                <span className="flex text-2xl font-semibold items-center">
                    {props.release.name}
                </span>
                <button
                    onClick={showReleaseNotes}
                    type="button"
                    className="fixed top-5 right-5 dark:hover:bg-dark_primary rounded-md p-1">
                    <CgClose size={24}/>
                </button>
                <ReactMarkdown className={`flex-col mt-2 w-full h-full overflow-y-auto space-y-2 ${styles.reactMarkDown}`}>
                    {props.release.body}
                </ReactMarkdown>
            </div>
            {/* Release version, name and notes */}
            <div className="flex w-full justify-between">
                <span className="flex text-2xl font-semibold items-center">
                    {props.release.name}
                </span>
                <IconButton download={false} text={"Release notes"} icon={<CgNotes/>} callback={showReleaseNotes}/>
            </div>
            {/* Platform releases list */}
            <ul className="flex flex-col space-y-2">
                {
                    props.release.assets.map( (platform, index) => {
                        return (
                            <ReleaseCard key={index} release={props.release} platform={platform}/>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export { Release };