"use client";
import { getImageURL } from "@/utils/helpers";
import { MovieDetails, TvDetails } from "@/utils/types";
import Image from "next/image";
import noImage from "../../../../public/assets/no-image.webp";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

type Props = {
  media: TvDetails | MovieDetails;
  showDetails: boolean;
};

const SwipeCard = ({ media, showDetails }: Props) => {
  console.log(media);
  const mediaType = "first_air_date" in media ? "tv" : "movie";
  return (
    <Link
      href={`/${mediaType}=${media.id}`}
      className="text-white h-52 flex flex-col relative"
    >
      <Suspense fallback={<Loading />}>
        <Image
          className="rounded-t-xl lg:rounded-xl lg:backface-hidden"
          src={
            media.backdrop_path
              ? getImageURL(media.backdrop_path, 500)
              : noImage
          }
          sizes={`50vw`}
          fill
          alt=""
        />
      </Suspense>
      <div className="absolute bottom-0 p-2 rounded-tr-md bg-dark-blue bg-opacity-50">
        {showDetails && (
          <header className="text-sm">
            <ul>
              <li>{mediaType}</li>
              <li>{""}</li>
            </ul>
          </header>
        )}
        <h3 className="font-bold">
          {"title" in media ? media.title : media.name}
        </h3>
      </div>
    </Link>
  );
};

export default SwipeCard;
