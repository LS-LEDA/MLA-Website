import IconButton from "../UI/IconButton";
import {CgNotes} from "react-icons/cg";
import {ReleaseCard} from "./ReleaseCard";

/**
 * Release component includes a list of releases for different platforms
 * and a button to show the release notes
 * @param props: release related information
 * @returns {JSX.Element}
 */
const Release = (props) => {
    return (
        <div className="flex flex-col w-full py-10 space-y-5">
            {/* Release version, name and notes */}
            <div className="flex w-full justify-between">
                    <span className="flex text-2xl font-semibold items-center">
                        {props.release.name}
                    </span>
                <IconButton download={false} text={"Release notes"} icon={<CgNotes/>}/>
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