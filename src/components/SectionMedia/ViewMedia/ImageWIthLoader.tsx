"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Loading from "./loading";

type Props = {
  src: string | StaticImageData;
  alt: string;
};

const ImageWithLoader = ({ src, alt }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loading />}
      <Image
        className="rounded-t-xl lg:rounded-xl lg:backface-hidden"
        src={src}
        sizes={`25vw`}
        fill
        alt=""
        onLoad={handleLoad}
      />
    </>
  );
};

export default ImageWithLoader;
