"use client";

import Link from "next/link";
import { Genre } from "./GenreBar";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Props = {
  genres: Genre[];
};

const GenreBarClient = ({ genres }: Props) => {
  const router = usePathname();
  const [showOptions, toggleShowOptions] = useState(false);

  return (
    <>
      <input
        className="w-full pr-10 pl-2 py-3 rounded-lg bg-semi-dark-blue border border-grayish-blue text-white-dust outline-none focus:border-white-dust hover:cursor-pointer hover:opacity-70 transition-opacity"
        type="button"
        onClick={() => toggleShowOptions(!showOptions)}
        value="Genre"
      />
      <ul
        className={
          showOptions
            ? `absolute flex flex-col gap-2 top-0 left-0 mt-12 w-[150px] bg-semi-dark-blue border border-white-dust shadow-lg rounded-lg p-2 transition-all duration-500 z-50 visible opacity-100 overflow-y-scroll max-h-72`
            : "invisible opacity-0"
        }
      >
        {showOptions
          ? genres.map((genre) => (
              <li
                key={genre.id}
                className="w-fit hover:opacity-70 transition-opacity"
              >
                <Link
                  key={genre.id}
                  className=""
                  href={`${router}/${genre.name}`}
                >
                  <p className="w-full text-white-smoke">{genre.name}</p>
                </Link>
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

export default GenreBarClient;
