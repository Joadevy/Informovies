"use client";

import Link from "next/link";
import { Genre } from "./GenreBar";
import { usePathname } from "next/navigation";

type Props = {
  genres: Genre[];
};

const GenreBarClient = ({ genres }: Props) => {
  const router = usePathname();
  return (
    <>
      {genres.map((genre) => (
        // <option
        //   key={genre.id}
        //   value={`/${genre.name}`}
        //   className="relative border bg-red"
        // >
        <Link
          key={genre.id}
          className="border text-white"
          href={`${router}/${genre.name}`}
        >
          {genre.name}
        </Link>
        // {/* </option> */}
      ))}
    </>
  );
};

export default GenreBarClient;
