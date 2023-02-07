import { MdFileDownload } from 'react-icons/md';

const DownloadButton = (props) => {
  return (
    <button
      type="button"
      className={`bg-primary dark:bg-dark_primary rounded-md px-5 py-3 
                                        hover:bg-primary_variant dark:hover:bg-dark_primary_variant 
                                        ${
                                          props.download_url === ''
                                            ? 'cursor-not-allowed'
                                            : ''
                                        }`}
    >
      <div className="flex items-center">
        <MdFileDownload className="mr-2" />
        {props.download_url !== '' ? (
          <a href={props.download_url} download>
            Download
          </a>
        ) : (
          'Download'
        )}
      </div>
    </button>
  );
};

export { DownloadButton };
