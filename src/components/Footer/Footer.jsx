import LaSalle from '../../assets/la salle.jpg';
import { FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <div
      className="flex flex-col w-full h-[25vh] bg-slate-100
                        dark:text-dark_text justify-between
                        dark:bg-gradient-to-t dark:from-dark_bg dark:to-dark_secondary
                        px-10 md:px-20 lg:px-32 xl:40 2xl:px-44 py-5"
    >
      <div className="flex w-full h-full">
        <img src={LaSalle} alt="La Salle URL logo" className="h-14" />
      </div>
      <div className="flex w-full justify-between">
        <span> Copyright © 2022 La Salle URL</span>
        {/* GitHub */}
        <a href="https://github.com/LS-LEDA/MLA">
          <FiGithub size={26} />
        </a>
        {/* Other social media */}
      </div>
    </div>
  );
};

export { Footer };
