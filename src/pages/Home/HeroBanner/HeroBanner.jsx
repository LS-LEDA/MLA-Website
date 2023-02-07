import { useEffect, useState } from 'react';
import axios from 'axios';
import IconButton from '../../../components/UI/IconButton';
import { MdDownload } from 'react-icons/md';

const HeroBanner = (props) => {
  const MLA_RELEASES = 'https://api.github.com/repos/LS-LEDA/MLA/releases';
  const [os, setOS] = useState([]);

  useEffect(() => {
    // Check operating system and display platform specific download button
    let osType;
    // Extensions to be searched
    let searchExt = [];
    if (navigator.userAgent.indexOf('Linux') !== -1) {
      osType = 'Linux';
      searchExt = ['deb', 'rpm'];
    }
    if (navigator.userAgent.indexOf('Windows') !== -1) {
      osType = 'Windows';
      searchExt = ['exe'];
    }
    if (navigator.userAgent.indexOf('Mac') !== -1) {
      osType = 'MacOS';
      searchExt = ['dmg'];
    }

    // Get MLA assets
    axios.get(MLA_RELEASES).then((resp) => {
      // Get the latest release's assets
      let release_assets = resp.data[0].assets;
      // Search each extension in the assets array
      searchExt.forEach((ext) => {
        release_assets.forEach((asset) => {
          if (osType === 'Windows') {
            // Setup MLA
            if (asset.name.includes(ext) && asset.name.includes('Setup')) {
              setOS((prevOS) => [
                ...prevOS,
                {
                  name: `Download .${ext}`,
                  download_url: asset.browser_download_url,
                  icon: <MdDownload />,
                },
              ]);
            }
            // Portable MLA
            if (asset.name.includes(ext) && !asset.name.includes('Setup')) {
              setOS((prevOS) => [
                ...prevOS,
                {
                  name: `Download portable .${ext}`,
                  download_url: asset.browser_download_url,
                  icon: <MdDownload />,
                },
              ]);
            }
          } else {
            if (asset.name.includes(ext)) {
              setOS((prevOS) => [
                ...prevOS,
                {
                  name: `Download .${ext}`,
                  download_url: asset.browser_download_url,
                  icon: <MdDownload />,
                },
              ]);
            }
          }
        });
      });
    });
  }, []);

  return (
    <section className="flex flex-col w-full min-h-screen place-items-center dark:bg-dark_bg px-10 pt-32 md:px-20 lg:px-32 xl:px-40 2xl:px-44 xl:pt-0">
      <div className="flex flex-col xl:flex-row w-full h-[80vh] md:h-[90vh] place-items-center">
        <div className="flex flex-col w-full xl:w-1/2 h-auto md:h-full place-items-center justify-center">
          {/* Header */}
          <h1 className="flex text-center w-auto text-4xl sm:text-6xl xl:text-8xl font-bold dark:text-dark_text">
            {' '}
            Moodle Learning Analytics{' '}
          </h1>
          {/* Download buttons */}
          <div className="flex flex-col xl:flex-row xl:justify-center w-full sm:w-4/6 h-auto space-y-2 xl:space-y-0 xl:space-x-2 mt-10 xl:mt-20">
            {os.map((system, index) => {
              return (
                <IconButton
                  text={system.name}
                  icon={system.icon}
                  link={system.download_url}
                  download={false}
                  key={index}
                />
              );
            })}
          </div>
          {/* Link to other platforms download */}
          {/* TODO: Redirect to Releases page */}
          <a
            className="dark:text-dark_text mt-5 hover:underline underline-offset-4"
            href="https://github.com/LS-LEDA/MLA/releases"
          >
            Other platforms
          </a>
        </div>

        <img
          className="flex w-full xl:w-1/2 h-fit my-5"
          src="https://raw.githubusercontent.com/LS-LEDA/MLA/main/resources/demo/demo_dashboard.png"
          alt="Moodle Learning Analytics Dashboard"
        />
      </div>
      {/* Slogan text */}
      <div className="flex w-full h-[10vh] place-items-center">
        <div
          className="w-full text-2xl  md:text-3xl xl:text-4xl dark:text-dark_text text-center
                                bg-blue-100 dark:bg-blue-900 rounded-md px-5 py-10 xl:bg-transparent
                                dark:xl:bg-transparent"
        >
          <span className="opacity-60">Analyse logs and get</span>
          <span className="opacity-[.87] font-bold">
            &nbsp;insightful&nbsp;
          </span>
          <span className="opacity-60">data of your</span>
          <span className="opacity-[.87] font-bold">&nbsp;students</span>
        </div>
      </div>
    </section>
  );
};

export { HeroBanner };
