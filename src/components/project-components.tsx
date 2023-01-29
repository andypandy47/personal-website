import Image from "next/image";
import React from "react";
import IconLinks from "./icon-links";

interface IHeadingHeadingProps {
  title: string;
  githubLink: string;
  websiteLink: string;
  technologies: string;
}

export const Heading = ({
  title,
  githubLink,
  websiteLink,
  technologies,
}: IHeadingHeadingProps) => {
  console.log(githubLink);

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold mb-1 tracking-wide uppercase mx-6">
        {title}
      </h1>
      <div className="flex items-center border-solid border-b-4 pb-2 mx-6 border-black justify-between">
        <p className="text-xs font-light">{technologies}</p>
        <div className="flex">
          <IconLinks.Github
            link={githubLink}
            fill="black"
            className="h-4 w-4 mr-3"
          />
          <IconLinks.External link={websiteLink} className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

interface IImageSectionProps {
  src: string;
  width: number;
  height: number;
  description: string;
  alt: string;
}

export const ImageSection = ({
  src,
  width,
  height,
  description,
  alt,
}: IImageSectionProps) => {
  return (
    <div className="flex flex-col justify-center items-center mb-4">
      <Image
        width={width}
        height={height}
        src={src}
        alt={alt}
        className="m-auto"
      />
      <p className="font-extralight text-xs">{description}</p>
    </div>
  );
};
