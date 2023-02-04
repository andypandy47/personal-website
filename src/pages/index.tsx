import React from "react";
import { NextPage } from "next";
import ProjectCard from "components/projects/project-card";
import Meta from "components/meta";
import { SectionIds } from "constants/site-constants";
import { GetStaticProps } from "next/types";
import { getAllPostsMetaData } from "services/post-service";
import { IPostMetaData } from "constants/post-interfaces";
import Link from "next/link";
import Footer from "components/footer";
import Header from "components/header";
import IconLinks from "components/icon-links";

interface IHomeProps {
  projectData: IPostMetaData[];
}

const Home: NextPage<IHomeProps> = ({ projectData }: IHomeProps) => {
  return (
    <>
      <Meta />
      <main className="flex flex-col items-center justify-center flex-1 w-full m-auto text-black dark:text-white min-safe-h-screen snap-mandatory snap-y lg:w-3/4 xl:w-4/6 2xl:w-1/2">
        <section
          className="flex flex-col items-center w-full min-safe-h-screen snap-center"
          id={SectionIds.Landing}
        >
          <Header className="w-full" />
          <div className="flex flex-col justify-center flex-1">
            <div className="pb-4 border-b-4 border-black border-solid dark:border-white">
              <p className="text-lg tracking-wide md:text-xl xl:text-2xl">
                Hi,
              </p>
              <h1 className="text-lg tracking-wide md:text-xl xl:text-2xl">
                I&apos;m <span className="tracking-widest">Andrew Kay</span>,
              </h1>
              <h2 className="text-2xl font-bold tracking-wide md:text-4xl xl:text-5xl">
                a Software Developer
              </h2>
            </div>
            <div className="flex justify-around py-4">
              <IconLinks.Github
                link="https://github.com/andypandy47?tab=repositories"
                className="w-5 h-5 transition-colors hover:text-slate-400"
              />
              <IconLinks.LinkedIn className="w-5 h-5 transition-colors hover:text-slate-400" />
              <IconLinks.Twitter className="w-5 h-5 transition-colors hover:text-slate-400" />
              <IconLinks.Youtube className="w-5 h-5 transition-colors hover:text-slate-400" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 w-full">
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
          </div>
        </section>
        <section
          className="flex flex-col items-center w-full px-6 min-safe-h-screen snap-center"
          id={SectionIds.Projects}
        >
          <div className="flex items-center w-full h-8 mb-4">
            <div className="w-8 h-1 bg-black dark:bg-white" />
            <h2 className="flex items-center ml-2 text-xs font-bold">
              PROJECTS
            </h2>
          </div>
          <div className="flex flex-col items-center flex-1">
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
          <div className="flex items-end justify-center w-full pb-24">
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
          </div>
        </section>
        <section
          className="flex flex-col items-center w-full min-safe-h-screen snap-center"
          id={SectionIds.AboutMe}
        >
          <div className="flex items-center w-full h-8 px-6 mb-4">
            <div className="w-8 h-1 bg-black dark:bg-white" />
            <h2 className="flex items-center ml-2 text-xs font-bold">
              ABOUT ME
            </h2>
          </div>
          <div className="px-6">
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
          </div>
          <div className="flex items-end flex-1 w-full">
            <Footer />
          </div>
        </section>
      </main>
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
