"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

export default function Error({ error }: { error: Error }) {
  const route = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
    // go back to home within 10 seconds
    const timeOut = setTimeout(() => {
      route.push("/");
    }, 5000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [error]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className=" min-h-screen text-white-smoke flex flex-col items-center justify-center">
      <h2>Oh no, something went wrong!</h2>
      <button
        onClick={
          // Attempt to go home root page
          () => {
            route.push("/");
          }
        }
      >
        Take me back to safe!
      </button>
    </div>
  );
}
