import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { IPost, IPostMetaData } from "constants/post-interfaces";

//Finding directory named "posts" from the current working directory of Node.
const postDirectory = path.join(process.cwd(), "src", "posts");

/**
 * @param subDirectory - "blog" or "project"
 * @returns - array containing all post metadata within the specified subdirectory
 */
export const getAllPostsMetaData = (subDirectory: string) => {
  //Reads all the files in the post directory
  const fileNames = fs.readdirSync(path.join(postDirectory, subDirectory));

  const allPostsData: IPostMetaData[] = fileNames.flatMap((filename) => {
    const slug = filename.replace(".mdx", "");

    const fullPath = path.join(postDirectory, subDirectory, filename);
    //Extracts contents of the MDX file
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    if (!data.enabled) {
      return [];
    }

    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    const formattedDate = new Date(data.date).toLocaleDateString(
      "en-IN",
      options
    );
    const formattedLastUpdated = new Date(data.lastUpdated).toLocaleDateString(
      "en-IN",
      options
    );

    const frontmatter = {
      ...data,
      date: formattedDate,
      lastUpdated: formattedLastUpdated,
    };

    return {
      slug,
      ...frontmatter,
    } as IPostMetaData;
  });

  return allPostsData;
};

export const getAllPostSlugs = (subDirectory: string) => {
  const fileNames = fs.readdirSync(path.join(postDirectory, subDirectory));

  return fileNames.map((fileName: string) => {
    return {
      params: {
        slug: fileName.replace(".mdx", ""),
      },
    };
  });
};

export const getPost = (slug: string, subDirectory: string) => {
  const postPath = path.join(subDirectory, `${slug}.mdx`);
  const fullPath = path.join(postDirectory, postPath);

  const post = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(post);

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = new Date(data.date).toLocaleDateString(
    "en-IN",
    options
  );
  const formattedLastUpdated = new Date(data.lastUpdated).toLocaleDateString(
    "en-IN",
    options
  );

  const frontmatter = {
    ...data,
    date: formattedDate,
    lastUpdated: formattedLastUpdated,
  } as IPostMetaData;

  return {
    content,
    metaData: frontmatter,
  } as IPost;
};
