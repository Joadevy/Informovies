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
      className={`relative rounded-xl shadow-xl flex-grow flex flex-col flex-wrap lg:bg-transparent group lg:perspective`}
    >
      <div className="lg:preserve-3d lg:group-hover:hover:my-rotate-y-180 lg:duration-1000">
        <div>
          <header
            className={`h-[250px] lg:h-[${sizeImages}px] w-full relative `}
          >
            <Image
              className="rounded-t-xl lg:rounded-xl lg:backface-hidden"
              src={getImageURL(media.poster_path, sizeImages)}
              sizes={`25vw`}
              fill
              alt=""
            />
          </header>
        </div>
        <footer className="flex flex-col lg:items-center lg:px-2 pt-2 lg:pt-10 lg:my-rotate-y-180 lg:absolute lg:top-0 lg:rounded-xl lg:backface-hidden lg:h-full lg:border lg:border-grayish-blue lg:w-full lg:bg-semi-dark-blue lg:overflow-hidden">
          <ul className=" text-xs flex gap-2 text-grayish-blue">
            <LiMediaType media={media} />
            <LiReleaseDate media={media} />
            <li>
              {"★".repeat(Math.round(media.vote_average / 2)).padEnd(5, "☆")}
            </li>
          </ul>
          <p className="lg:text-center">{media.title ?? media.name}</p>
          <ButtonBookmark media={media} />
        </footer>
      </div>
    </div>
  );
};

export default ViewMedia;
