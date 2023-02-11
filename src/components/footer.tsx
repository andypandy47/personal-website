import { Links } from "constants/site-constants";
import React from "react";
import IconLinks from "./icon-links";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 flex justify-center w-full h-12 text-xs text-black bg-white border-t-0 border-black md:h-12 md:border-t dark:border-white dark:bg-black dark:text-white">
      <div className="flex items-center justify-between w-[200px] lg:w-[400px] h-full border-t md:border-t-0 border-black border-solid dark:border-white">
        <IconLinks.LinkedIn className="w-5 h-5 transition-colors hover:text-slate-600" />
        <IconLinks.Github
          link={Links.Repositories}
          className="w-5 h-5 transition-colors hover:text-slate-600"
        />
        <IconLinks.Twitter className="w-5 h-5 transition-colors hover:text-slate-600" />
        <IconLinks.Youtube className="w-5 h-5 transition-colors hover:text-slate-600" />
      </div>
    </footer>
  );
};

export default Footer;
