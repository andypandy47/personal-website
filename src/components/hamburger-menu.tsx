import React, { useRef, useState } from "react";
import { NavLinks } from "constants/site-constants";
import useClickOutsideCallback from "hooks/useClickOutsideCallback";
import DarkModeToggle from "./darkmode-toggle";

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
        className="z-10 flex flex-col items-center justify-around w-6 h-6 mt-2 mr-2 cursor-pointer lg:hidden"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        id="hamburger-menu-button"
        ref={menuButtonRef}
      >
        <span
          className={`block w-6 h-0.5 transition-transform transform duration-200 ease-in-out bg-current ${
            menuIsOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 transition-opacity duration-200 ease-in-out bg-current ${
            menuIsOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 transition-transform transform duration-200 ease-in-out bg-current ${
            menuIsOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>
      <nav
        id="nav-dropdown"
        className={`flex justify-between bg-white z-20 w-3/4 bg-white dark:bg-neutral-800 divide-gray-100 shadow absolute top-8 right-2 transition-transform ease-in-out origin-top rounded ${
          menuIsOpen ? "scale-y-100" : "scale-y-0"
        }`}
        ref={dropdownRef}
      >
        <ul className="w-full px-2 py-2 text-lg">
          {NavLinks.map((navLink, index) => (
            <li key={navLink.text}>
              <a
                href={navLink.link}
                className={`block py-2 tracking-widest ${
                  index === NavLinks.length - 1
                    ? ""
                    : "border-solid border-b border-gray-200"
                }`}
                onClick={() => setMenuIsOpen(false)}
              >
                {navLink.text}
              </a>
            </li>
          ))}
          <li>
            <DarkModeToggle className="text-black dark:text-white " />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HamburgerMenu;
