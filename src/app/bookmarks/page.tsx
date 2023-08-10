import ClientBookmarks from "./ClientBookmarks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookmarks —Informovies",
  description: "The favorite tv shows and movies in one place",
};

export default function Bookmarks() {
  return <ClientBookmarks></ClientBookmarks>;
}
