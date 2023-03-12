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
      className={`rounded-xl shadow-xl flex-grow flex flex-col flex-wrap bg-transparent group perspective`}
    >
      <div className="preserve-3d group-hover:hover:my-rotate-y-180 duration-1000">
        <div>
          <header
            className={`h-[250px] lg:h-[${sizeImages}px] w-full relative `}
          >
            <Image
              className="rounded-xl  backface-hidden"
              src={getImageURL(media.poster_path, sizeImages)}
              sizes={`25vw`}
              fill
              alt=""
            />
          </header>
        </div>
        <footer className="flex flex-col items-center px-2 pt-10 my-rotate-y-180 absolute top-0 rounded-xl backface-hidden h-full border border-grayish-blue w-full bg-semi-dark-blue overflow-hidden">
          <ul className=" text-xs flex gap-2 text-grayish-blue">
            <LiMediaType media={media} />
            <LiReleaseDate media={media} />
            <li>
              {"★".repeat(Math.round(media.vote_average / 2)).padEnd(5, "☆")}
            </li>
          </ul>
          <p>{media.title ?? media.name}</p>
          <ButtonBookmark media={media} />
        </footer>
      </div>
    </div>
  );
};

export default ViewMedia;
