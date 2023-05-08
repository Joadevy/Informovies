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
      <button
        className="flex gap-1 items-center justify-between w-[100px] p-2 py-3 rounded-lg bg-semi-dark-blue border border-grayish-blue text-white-dust outline-none focus:border-white-dust hover:cursor-pointer hover:opacity-70 transition-opacity"
        onClick={() => toggleShowOptions(!showOptions)}
      >
        <p>Genre</p>
        {/* <div className="border"> */}
        <svg viewBox="0 0 10 6" className="w-3 h-4 mt-1">
          <polygon points="0,0 10,0 5,6" fill="#8C8C8C" />
        </svg>
        {/* </div> */}
      </button>
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
