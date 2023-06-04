"use client";
import { getImageURL } from "@/utils/helpers";
import Image from "next/image";
import noImageAvalailable from "../../../../public/assets/no-image.webp";
import { useEffect, useState } from "react";

type Props = {
  url: string;
};

const PersonImage = ({ url }: Props) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 960);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 960);
    };

    // Add the resize when the component is mounted
    window.addEventListener("resize", handleResize);

    // Remove the resize when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Image
      className=" rounded-t-xl lg:rounded-xl lg:backface-hidden"
      src={url ? getImageURL(url, 500) : noImageAvalailable}
      sizes={isDesktop ? `25vw` : "85vw"}
      fill
      alt=""
    />
  );
};

export default PersonImage;
