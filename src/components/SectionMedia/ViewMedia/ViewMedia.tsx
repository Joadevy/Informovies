import { getImageURL } from "@/utils/helpers";
import React from "react";
import Image from "next/image";

import Link from "next/link";
import { IMedia } from "@/utils/types";
import ButtonBookmark from "@/components/Buttons/ButtonBookmark";
import LiMediaType from "./LiMediaType";
import LiReleaseDate from "./LiReleaseDate";
import ButtonWatchNow from "@/components/Buttons/ButtonWatchNow";

type props = {
  media: IMedia;
  sizeImages?: number;
};

const isLargeTitle = (title: string) => title.length > 20;

const ViewMedia = ({ media, sizeImages = 200 }: props) => {
  const slug = `/${media.id}`;
  const mediaName = media.title ?? media.name;
  return (
    // <div
    //   // No puede ser link porque tiene conflicto con el bookmark
    //   // href={slug}
    //   className={`relative rounded-xl shadow-xl flex-grow flex flex-col flex-wrap lg:bg-transparent group perspective `}
    // >
    //   <div className="lg:preserve-3d lg:group-hover:hover:my-rotate-y-180 lg:duration-1000 lg:w-full lg:h-full border">
    //     <header className={`h-[250px] lg:h-[${sizeImages}px] w-full relative `}>
    //       <Image
    //         className="rounded-t-xl lg:rounded-xl lg:backface-hidden"
    //         src={getImageURL(media.poster_path, sizeImages)}
    //         sizes={`25vw`}
    //         fill
    //         alt=""
    //       />
    //     </header>
    //     <footer className="flex flex-col lg:items-center lg:px-2 pt-2 lg:pt-10 lg:my-rotate-y-180 lg:absolute lg:top-0 lg:rounded-xl lg:backface-hidden lg:h-full lg:border lg:border-grayish-blue lg:w-full lg:bg-semi-dark-blue lg:overflow-hidden">
    //       <ul className=" text-xs flex gap-2 text-grayish-blue">
    //         <LiMediaType media={media} />
    //         <LiReleaseDate media={media} />
    //         <li>
    //           {"★".repeat(Math.round(media.vote_average / 2)).padEnd(5, "☆")}
    //         </li>
    //       </ul>
    //       <p className="lg:text-center">{media.title ?? media.name}</p>
    //       <ButtonBookmark media={media} />
    //       <ButtonWatchNow linkTo={slug} />
    //     </footer>
    //   </div>
    // </div>

    <div
      // href={slug}
      className={`w-full h-[325px] lg:h-[${sizeImages}px] cursor-pointer group perspective bg-semi-dark-blue lg:bg-transparent shadow rounded-t-xl rounded-b-lg`}
    >
      <div className="flex flex-col relative w-full h-full lg:preserve-3d lg:group-hover:my-rotate-y-180 lg:duration-1000">
        <header
          className={`h-[250px] relative lg:backface-hidden lg:absolute w-full lg:h-full`}
        >
          <Image
            className="rounded-t-xl lg:rounded-xl lg:backface-hidden"
            src={getImageURL(media.poster_path, sizeImages)}
            sizes={`50vw`}
            fill
            alt=""
          />
        </header>
        <footer className="flex flex-col gap-1 w-full lg:gap-2 lg:bottom-0 lg:items-center lg:px-2 lg:pt-4 lg:my-rotate-y-180 lg:absolute lg:top-0 lg:rounded-xl lg:backface-hidden lg:h-full lg:border lg:border-grayish-blue lg:w-full lg:bg-semi-dark-blue lg:overflow-hidden">
          <ul className="text-xs mt-1 lg:mt-0 flex gap-2 text-grayish-blue self-center lg:self-start">
            <LiMediaType media={media} />
            <LiReleaseDate media={media} />
            <li>
              {"★".repeat(Math.round(media.vote_average / 2)).padEnd(5, "☆")}
            </li>
          </ul>
          <p className="text-center">{mediaName}</p>
          <p
            className={
              "hidden lg:block lg:text-sm lg:p-1  lg:overflow-x-auto " +
              (isLargeTitle(mediaName) ? "lg:h-1/2" : "lg:h-[65%]")
            }
          >
            {media.overview}
          </p>
          <ButtonBookmark media={media} />
          <ButtonWatchNow linkTo={slug} />
        </footer>
      </div>
    </div>
  );
};

export default ViewMedia;
