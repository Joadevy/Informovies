import { Genre } from "@/utils/types";
import Link from "next/link";

type Props = {
  genre: Genre;
  mediatype: string;
};

const LinkToGenre = ({ genre, mediatype }: Props) => {
  return (
    <li className="border border-grayish-blue text-grayish-blue rounded-lg bg-semi-dark-blue hover:opacity-70 transition-opacity">
      <Link className="" href={`${mediatype}/${genre.name}`}>
        <p className="px-2 py-1">{genre.name}</p>
      </Link>
    </li>
  );
};

export default LinkToGenre;
