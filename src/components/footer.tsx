import { Links } from "constants/site-constants";
import React from "react";
import IconLinks from "./icon-links";

const Footer = () => {
  return (
    <footer className="h-12 bg-black text-white flex w-full text-xs flex items-center px-6">
      <IconLinks.LinkedIn className="mr-3 h-4 w-4" />
      <IconLinks.Github link={Links.Repositories} className="mr-3 h-4 w-4" />
      <IconLinks.Twitter className="mr-3 h-4 w-4" />
      <IconLinks.Youtube className="mr-3 h-4 w-4" />
    </footer>
  );
};

export default Footer;
