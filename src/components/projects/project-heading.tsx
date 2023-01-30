import React from "react";
import IconLinks from "../icon-links";

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
  console.log(githubLink);

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold my-4 tracking-wide uppercase mx-6">
        {title}
      </h1>
      <div className="flex items-center border-solid border-b-4 pb-2 mx-6 border-black justify-between">
        <p className="text-xs font-light">{technologies}</p>
        <div className="flex">
          <IconLinks.Github
            link={githubLink}
            fill="black"
            className="h-4 w-4 mr-3"
          />
          <IconLinks.External link={websiteLink} className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default ProjectHeading;
