import { BiMoon, BiSun } from 'react-icons/bi';
import { useState } from 'react';

/**
 * Theme Selector Button, toggles between light & dark mode
 * @param props {
 *     state: boolean
 * }
 * state: Light Mode
 * !state: Dark Mode
 */
const ThemeButton = () => {
  const [currentTheme, setCurrentTheme] = useState(localStorage.theme);

  /**
   * Retrieves app's theme saved in local storage and switches
   * between dark / light mode.
   */
  const changeTheme = () => {
    let prevTheme = localStorage.theme;
    localStorage.theme = prevTheme === 'dark' ? 'light' : 'dark';
    setCurrentTheme(localStorage.theme);
    if (localStorage.theme === 'dark' || !('theme' in localStorage)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div
      className="flex w-auto h-full aspect-square rounded-xl justify-center items-center hover:cursor-pointer
                        hover:transition-colors duration-500 ease-in-out hover:text-primary_variant"
      onClick={changeTheme}
    >
      {currentTheme === 'dark' ? <BiMoon size={26} /> : <BiSun size={26} />}
    </div>
  );
};

export default ThemeButton;
