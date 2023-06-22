import { getImageURL } from "@/utils/helpers";
import { MovieDetails, TvDetails } from "@/utils/types";
import noImage from "../../../../public/assets/no-image.webp";
import Link from "next/link";

import ImageWithLoader from "./ImageWithLoader";

type Props = {
  media: TvDetails | MovieDetails;
  showMediaType: boolean;
  number: number;
};

const TopSwipeCard = ({ media, number }: Props) => {
  const mediaType = "first_air_date" in media ? "tv" : "movie";
  return (
    <Link
      href={`/${mediaType}=${media.id}`}
      className="text-white  h-48 flex relative rounded-lg overflow-hidden hover:opacity-70 transition-opacity "
    >
      <div
        className={
          " text-white-smoke font-bold text-[150px] w-4/12 h-full flex items-center justify-center z-50 " +
          (number >= 10 ? "ml-6" : "")
        }
      >
        <p className="ml-8">{number}</p>
      </div>
      <div className="w-8/12 lg:w-7/12 h-full relative self-end">
        <ImageWithLoader
          src={
            media.poster_path ? getImageURL(media.poster_path, 300) : noImage
          }
          alt=""
        />
      </div>
    </Link>
  );
};

export default TopSwipeCard;
