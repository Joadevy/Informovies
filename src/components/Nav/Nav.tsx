import Image from "next/image";
import Link from "next/link";
import IconNavBookmarks from "../Icons/IconNavBookmarks";
import IconNavHome from "../Icons/IconNavHome";
import IconNavMovies from "../Icons/IconNavMovies";
import IconNavSeries from "../Icons/IconNavSeries";

const NAV_ICONS = {
  home: (
    <Link href="/">
      <IconNavHome />
    </Link>
  ),
  movies: (
    <Link href="/movies">
      <IconNavMovies />
    </Link>
  ),
  series: (
    <Link href="/series">
      <IconNavSeries />
    </Link>
  ),
  bookmarks: (
    <Link href="/bookmarks">
      <IconNavBookmarks />
    </Link>
  ),
};

const Nav = () => {
  return (
    <nav className="flex lg:flex-col lg:gap-10 lg:h-[85vh] lg:max-w-min items-center justify-between lg:justify-between rounded-lg p-6 bg-semi-dark-blue fixed z-50 top-0 right-0 left-0 sm:left-1/2 sm:top-[2vh] sm:-translate-x-1/2 lg:right-10 lg:top-1/2 lg:left-[1vw] lg:-translate-y-1/2 lg:-translate-x-0">
      <div className="w-7 h-7 relative">
        <Link href="/">
          <Image
            src={"./assets/logo.svg"}
            alt=""
            fill
            sizes="10vw"
            priority
          ></Image>
        </Link>
      </div>

      <ul className="flex lg:flex-col lg:-mt-48 gap-7 items-center justify-center">
        {Object.values(NAV_ICONS).map((icon, index) => (
          <li className="w-6 h-6 relative" key={index}>
            {icon}
          </li>
        ))}
      </ul>

      <div className="w-7 h-7 relative rounded-full border-white border-2">
        <Image
          src={"/assets/image-avatar.png"}
          alt=""
          fill
          sizes="10vw"
        ></Image>
      </div>
    </nav>
  );
};

export default Nav;
