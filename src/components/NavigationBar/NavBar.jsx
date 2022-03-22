import {useEffect, useState} from "react";
import ThemeButton from "../UI/ThemeButton";

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
                        text-text dark:text-dark_text
                        px-10 md:px-20 lg:px-32 xl:40 2xl:px-96
                        border-slate-200 dark:border-slate-50/10
                        ${atTopPage ? 'border-b-0' : 'border-b'}`}>
            {/* Navigation bar links */}
            <nav className="flex w-auto h-auto">
                <ul className="flex w-auto gap-x-10 items-center font-bold">
                    <li className="hover:cursor-pointer">MLA</li>
                    <li className="hover:cursor-pointer">Docs</li>
                    <li className="hover:cursor-pointer">Releases</li>
                    <li className="hover:cursor-pointer">Roadmap</li>
                </ul>
            </nav>

            {/* Theme Selector */}
            <ThemeButton/>
        </div>
    )
}

export default NavBar;