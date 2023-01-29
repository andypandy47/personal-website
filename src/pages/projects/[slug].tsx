import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { GetStaticPropsContext } from "next/types";
import { getAllPostSlugs, getPost } from "services/post-service";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { IPostMetaData } from "constants/post-interfaces";
import Meta from "components/meta";
import { Heading, ImageSection } from "components/project-components";
import Header from "components/header";

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
      <main className="min-h-screen">
        <Header />
        <Heading
          title={metaData.title}
          technologies={metaData.technologies}
          githubLink={metaData.githubLink}
          websiteLink={metaData.websiteLink}
        />
        <MDXRemote {...mdxSource} components={components} />
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
