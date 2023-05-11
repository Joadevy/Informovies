import { getImageURL, getStars, getYear } from "@/utils/helpers";
import { MovieDetails, TvDetails } from "@/utils/types";
import noImage from "../../../../public/assets/no-image.webp";
import Link from "next/link";

import ImageWithLoader from "./ImageWithLoader";

type Props = {
  media: TvDetails | MovieDetails;
  showMediaType: boolean;
};

const SwipeCard = ({ media, showMediaType }: Props) => {
  const mediaType = "first_air_date" in media ? "tv" : "movie";
  return (
    <Link
      href={`/${mediaType}=${media.id}`}
      className="text-white h-52 flex flex-col relative rounded-lg overflow-hidden"
    >
      <ImageWithLoader
        src={
          media.backdrop_path ? getImageURL(media.backdrop_path, 500) : noImage
        }
        alt=""
      />
      <div className="absolute bottom-0 p-2 rounded-tr-md bg-dark-blue bg-opacity-50">
        <header className="text-sm ">
          <ul className="flex gap-1">
            {[
              ...(showMediaType ? [mediaType] : []),
              "release_date" in media
                ? getYear(media.release_date) ?? ""
                : getYear(media.first_air_date) ?? "",
              getStars(media.vote_average),
            ].map((detail, index, arr) => (
              <li key={detail}>
                {detail}
                {index === arr.length - 1 ? "" : ` • `}
              </li>
            ))}
          </ul>
        </header>
        <h3 className="font-bold text-lg">
          {"title" in media ? media.title : media.name}
        </h3>
      </div>
    </Link>
  );
};

export default SwipeCard;
