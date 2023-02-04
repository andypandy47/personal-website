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
      className={`${className} flex items-center justify-end lg:justify-start w-full lg:h-10 lg:bg-black lg:dark:bg-white`}
    >
      <HamburgerMenu />
      {NavLinks.map((navLink, index) => (
        <Link
          key={navLink.text}
          href={navLink.link}
          className={`px-6 text-sm tracking-widest border-solid text-white dark:text-black font-light border-gray-400 hidden transition-colors hover:text-slate-600 hover:dark:text-slate-200 lg:flex ${
            index === NavLinks.length - 1 ? "" : "border-r"
          }`}
          scroll={false}
        >
          {navLink.text}
        </Link>
      ))}
      <DarkModeToggle className="hidden text-white lg:flex lg:flex-1 lg:justify-end dark:text-black" />
    </header>
  );
};

export default Header;
