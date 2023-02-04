import React from "react";
import Image from "next/image";

interface IImageSectionProps {
  src: string;
  width: number;
  height: number;
  description: string;
  alt: string;
  className?: string;
}

const ImageSection = ({
  src,
  width,
  height,
  description,
  alt,
  className = "",
}: IImageSectionProps) => {
  return (
    <div className="flex flex-col items-center justify-center my-4 md:my-6 lg:my-8">
      <Image
        width={width}
        height={height}
        src={src}
        alt={alt}
        className={`m-auto ${className}`}
      />
      <p className="text-xs italic font-thin dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default ImageSection;
