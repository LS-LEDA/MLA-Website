import {MdFileDownload} from "react-icons/all";

const DownloadButton = (props) => {
    return (
        <button type="button" className={`bg-indigo-300 rounded-md px-5 py-3 hover:bg-indigo-400 ${ props.download_url === '' ? 'cursor-not-allowed' : ''}`} >
            <div className="flex items-center">
                <MdFileDownload className="mr-2"/>
                {
                    props.download_url !== '' ? <a href={props.download_url} download>Download</a> : 'Download'
                }
            </div>
        </button>
    );
}

export { DownloadButton };