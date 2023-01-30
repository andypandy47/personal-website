import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { GetStaticPropsContext } from "next/types";
import { getAllPostSlugs, getPost } from "services/post-service";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { IPostMetaData } from "constants/post-interfaces";
import Meta from "components/meta";
import ProjectHeading from "components/projects/project-heading";
import Header from "components/header";
import ImageSection from "components/image-section";
import Footer from "components/footer";

interface IProjectProps {
  mdxSource: MDXRemoteSerializeResult;
  metaData: IPostMetaData;
}

const components = { ImageSection };

const Project: NextPage<IProjectProps> = ({
  metaData,
  mdxSource,
}: IProjectProps) => {
  return (
    <>
      <Meta />
      <main className="flex flex-col min-h-screen w-full lg:w-3/4 xl:w-4/6 2xl:w-1/2 m-auto">
        <Header />
        <ProjectHeading
          title={metaData.title}
          technologies={metaData.technologies}
          githubLink={metaData.githubLink}
          websiteLink={metaData.websiteLink}
        />
        <article className="px-6 my-4 text-sm flex-1">
          <MDXRemote {...mdxSource} components={components} />
        </article>
        <Footer />
      </main>
    </>
  );
};

export default Project;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugs("project");

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const slug = context.params?.slug as string;
  const post = await getPost(slug, "project");

  const mdxSource = await serialize(post.content);

  return {
    props: {
      mdxSource,
      metaData: post.metaData,
    },
  };
};
