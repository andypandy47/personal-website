import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface IProjectCardProps {
  name: string;
  detail: string;
}

const ProjectCard = ({ name, detail }: IProjectCardProps) => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Link
        role="button"
        href={`/projects/${name.toLowerCase()}#top`}
        className="flex flex-col w-full text-left transition-colors hover:text-slate-400"
        scroll={true}
      >
        <h3 className="mb-4 text-3xl font-semibold">{name}</h3>
        <p className="mb-4 text-sm">{detail}</p>
        <div role="button" className="text-xs font-light">
          View more -&gt;
        </div>
      </Link>
      <hr className="w-full h-px my-4 border-black border-solid dark:border-white border-1" />
    </motion.div>
  );
};

export default ProjectCard;
