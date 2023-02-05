import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import React, { ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  url: string;
  openGraphType?: string;
}

const Layout = ({
  children,
  title,
  description,
  url,
  openGraphType = "website",
}: ILayoutProps) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        twitter={{
          handle: "@AudioPandy",
          site: url,
          cardType: "summary",
        }}
        openGraph={{
          type: openGraphType,
          locale: "en_GB",
          url,
          description,
          siteName: "Andrew Kay's Personal Website",
        }}
        canonical="https://www.andrew-kay.com"
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
          {
            rel: "icon",
            href: "/favicon-16x16.png",
            type: "image/png",
            sizes: "16x16",
          },
          {
            rel: "icon",
            href: "/favicon-32x32.png",
            type: "image/png",
            sizes: "32x32",
          },
          {
            rel: "apple-touch-icon",
            href: "/apple-touch-icon.png",
            sizes: "180x180",
          },
          {
            rel: "manifest",
            href: "/site.webmanifest",
          },
        ]}
      />
      <motion.main className="flex flex-col w-full min-h-screen m-auto text-black dark:text-white lg:w-3/4 xl:w-4/6 2xl:w-1/2 lg:pt-10">
        {children}
      </motion.main>
    </>
  );
};

export default Layout;
