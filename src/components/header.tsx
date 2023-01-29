import React from "react";
import HamburgerMenu from "./hamburger-menu";

const Header = () => {
  return (
    <header className="flex flex-1 justify-end h-10 w-full">
      <HamburgerMenu />
    </header>
  );
};

export default Header;
