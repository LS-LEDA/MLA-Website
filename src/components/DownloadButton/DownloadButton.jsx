import {MdFileDownload} from "react-icons/all";

const DownloadButton = () => {
    const downloadMLA = () => {
        console.log("Download MLA")
    }

    return (
        <button type="button" onClick={downloadMLA} className="bg-indigo-300 rounded-md px-5 py-3 hover:bg-indigo-400">
            <div className="flex items-center">
                <MdFileDownload className="mr-2"/>
                Download
            </div>
        </button>
    );
}

export { DownloadButton };