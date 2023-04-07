"use client";

import { getApiURL, getImageURL } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const SearchBar = () => {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    handleSearch();
  }, [searchQuery]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearch = async () => {
    if (searchQuery) {
      const response = await fetch(
        getApiURL("search/multi", `&query=${searchQuery}`)
      );
      const data = await response.json();
      console.log(data);
      setResults(data.results);
    }
  };

  return (
    <>
      <input
        className="w-full p-2 rounded-lg bg-semi-dark-blue border border-grayish-blue text-white-smoke outline-none focus:border-white-dust"
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for any movies or tv shows..."
      />
      <ul
        className={
          results.length > 0 && searchQuery
            ? `absolute flex flex-col gap-2 top-0 left-0 mt-12 w-full bg-semi-dark-blue border border-white-dust shadow-lg rounded-lg p-1 transition-all duration-500 z-50 visible opacity-100 overflow-y-scroll max-h-72`
            : "invisible opacity-0"
        }
      >
        {
          results.length > 0 && searchQuery
            ? results.slice(0, 15).map((result: any) => (
                <li
                  className="text-white-smoke bg-dark-blue p-4 rounded-lg relative"
                  key={result.id}
                >
                  <Link
                    className="flex justify-around items-center h-14 relative"
                    href={`${result.media_type}=${result.id}`}
                  >
                    {result.title || result.name}
                    <div className="w-16 h-16 rounded-md overflow-hidden absolute right-0">
                      <Image
                        src={getImageURL(result.poster_path, 200)}
                        alt=""
                        fill
                        sizes="5vw"
                      />
                    </div>
                  </Link>
                </li>
              ))
            : null
          //   <li className="text-white-smoke">No results found</li>
        }
      </ul>
    </>
  );
};
