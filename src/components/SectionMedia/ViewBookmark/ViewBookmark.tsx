"use client";
import { getImageURL, getStars, getYear } from "@/utils/helpers";

import { Bookmark } from "@/utils/types";
import ButtonBookmark from "@/components/Buttons/ButtonBookmark";
import ButtonWatchNow from "@/components/Buttons/ButtonWatchNow";
import noImage from "../../../../public/assets/no-image.webp";
import { WrapperComponent } from "../ViewMedia/ViewWrapper";
import ImageWithLoader from "../ViewMedia/ImageWIthLoader";
import { Suspense, useContext } from "react";
import { UserContext } from "@/components/Providers/UserProvider/UserProvider";

type props = {
  media: Bookmark;
  sizeImages?: number;
  showDetails: boolean;
};

const isLargeTitle = (title: string) => title.length > 20;

const ViewBookmark = ({ media, sizeImages = 200, showDetails }: props) => {
  const { userData } = useContext(UserContext);
  const mediaName = media.title;
  const mediaType = media.name == "movie" ? "movie" : "tv";
  // If use : or = to separate need to change the getId and getMediaType in MediaDetails
  const URL = `/${mediaType}=${media.mediaId}`;

  return userData.bookmarks.has(media.mediaId) ? (
    <WrapperComponent URL={URL} customHeight={sizeImages}>
      <div className="flex flex-col relative w-full h-full lg:preserve-3d lg:group-hover:my-rotate-y-180 lg:duration-1000">
        <header
          className={`h-[250px] relative lg:backface-hidden lg:absolute w-full lg:h-full`}
        >
          <ImageWithLoader
            src={
              media.imageUrl ? getImageURL(media.imageUrl, sizeImages) : noImage
            }
            alt=""
          />
        </header>

        <footer className="flex flex-col gap-1 w-full lg:gap-2 lg:bottom-0 lg:items-center lg:px-2 lg:pt-4 lg:my-rotate-y-180 lg:absolute lg:top-0 lg:rounded-xl lg:backface-hidden lg:h-full lg:border lg:border-grayish-blue lg:w-full lg:bg-semi-dark-blue lg:overflow-hidden">
          <ul
            className={
              "text-xs mt-1 lg:mt-0 flex text-grayish-blue self-center lg:self-start " +
              (mediaType === "tv" ? "gap-1" : "gap-2")
            }
          >
            {showDetails && (
              <li>{mediaType === "tv" ? "Tv Series" : "Movie"}</li>
            )}
            <li>{getYear(media.dateReleased ?? "")}</li>
            <li>{getStars(media.voteAverage ?? 1)}</li>
          </ul>
          <p className="text-center">{mediaName}</p>
          <p
            className={
              "hidden lg:block lg:text-sm lg:p-1  lg:overflow-x-auto " +
              (isLargeTitle(mediaName ?? "") ? "lg:h-1/2" : "lg:h-[65%]")
            }
          >
            {media?.overview && media.overview.length > 0
              ? media.overview!
              : "We couldn't retrieve an overview but you can watch it and discover it"}
          </p>
          <ButtonBookmark media={media} />
          <ButtonWatchNow linkTo={URL} />
        </footer>
      </div>
    </WrapperComponent>
  ) : null;
};

export default ViewBookmark;
