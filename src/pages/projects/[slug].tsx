import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { GetStaticPropsContext } from "next/types";
import { getAllPostSlugs, getPost } from "services/post-service";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { IPostMetaData } from "constants/post-interfaces";
import ProjectHeading from "components/projects/project-heading";
import ImageSection from "components/image-section";
import Layout from "components/layout";

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
      <Layout
        title={metaData.title}
        description={"Description of a project I've worked on"}
        url={`https://www.andrew-kay.com/projects/${metaData.title.toLowerCase()}`}
      >
        <ProjectHeading
          title={metaData.title}
          technologies={metaData.technologies}
          githubLink={metaData.githubLink}
          websiteLink={metaData.websiteLink}
        />
        <article className="flex-1 px-6 pb-10 my-4 text-sm lg:pb-12">
          <MDXRemote {...mdxSource} components={components} />
        </article>
      </Layout>
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
