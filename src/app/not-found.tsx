"use client";

import { useRouter } from "next/navigation";
import SearchBar from "@/components/SearchBar";

export default function NotFound() {
  const route = useRouter();

  return (
    <div className="min-h-screen text-white-smoke flex flex-col gap-2 items-center justify-center">
      <h2 className="text-xl">404 | This page could not be found.</h2>

      <h3>Maybe you would like to search for something else</h3>
      <div className="w-3/4 lg:w-4/12 relative">
        <SearchBar />
      </div>
      <button
        onClick={() => {
          route.push("/");
        }}
        className="bg-grayish-blue hover:opacity-50 text-white font-bold py-2 px-4 mt-5 rounded transition-opacity"
      >
        Get me to the home page!
      </button>
    </div>
  );
}
