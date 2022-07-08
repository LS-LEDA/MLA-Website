import {useEffect, useState} from "react";
import ThemeButton from "../UI/ThemeButton";
import MLALogo from "../../assets/mla_logo.svg";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    const [atTopPage, setTop] = useState(false);

    // Apply styles on scroll
    const handleScroll = () => {
        if (window.scrollY > 0) {
            // User has scrolled
            setTop(false);
        } else {
            // User is at top of page
            setTop(true);
        }
    };

    // Scroll event listener on navigation bar mount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`flex fixed top-0 w-full h-32 justify-between py-10
                        backdrop-filter backdrop-blur-3xl z-50
                        bg-white dark:bg-dark_bg opacity-[0.993]
                        text-text dark:text-dark_text border-b
                        px-10 md:px-20 lg:px-32 xl:40 2xl:px-44 
                        ${atTopPage ? 'border-transparent' : 'border-slate-200 dark:border-slate-50/10'}`}>
            {/* Navigation bar links */}
            <nav className="flex w-auto h-auto">
                <ul className="flex w-auto gap-x-10 items-center font-bold">
                    <li className="flex hover:cursor-pointer">
                        <NavLink to="/" className="flex space-x-2 place-items-center">
                            <img src={MLALogo} alt="MLA Logo" width={30}/>
                            <span> MLA </span>
                        </NavLink>
                    </li>
                    <li className="hover:cursor-pointer">
                        <NavLink to="docs">Docs</NavLink>
                    </li>
                    <li className="hover:cursor-pointer">
                        <NavLink to="releases">Releases</NavLink>
                    </li>
                    <li className="hover:cursor-pointer">
                        <NavLink to="roadmap">Roadmap</NavLink>
                    </li>
                </ul>
            </nav>

            {/* Theme Selector */}
            <ThemeButton/>
        </div>
    )
}

export default NavBar;