import { NavLinks } from "constants/site-constants";
import Link from "next/link";
import React from "react";
import HamburgerMenu from "./hamburger-menu";

const Header = () => {
  return (
    <header className="flex justify-end items-center lg:h-10 lg:bg-black w-full">
      <HamburgerMenu />
      {NavLinks.map((navLink, index) => (
        <Link
          key={navLink.text}
          href={navLink.link}
          className={`px-3 text-sm tracking-wide border-solid text-white border-gray-400 ${
            index === NavLinks.length - 1 ? "" : "border-r"
          }`}
        >
          {navLink.text}
        </Link>
      ))}
    </header>
  );
};

export default Header;
