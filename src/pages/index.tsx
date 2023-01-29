import React from "react";
import { Inter } from "@next/font/google";
import { NextPage } from "next";
import ProjectCard from "components/project-card";
import Meta from "components/meta";
import { SectionIds } from "constants/site-constants";
import { GetStaticProps } from "next/types";
import { getAllPostsMetaData } from "services/post-service";
import { IPostMetaData } from "constants/post-interfaces";
import Link from "next/link";
import Footer from "components/footer";

const inter = Inter({ subsets: ["latin"] });

interface IHomeProps {
  projectData: IPostMetaData[];
}

const Home: NextPage<IHomeProps> = ({ projectData }: IHomeProps) => {
  return (
    <>
      <Meta />
      <main
        className={`${inter.className} flex flex-col flex-1 min-h-screen justify-center items-center w-full m-auto lg:w-3/4 xl:w-4/6 2xl:w-1/2`}
      >
        <section
          className="flex flex-col h-screen w-full items-center"
          id={SectionIds.Landing}
        >
          <div className="flex h-1/2 flex-col justify-center">
            <div className="pb-4 border-solid border-b-4 border-black">
              <p className="text-lg md:text-xl xl:text-2xl tracking-wide">
                Hi,
              </p>
              <h1 className="text-lg md:text-xl xl:text-2xl  tracking-wide">
                I&apos;m <span className="tracking-widest">Andrew Kay</span>,
              </h1>
              <h2 className="text-2xl md:text-4xl xl:text-5xl tracking-wide font-bold">
                a Software Developer
              </h2>
            </div>
          </div>
          <div className="flex flex-col h-1/2 w-full justify-center items-center">
            <a role="button" className="" href={`#${SectionIds.Projects}`}>
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
        <div className="min-h-screen flex flex-col">
          <section
            className="flex flex-col h-screen md:h-fit md:mb-10 w-full items-center px-6"
            id={SectionIds.Projects}
          >
            <div className="flex h-8 w-full mb-4 items-center">
              <div className="h-1 w-8 bg-black" />
              <h2 className="flex ml-2 font-bold text-xs items-center">
                PROJECTS
              </h2>
            </div>
            {projectData.map((data) => {
              return (
                <ProjectCard
                  key={data.title}
                  name={data.title}
                  detail={data.excerpt}
                />
              );
            })}
          </section>
          <section
            className="flex flex-col h-screen md:h-fit md:flex-1 w-full items-center"
            id={SectionIds.AboutMe}
          >
            <div className="flex h-8 w-full mb-4 px-6 items-center">
              <div className="h-1 w-8 bg-black" />
              <h2 className="flex ml-2 font-bold text-xs items-center">
                ABOUT ME
              </h2>
            </div>
            <div className="px-6">
              <p className="mb-4">
                I am a software developer with a passion for technology and
                innovation. I currently work at{" "}
                <Link
                  href="https://answerdigital.com/"
                  className="underline font-semibold"
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
                development, composing music, and tinkering with various
                projects. I find that these hobbies not only allow me to relax
                and unwind, but also give me the opportunity to constantly learn
                new things and improve my skills.
              </p>
              <p>
                I am a results-driven individual who is dedicated to delivering
                high-quality work and am always looking for ways to improve and
                evolve my craft. I believe in the power of technology to change
                the world for the better and am excited to be a part of this
                ever-evolving industry.
              </p>
            </div>
            <div className="flex-1 flex items-end w-full">
              <Footer />
            </div>
          </section>
        </div>
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
