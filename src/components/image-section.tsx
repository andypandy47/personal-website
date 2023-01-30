import React from "react";
import Image from "next/image";

interface IImageSectionProps {
  src: string;
  width: number;
  height: number;
  description: string;
  alt: string;
}

const ImageSection = ({
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

export default ImageSection;
