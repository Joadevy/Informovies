import Image from "next/image";
import Link from "next/link";
import IconNavBookmarks from "../Icons/IconNavBookmarks";
import IconNavHome from "../Icons/IconNavHome";
import IconNavMovies from "../Icons/IconNavMovies";
import IconNavSeries from "../Icons/IconNavSeries";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between sm:m-10 rounded-lg p-4 bg-semi-dark-blue">
      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 relative">
        <Link href="/">
          <Image src={"./assets/logo.svg"} alt="" fill sizes="10vw"></Image>
        </Link>
      </div>

      <ul className="flex gap-5 items-center justify-center">
        <li className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 relative">
          <Link href="/">
            <IconNavHome />
          </Link>
        </li>

        <li className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 relative">
          <Link href="/movies">
            <IconNavMovies />
          </Link>
        </li>

        <li className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 relative">
          <Link href="/series">
            <IconNavSeries />
          </Link>
        </li>

        <li className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 relative">
          <Link href="/bookmarks">
            <IconNavBookmarks />
          </Link>
        </li>
      </ul>

      <div className="w-10 h-10 sm:w-10 sm:h-10 lg:w-14 lg:h-14 relative rounded-full border-white border-2">
        <Image
          src={"/assets/image-avatar.png"}
          alt=""
          fill
          sizes="10vw"
          unoptimized
        ></Image>
      </div>
    </nav>
  );
};

export default Nav;
