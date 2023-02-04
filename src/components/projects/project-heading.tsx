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
  console.log(githubLink);

  return (
    <div className="flex flex-col">
      <h1 className="mx-6 my-4 text-4xl font-bold tracking-wide uppercase md:my-6">
        {title}
      </h1>
      <div className="flex items-center justify-between pb-2 mx-6 border-b-4 border-black border-solid">
        <p className="text-xs font-light">{technologies}</p>
        <div className="flex">
          <IconLinks.Github
            link={githubLink}
            fill="black"
            className="w-5 h-5 mr-3 md:mr-5"
          />
          <IconLinks.External link={websiteLink} className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default ProjectHeading;
