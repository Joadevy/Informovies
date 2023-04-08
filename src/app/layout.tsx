import "./globals.css";
import Nav from "@/components/Nav";
import { Outfit } from "next/font/google";
import UserProvider from "@/components/Providers/UserProvider";
import SearchBar from "@/components/SearchBar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "movies app",
  description: "Find all your movies and get information abut them!",
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
      </body>
    </html>
  );
}
