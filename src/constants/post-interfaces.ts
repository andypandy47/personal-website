export interface IPostMetaData {
  slug: string;
  title: string;
  date: string;
  lastUpdated: string;
  postType: string;
  author: string;
  excerpt: string;
  enabled: boolean;
  technologies: string;
  githubLink: string;
  websiteLink: string;
}

export interface IPost {
  metaData: IPostMetaData;
  content: string;
}
