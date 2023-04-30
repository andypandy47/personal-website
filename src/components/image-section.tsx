import React from "react";
import Image from "next/image";
import darkImagePlaceholder from "/public/image_placeholder_dark.png";

interface IImageSectionProps {
  src: string;
  width: number;
  height: number;
  description: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

const ImageSection = ({
  src,
  width,
  height,
  description,
  alt,
  priority = false,
  className = "",
}: IImageSectionProps) => {
  return (
    <div className="flex flex-col items-center justify-center my-4 md:my-6 lg:my-8">
      <Image
        width={width}
        height={height}
        src={src}
        alt={alt}
        priority={priority}
        className={`m-auto rounded ${className}`}
        placeholder="blur"
        blurDataURL={darkImagePlaceholder.blurDataURL}
      />
      <p className="text-xs italic font-thin dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default ImageSection;
