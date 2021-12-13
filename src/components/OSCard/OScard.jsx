import {DownloadButton} from "../DownloadButton/DownloadButton";

const OScard = (props) => {
    return (
        <div className="flex flex-col border-2 border-indigo-400 rounded-md p-10
                        hover:bg-indigo-200 place-items-center gap-y-5">
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