"use client";

import { getApiURL } from "@/utils/helpers";
import { MovieResult, TVResult } from "@/utils/types";
import { useEffect, useRef, useState, useCallback } from "react";
import SearchResult from "./SearchResult";
import Image from "next/image";
import searchImg from "../../../public/assets/lupa.png";

export const SearchBar = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const [close, toggleClose] = useState(false);
  const [results, setResults] = useState<(MovieResult | TVResult)[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const searchControllerRef = useRef<null | AbortController>(null);

  useEffect(() => {
    handleSearch();
  }, [searchQuery]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    searchControllerRef.current = new AbortController();
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (refContainer.current?.contains(e.target as HTMLElement)) return;
      toggleClose(true);
    };

    document.addEventListener("click", handler);

    return () => document.removeEventListener("click", handler);
  }, []);

  const searchMedia = async (query: string) => {
    const data = await fetch(getApiURL("search/multi", `&query=${query}`), {
      signal: searchControllerRef.current!.signal,
    }).then((res) => res.json());

    return { data };
  };

  const handleSearch = useCallback(async () => {
    if (searchQuery.length < 1) return;

    if (searchControllerRef.current) {
      searchControllerRef.current.abort();
      searchControllerRef.current = new AbortController();
    }

    try {
      const { data } = await searchMedia(searchQuery);
      setResults(
        data.results
          .slice(0, 15)
          .filter((result: MovieResult | TVResult) => "poster_path" in result)
      );
    } catch (error: any) {
      if (error.name === "AbortError") return;
    }
  }, [searchQuery]);

  return (
    <>
      <div className="relative" ref={refContainer}>
        <input
          className="w-full pl-8 p-3 rounded-lg bg-semi-dark-blue border border-grayish-blue text-white-smoke outline-none focus:border-white-dust"
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          onClick={() => {
            if (close) toggleClose(false);
          }}
          placeholder="Search for any movies or tv shows..."
        />
        <div className="w-5 h-5 absolute top-3 left-2">
          <Image src={searchImg} alt="" fill sizes="5vw"></Image>
        </div>
      </div>
      <ul
        className={
          !close && results.length > 0 && searchQuery
            ? `absolute flex flex-col gap-2 top-0 left-0 mt-12 w-full bg-semi-dark-blue border border-white-dust shadow-lg rounded-lg p-1 transition-all duration-500 z-50 visible opacity-100 overflow-y-scroll max-h-72`
            : "invisible"
        }
      >
        {results.length > 0 && searchQuery && !close
          ? results.map((result) => (
              <SearchResult key={result.id} result={result} />
            ))
          : null}
      </ul>
    </>
  );
};
