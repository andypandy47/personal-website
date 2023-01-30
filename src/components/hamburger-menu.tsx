import React, { useRef, useState } from "react";
import { NavLinks } from "constants/site-constants";
import useClickOutsideCallback from "hooks/useClickOutsideCallback";

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
        className="absolute top-0 right-0 z-10 flex cursor-pointer items-center justify-center bg-white mr-6 mt-6 lg:hidden"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        id="hamburger-menu-button"
        ref={menuButtonRef}
      >
        <div className="space-y-2">
          <span
            className={`block h-1 w-6 origin-center bg-black transition-transform ease-in-out ${
              menuIsOpen ? "translate-y-1.5 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`block h-1 origin-center bg-black transition-transform ease-in-out float-right ${
              menuIsOpen ? "-translate-y-1.5 -rotate-45 w-6" : "w-4"
            }`}
          ></span>
        </div>
      </button>
      <nav
        id="nav-dropdown"
        className={`flex justify-between bg-white z-20 w-64 bg-white divide-gray-100 shadow absolute top-12 right-6 transition-transform ease-in-out origin-top rounded ${
          menuIsOpen ? "scale-y-100" : "scale-y-0"
        }`}
        ref={dropdownRef}
      >
        <ul className="py-2 px-2 text-sm w-full">
          {NavLinks.map((navLink, index) => (
            <li key={navLink.text}>
              <a
                href={navLink.link}
                className={`block py-2 tracking-widest ${
                  index === NavLinks.length - 1
                    ? ""
                    : "border-solid border-b border-gray-200"
                }`}
              >
                {navLink.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default HamburgerMenu;
