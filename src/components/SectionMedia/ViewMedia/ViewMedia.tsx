import { getImageURL, getStars } from "@/utils/helpers";

import { MovieDetails, TvDetails } from "@/utils/types";
import ButtonBookmark from "@/components/Buttons/ButtonBookmark";
import LiReleaseDate from "./LiReleaseDate";
import ButtonWatchNow from "@/components/Buttons/ButtonWatchNow";
import { WrapperComponent } from "./ViewWrapper";
import noImage from "../../../../public/assets/no-image.webp";
import ImageWithLoader from "./ImageWIthLoader";

type props = {
  media: MovieDetails | TvDetails;
  sizeImages?: number;
  showDetails: boolean;
};

export const getMediaType = (media: props["media"]) =>
  "first_air_date" in media ? "tv" : "movie";

const isLargeTitle = (title: string) => title.length > 20;

const ViewMedia = ({ media, sizeImages = 200, showDetails }: props) => {
  const mediaName = "title" in media ? media.title : media.name;
  const mediaType = getMediaType(media);
  // If use : or = to separate need to change the getId and getMediaType in MediaDetails
  const URL = `/${mediaType}=${media.id}`;

  return (
    <WrapperComponent URL={URL} customHeight={sizeImages}>
      <div className="flex flex-col relative w-full h-full lg:preserve-3d lg:group-hover:my-rotate-y-180 lg:duration-1000">
        <header
          className={`h-[250px] relative lg:backface-hidden lg:absolute w-full lg:h-full`}
        >
          <ImageWithLoader
            src={
              media.poster_path
                ? getImageURL(media.poster_path, sizeImages)
                : noImage
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
            <LiReleaseDate media={media} />
            <li>{getStars(media.vote_average)}</li>
          </ul>
          <p className="text-center">{mediaName}</p>
          <p
            className={
              "hidden lg:block lg:text-sm lg:p-1  lg:overflow-x-auto " +
              (isLargeTitle(mediaName) ? "lg:h-1/2" : "lg:h-[65%]")
            }
          >
            {media.overview.length > 0
              ? media.overview
              : "We couldn't retrieve an overview but you can watch it and discover it"}
          </p>
          <ButtonBookmark
            media={{
              mediaId: media.id,
              title: "title" in media ? media.title : media.name,
              overview: media.overview,
              imageUrl: media.poster_path ?? media.backdrop_path,
              name: "title" in media ? "movie" : "tv series",
              voteAverage: media.vote_average,
              dateReleased:
                "title" in media ? media.release_date : media.first_air_date,
            }}
          />
          <ButtonWatchNow linkTo={URL} />
        </footer>
      </div>
    </WrapperComponent>
  );
};

export default ViewMedia;
