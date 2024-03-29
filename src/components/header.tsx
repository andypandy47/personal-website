import { NavLinks } from "constants/site-constants";
import Link from "next/link";
import React from "react";
import DarkModeToggle from "./darkmode-toggle";
import HamburgerMenu from "./hamburger-menu";

interface IHeaderProps {
  className?: string;
}

const Header = ({ className = "" }: IHeaderProps) => {
  return (
    <header
      className={`${className} fixed top-0 flex items-center w-full z-20 text-white dark:text-black lg:w-1/2 lg:bg-black lg:dark:bg-white`}
    >
      <div className="flex items-center justify-between w-full lg:h-10">
        <HamburgerMenu />
        <div className="flex flex-row">
          {NavLinks.map((navLink, index) => (
            <Link
              key={navLink.text}
              href={navLink.link}
              className={`px-6 text-sm tracking-widest border-solid font-light border-gray-400 hidden transition-colors hover:text-slate-600 hover:dark:text-slate-200 lg:flex ${
                index === NavLinks.length - 1 ? "" : "border-r"
              }`}
              scroll={false}
            >
              {navLink.text}
            </Link>
          ))}
        </div>
        <DarkModeToggle className="hidden text-white lg:flex lg:flex-1 lg:justify-end dark:text-black" />
      </div>
    </header>
  );
};

export default Header;
