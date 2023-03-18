"use client";
import { usePathname } from "next/navigation";
import MediaDetail from "./MediaDetail";

const getId = (pathname: String) => {
  const id = pathname.match(/\d+/)?.[0];
  if (id) return +id;
  throw new Error(
    "Error obtaining the id of the media content, please contact dev team"
  );
};

export default function Media() {
  const path = usePathname();
  /* @ts-expect-error Server Component */
  return <MediaDetail idMedia={getId(path)} />;
}
