import { getImageURL, getYear } from "@/utils/helpers";
import React from "react";
import Image from "next/image";

import Link from "next/link";
import { IMedia, Movie, TVSeries } from "@/utils/types";
import ButtonBookmark from "@/components/Buttons/ButtonBookmark";
import LiMediaType from "./LiMediaType";
import LiReleaseDate from "./LiReleaseDate";

type props = {
  media: IMedia;
  sizeImages?: number;
};

const ViewMedia = ({ media, sizeImages = 200 }: props) => {
  return (
    <div
      // href={`/${media.id}`}
      className={` flex-grow flex flex-col flex-wrap relative`}
    >
      <ButtonBookmark media={media} />
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
          <LiMediaType media={media} />
          <LiReleaseDate media={media} />
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
