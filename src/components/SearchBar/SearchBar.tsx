"use client";

import { getApiURL } from "@/utils/helpers";
import { MovieResult, TVResult } from "@/utils/types";
import { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import Image from "next/image";
import searchImg from "../../../public/assets/lupa.png";

export const SearchBar = () => {
  const [results, setResults] = useState<(MovieResult | TVResult)[]>([]);
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
      setResults(
        data.results
          .slice(0, 15)
          .filter((result: MovieResult | TVResult) => "poster_path" in result) // Get only the movie/tv not the cast or crew
      );
    }
  };

  return (
    <>
      <div className="relative">
        <input
          className="w-full pl-7 p-2 rounded-lg bg-semi-dark-blue border border-grayish-blue text-white-smoke outline-none focus:border-white-dust"
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for any movies or tv shows..."
        />
        <div className="w-5 h-5 absolute top-2 left-1">
          <Image src={searchImg} alt="" fill sizes="5vw"></Image>
        </div>
      </div>
      <ul
        className={
          results.length > 0 && searchQuery
            ? `absolute flex flex-col gap-2 top-0 left-0 mt-12 w-full bg-semi-dark-blue border border-white-dust shadow-lg rounded-lg p-1 transition-all duration-500 z-50 visible opacity-100 overflow-y-scroll max-h-72`
            : "invisible opacity-0"
        }
      >
        {
          results.length > 0 && searchQuery
            ? results.map((result) => (
                <SearchResult key={result.id} result={result} />
              ))
            : null
          //   <li className="text-white-smoke">No results found</li>
        }
      </ul>
    </>
  );
};
