"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Countdown from "@/components/Countdown";

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
    <div className=" min-h-screen text-white-smoke flex flex-col gap-2 items-center justify-center">
      <h2 className="text-xl">Oh no, something went wrong...</h2>
      <button
        onClick={
          // go home root page
          () => {
            route.push("/");
          }
        }
        className="bg-grayish-blue hover:opacity-50 text-white font-bold py-2 px-4 rounded transition-opacity"
      >
        Get me out of here!
      </button>
      <Countdown text="You will be automatically redirected in " />
    </div>
  );
}
