import React, { useRef, useState } from "react";
import { NavLinks } from "constants/site-constants";
import useClickOutsideCallback from "hooks/useClickOutsideCallback";
import DarkModeToggle from "./darkmode-toggle";
import Link from "next/link";

const HamburgerMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useClickOutsideCallback(
    dropdownRef,
    () => {
      if (menuIsOpen) {
        setMenuIsOpen(false);
      }
    },
    [menuButtonRef]
  );

  return (
    <>
      <button
        className="absolute top-0 right-0 z-10 flex flex-col items-center justify-around w-6 h-6 mt-2 mr-2 cursor-pointer md:mt-4 md:mr-4 lg:hidden"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        id="nav-menu-button"
        aria-label="nav-menu"
        aria-labelledby="none"
        ref={menuButtonRef}
      >
        <span
          className={`block w-6 h-0.5 transition-transform transform duration-200 ease-in-out bg-black dark:bg-white ${
            menuIsOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 transition-opacity duration-200 ease-in-out bg-black dark:bg-white ${
            menuIsOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 transition-transform transform duration-200 ease-in-out bg-black dark:bg-white ${
            menuIsOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>
      <nav
        id="nav-dropdown"
        className={`flex justify-between bg-white z-20 w-3/4 bg-white dark:bg-neutral-800 text-black dark:text-white divide-gray-100 shadow absolute top-10 right-4 transition-transform ease-in-out origin-top rounded ${
          menuIsOpen ? "scale-y-100" : "scale-y-0"
        }`}
        ref={dropdownRef}
      >
        <ul className="w-full px-2 text-lg">
          {NavLinks.map((navLink, index) => (
            <li key={navLink.text}>
              <Link
                href={navLink.link}
                className={`block py-4 tracking-widest ${
                  index === NavLinks.length - 1
                    ? "border-solid border-b border-gray-200"
                    : "border-solid border-b border-gray-200"
                }`}
                onClick={() => setMenuIsOpen(false)}
                scroll={false}
              >
                {navLink.text}
              </Link>
            </li>
          ))}
          <li>
            <DarkModeToggle className="py-4 text-black dark:text-white " />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HamburgerMenu;
