import { getImageURL } from "@/utils/helpers";
import { MovieResult, TVResult } from "@/utils/types";
import Link from "next/link";
import noImageAvalailable from "../../../public/assets/no-image.webp";
import Image from "next/image";
import ImageWithLoader from "./ImageWithLoader";

type Props = {
  result: MovieResult | TVResult;
};

const cropTitle = (title: string) => {
  if (title.length > 75) return title.slice(0, 75) + "...";
  return title;
};

const SearchResult = ({ result }: Props) => {
  const type = "media_type" in result ? result.media_type : "movie";
  return (
    <li
      className="text-white-smoke bg-dark-blue p-4 rounded-lg relative"
      key={result.id}
    >
      <Link
        className="flex justify-around items-center h-14 relative"
        href={`${result.media_type}=${result.id}`}
      >
        <p className="w-7/12 text-base">
          {"name" in result
            ? cropTitle(result.name!)
            : "title" in result
            ? cropTitle(result.title!)
            : ""}
        </p>
        <div className="w-16 h-16 rounded-md overflow-hidden absolute right-0">
          <ImageWithLoader
            src={
              result.poster_path
                ? getImageURL(result.poster_path, 200)
                : noImageAvalailable
            }
            alt=""
          />
        </div>
      </Link>
    </li>
  );
};

export default SearchResult;
