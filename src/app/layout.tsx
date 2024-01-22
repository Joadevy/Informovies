import "./globals.css";
import Nav from "@/components/Nav";
import { Outfit } from "next/font/google";
import UserProvider from "@/components/Providers/UserProvider";
import Link from "next/link";
import Image from "next/image";
import atributtionIMG from "../../public/assets/TMDBattribution.svg";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
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
          GeistSans.className +
          " bg-dark-blue relative pt-20 sm:pt-24 lg:pt-0 lg:pl-32"
        }
      >
        <NextAuthProvider>
          <div className="min-h-screen relative">
            <Nav />
            <UserProvider>{children}</UserProvider>
            <footer className="text-white mt-20 mb-10 h-10 absolute bottom-0  left-1/2 transform -translate-x-1/2 w-56">
              <Link
                href={"https://www.themoviedb.org/"}
                aria-label="The Movie Database page"
              >
                <Image src={atributtionIMG} alt="" fill />
              </Link>
            </footer>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
