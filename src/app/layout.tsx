import "./globals.css";
import Nav from "@/components/Nav";
import { Outfit } from "next/font/google";
import UserProvider from "@/components/Providers/UserProvider";
import Link from "next/link";
import Image from "next/image";
import atributtionIMG from "../../public/assets/TMDBattribution.svg";

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
          " bg-dark-blue relative mt-20 sm:mt-24 lg:mt-0 lg:ml-32"
        }
      >
        <Nav />
        <UserProvider>{children}</UserProvider>
        <footer className="text-white mt-20 mb-10 w-full h-10 relative">
          <Link href={"https://www.themoviedb.org/"}>
            <Image src={atributtionIMG} alt="" fill />
          </Link>
        </footer>
      </body>
    </html>
  );
}
