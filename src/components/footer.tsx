import { Links } from "constants/site-constants";
import React from "react";
import IconLinks from "./icon-links";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full h-12 px-6 text-xs text-white bg-black">
      <IconLinks.LinkedIn className="w-5 h-5 mr-8" />
      <IconLinks.Github link={Links.Repositories} className="w-5 h-5 mr-8" />
      <IconLinks.Twitter className="w-5 h-5 mr-8" />
      <IconLinks.Youtube className="w-5 h-5 mr-8" />
    </footer>
  );
};

export default Footer;
