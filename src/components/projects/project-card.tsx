import Link from "next/link";
import React from "react";

interface IProjectCardProps {
  name: string;
  detail: string;
}

const ProjectCard = ({ name, detail }: IProjectCardProps) => {
  return (
    <>
      <Link
        role="button"
        href={`/projects/${name.toLowerCase()}`}
        className="flex flex-col w-full text-left"
      >
        <h3 className="text-3xl font-semibold mb-4">{name}</h3>
        <p className="text-sm mb-4">{detail}</p>
        <div role="button" className="text-xs font-light">
          View more -&gt;
        </div>
      </Link>
      <hr className="border-solid border-black border-1 my-4 h-px w-full" />
    </>
  );
};

export default ProjectCard;
