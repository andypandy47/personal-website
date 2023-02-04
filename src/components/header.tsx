import { NavLinks } from "constants/site-constants";
import Link from "next/link";
import React from "react";
import HamburgerMenu from "./hamburger-menu";

interface IHeaderProps {
  className?: string;
}

const Header = ({ className = "" }: IHeaderProps) => {
  return (
    <header
      className={`${className} flex items-center justify-end w-full lg:h-10 lg:bg-black`}
    >
      <HamburgerMenu />
      {NavLinks.map((navLink, index) => (
        <Link
          key={navLink.text}
          href={navLink.link}
          className={`px-6 text-sm tracking-widest border-solid text-white font-extralight border-gray-400 hidden transition-colors hover:text-slate-600 lg:flex ${
            index === NavLinks.length - 1 ? "" : "border-r"
          }`}
          scroll={false}
        >
          {navLink.text}
        </Link>
      ))}
    </header>
  );
};

export default Header;
