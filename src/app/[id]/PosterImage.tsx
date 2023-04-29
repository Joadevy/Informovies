"use client";
import { getImageURL } from "@/utils/helpers";
import { MovieDetails, TvDetails } from "@/utils/types";
import Image from "next/image";
import noImageAvalailable from "../../../public/assets/no-image.webp";
import { useEffect, useState } from "react";

type Props = {
  Details: MovieDetails | TvDetails;
};

const PosterImage = ({ Details }: Props) => {
  const [isDesktop, setIsDesktop] = useState(false);

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
      src={
        isDesktop
          ? Details.poster_path
            ? getImageURL(Details.poster_path, 500)
            : noImageAvalailable
          : Details.backdrop_path
          ? getImageURL(Details.backdrop_path, 500)
          : noImageAvalailable
      }
      sizes={isDesktop ? `25vw` : "75vw"}
      fill
      alt=""
    />
  );
};

export default PosterImage;
