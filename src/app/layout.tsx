import "./globals.css";
import Nav from "@/components/Nav";
import { Outfit } from "next/font/google";
import UserProvider from "@/components/Providers/UserProvider";
import Link from "next/link";
import Image from "next/image";
import atributtionIMG from "../../public/assets/TMDBattribution.svg";
import { NextAuthProvider } from "@/components/Providers/NextAuthProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Informovies",
  description: "Find information about all your favorite movies and tv shows!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          outfit.className +
          " bg-dark-blue relative pt-20 sm:pt-24 lg:pt-0 lg:pl-32"
        }
      >
        <NextAuthProvider>
          <Nav />
          <UserProvider>{children}</UserProvider>
          <footer className="text-white mt-20 mb-10 w-full h-10 relative">
            <Link
              href={"https://www.themoviedb.org/"}
              aria-label="The Movie Database page"
            >
              <Image src={atributtionIMG} alt="" fill />
            </Link>
          </footer>
        </NextAuthProvider>
      </body>
    </html>
  );
}
