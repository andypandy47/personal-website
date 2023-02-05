import React from "react";
import { NextPage } from "next";
import ProjectCard from "components/projects/project-card";
import { SectionIds } from "constants/site-constants";
import { GetStaticProps } from "next/types";
import { getAllPostsMetaData } from "services/post-service";
import { IPostMetaData } from "constants/post-interfaces";
import Link from "next/link";
import IconLinks from "components/icon-links";
import { motion } from "framer-motion";
import Layout from "components/layout";

interface IHomeProps {
  projectData: IPostMetaData[];
}

const Home: NextPage<IHomeProps> = ({ projectData }: IHomeProps) => {
  return (
    <>
      <Layout
        title="Andrew Kay - andrew-kay.com"
        description="Info about myself and the projects I've developed in my spare time"
        url="https://www.andrew-kay.com"
      >
        <section
          className="flex flex-col items-center w-full lg:pt-10 min-safe-h-screen snap-center"
          id={SectionIds.Landing}
        >
          <div className="flex flex-col justify-center flex-1">
            <div className="pb-4 dark:border-white">
              <div className="overflow-hidden">
                <motion.p
                  className="text-lg tracking-wide md:text-xl xl:text-2xl"
                  animate={{ y: 0 }}
                  initial={{ y: 50 }}
                  transition={{ duration: 1 }}
                >
                  Hi,
                </motion.p>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  className="text-lg tracking-wide md:text-xl xl:text-2xl"
                  animate={{ y: 0 }}
                  initial={{ y: 50 }}
                  transition={{ delay: 0.3, duration: 1 }}
                >
                  I&apos;m <span className="tracking-widest">Andrew Kay</span>,
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h2
                  className="text-2xl font-bold tracking-wide md:text-4xl xl:text-5xl"
                  animate={{ y: 0 }}
                  initial={{ y: 100 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  a Software Developer
                </motion.h2>
              </div>
            </div>
            <motion.div
              className="bg-black dark:bg-white h-[4px]"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            ></motion.div>
            <motion.div
              className="flex justify-around py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <IconLinks.Github
                link="https://github.com/andypandy47?tab=repositories"
                className="w-5 h-5 transition-colors hover:text-slate-400"
              />
              <IconLinks.LinkedIn className="w-5 h-5 transition-colors hover:text-slate-400" />
              <IconLinks.Twitter className="w-5 h-5 transition-colors hover:text-slate-400" />
              <IconLinks.Youtube className="w-5 h-5 transition-colors hover:text-slate-400" />
            </motion.div>
          </div>
          <motion.div
            className="flex flex-col items-center justify-center flex-1 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <a
              role="button"
              className="transition-colors hover:text-slate-400"
              href={`#${SectionIds.Projects}`}
            >
              View my work{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 m-auto mt-2 animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </a>
          </motion.div>
        </section>
        <section
          className="flex flex-col items-center w-full px-6 min-safe-h-screen snap-center lg:pt-10"
          id={SectionIds.Projects}
        >
          <div className="flex items-center w-full h-8 mb-4">
            <div className="w-8 h-1 bg-black dark:bg-white" />
            <h2 className="flex items-center ml-2 text-xs font-bold">
              PROJECTS
            </h2>
          </div>
          <div className="flex flex-col items-center flex-1 w-full">
            {projectData.map((data) => {
              return (
                <ProjectCard
                  key={data.title}
                  name={data.title}
                  detail={data.excerpt}
                />
              );
            })}
          </div>
          <motion.div
            className="flex items-center justify-center flex-1 w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <a
              role="button"
              className="flex flex-col items-center justify-center transition-colors hover:text-slate-400"
              href={`#${SectionIds.AboutMe}`}
            >
              About me{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 m-auto mt-2 animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </a>
          </motion.div>
        </section>
        <section
          className="flex flex-col items-center w-full lg:pt-10 min-safe-h-screen snap-center"
          id={SectionIds.AboutMe}
        >
          <div className="flex items-center w-full h-8 px-6 mb-4">
            <div className="w-8 h-1 bg-black dark:bg-white" />
            <h2 className="flex items-center ml-2 text-xs font-bold">
              ABOUT ME
            </h2>
          </div>
          <motion.div
            className="px-6"
            initial={{ opacity: 0, x: 500 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="mb-4">
              I am a software developer with a passion for technology and
              innovation. I currently work at{" "}
              <Link
                href="https://answerdigital.com/"
                className="font-semibold underline"
                target="_blank"
                rel="noopener noref"
              >
                Answer Digital Ltd
              </Link>
              , where I leverage my expertise in AI and cloud computing to
              deliver cutting-edge solutions for clients in the healthcare
              sector.
            </p>
            <p className="mb-4">
              In my free time, I enjoy exploring my creative side through game
              development, composing music, and tinkering with various projects.
              I find that these hobbies not only allow me to relax and unwind,
              but also give me the opportunity to constantly learn new things
              and improve my skills.
            </p>
            <p>
              I am a results-driven individual who is dedicated to delivering
              high-quality work and am always looking for ways to improve and
              evolve my craft. I believe in the power of technology to change
              the world for the better and am excited to be a part of this
              ever-evolving industry.
            </p>
          </motion.div>
        </section>
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const projectData = getAllPostsMetaData("project");

  return {
    props: {
      projectData,
    },
  };
};
