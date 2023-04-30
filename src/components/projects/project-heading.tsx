import React from "react";
import IconLinks from "components/icon-links";

interface IProjectHeadingProps {
  title: string;
  githubLink: string;
  websiteLink: string;
  technologies: string;
}

const ProjectHeading = ({
  title,
  githubLink,
  websiteLink,
  technologies,
}: IProjectHeadingProps) => {
  return (
    <>
      <div className="h-0 lg:h-10" id="top" />
      <div className="flex flex-col w-full">
        <h1 className="mx-6 my-4 text-3xl font-bold tracking-wide uppercase md:text-4xl">
          {title}
        </h1>
        <div className="flex items-center justify-between pb-2 mx-6 border-b-4 border-black border-solid dark:border-white">
          <p className="text-xs font-light">{technologies}</p>
          <div className="flex">
            <IconLinks.Github
              link={githubLink}
              fill="black"
              className="w-5 h-5 mr-3 transition-colors md:mr-5 hover:text-slate-600"
            />
            <IconLinks.External
              link={websiteLink}
              className="w-5 h-5 transition-colors hover:text-slate-600"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectHeading;
