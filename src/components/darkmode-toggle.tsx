import React, { useEffect, useState } from "react";

interface IDarkModeToggleProps {
  className?: string;
}

const themes = {
  light: "light",
  dark: "dark",
};

const DarkModeToggle = ({ className = "" }: IDarkModeToggleProps) => {
  const [enabled, setEnabled] = useState(false);

  const toggle = (enabled: boolean) => {
    setEnabled(enabled);

    const newTheme = enabled ? themes.dark : themes.light;

    const root = document.getElementsByTagName("html")[0];
    root.setAttribute("class", newTheme);

    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const previousVisitDarkModePreference = localStorage.getItem("theme");

    //Prioritise previous preference, else use system preference
    const darkModePreference =
      previousVisitDarkModePreference === null
        ? systemPrefersDark
        : previousVisitDarkModePreference === themes.dark;

    toggle(darkModePreference);
  }, []);

  return (
    <label
      className={`inline-flex items-center mr-6 cursor-pointer ${className}`}
      onClick={(e) => {
        toggle(!enabled);
        e.preventDefault();
      }}
    >
      <button
        title="Toggle Theme"
        className="relative w-12 h-6 p-1 transition-colors duration-500 ease-in bg-gray-400 rounded-full dark:bg-gray-600 focus:border-transparent"
      >
        <div
          id="toggle"
          className="relative w-4 h-4 ml-0 transition-all duration-300 ease-out bg-white rounded-full pointer-events-none dark:bg-black dark:ml-6"
        ></div>
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 ml-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>
    </label>
  );
};

export default DarkModeToggle;
