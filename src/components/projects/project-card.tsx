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
        className="flex flex-col w-full text-left transition-colors hover:text-slate-400"
      >
        <h3 className="mb-4 text-3xl font-semibold">{name}</h3>
        <p className="mb-4 text-sm">{detail}</p>
        <div role="button" className="text-xs font-light">
          View more -&gt;
        </div>
      </Link>
      <hr className="w-full h-px my-4 border-black border-solid dark:border-white border-1" />
    </>
  );
};

export default ProjectCard;
