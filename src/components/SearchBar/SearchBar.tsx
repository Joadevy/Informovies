"use client";

import { getApiURL } from "@/utils/helpers";
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
        className="w-full p-2 rounded-lg bg-semi-dark-blue border border-grayish-blue text-white-smoke"
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for any movies or tv shows..."
      />
      <ul className="">
        {
          results.length > 0 && searchQuery
            ? results.slice(0, 10).map((result: any) => (
                <li className="text-white-smoke" key={result.id}>
                  <Link href={`${result.media_type}=${result.id}`}>
                    {result.title || result.name}
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
