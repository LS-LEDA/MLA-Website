import {DownloadButton} from "../DownloadButton/DownloadButton";

const OScard = (props) => {
    return (
        <div className="flex flex-col border-2 border-primary rounded-md p-10
                        dark:border-dark_primary
                        place-items-center gap-y-5">
            <div className="flex flex-auto">
                { props.os.icon }
            </div>
            <span className="flex flex-auto">
                { props.os.name }
            </span>
            <DownloadButton download_url={props.os.download_url}/>
        </div>
    );
}

export { OScard };