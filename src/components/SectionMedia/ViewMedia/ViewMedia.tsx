import { getImageURL } from "@/utils/helpers";
import React from "react";
import Image from "next/image";

import Link from "next/link";
import { IMedia, Movie, TVSeries } from "@/utils/types";

const getYear = (date: string) => {
  console.log(date);
  return new Date(date).getFullYear();
};

type props = {
  media: IMedia;
  sizeImages?: number;
};

const ViewMedia = ({ media, sizeImages = 200 }: props) => {
  console.log(media);
  return (
    <div
      // href={`/${media.id}`}
      className={` flex-grow flex flex-col flex-wrap`}
    >
      <header className={`h-[250px] lg:h-[${sizeImages}px] w-full relative`}>
        <Image
          className="rounded-xl"
          src={getImageURL(media.poster_path, sizeImages)}
          sizes={`25vw`}
          fill
          alt=""
        />
      </header>
      <footer className="pb-4 pt-2">
        <ul className=" text-xs flex gap-2 text-grayish-blue">
          <li>{media.media_type === "tv" ? "Tv Series" : "Movie"}</li>
          <li>
            {getYear(
              media.media_type === "tv"
                ? media.first_air_date
                : media.release_date
            )}
          </li>
          <li>
            {"★".repeat(Math.round(media.vote_average / 2)).padEnd(5, "☆")}
          </li>
        </ul>
        <p>{media.title ?? media.name}</p>
      </footer>
    </div>
  );
};

export default ViewMedia;
