import Image from "next/image";
import Link from "next/link";
import IconNavBookmarks from "../Icons/IconNavBookmarks";
import IconNavHome from "../Icons/IconNavHome";
import IconNavMovies from "../Icons/IconNavMovies";
import IconNavSeries from "../Icons/IconNavSeries";
import icon from "../../../public/assets/favicon.png";
import NavLink from "./NavLink";
import NavUserProfile from "./NavUserProfile";

const NAV_ICONS = {
  home: (
    <NavLink description="Home" href="/">
      <IconNavHome />
    </NavLink>
  ),
  movies: (
    <NavLink description="Movies" href="/movies">
      <IconNavMovies />
    </NavLink>
  ),
  series: (
    <NavLink description="Series" href="/series">
      <IconNavSeries />
    </NavLink>
  ),
  // Can't use the Link component because of the next-cache problems (bookmarks cache & don't refresh)
  bookmarks: (
    <a
      href={"/bookmarks"}
      className="flex flex-col gap-1 items-center justify-center"
      aria-label={"/bookmarks" + " page"}
    >
      <div className="w-6 h-6 relative">
        <IconNavBookmarks />
      </div>
      <p className="text-xs text-grayish-blue">{"Bookmarks"}</p>
    </a>
  ),
};

const Nav = () => {
  return (
    <nav className="flex lg:flex-col lg:gap-10 lg:h-[85vh] lg:max-w-min items-center justify-between lg:justify-between lg:rounded-lg p-5 lg:p-4 bg-semi-dark-blue fixed z-50 top-0 right-0 left-0 sm:left-1/2 sm:top-[2vh] sm:-translate-x-1/2 lg:right-10 lg:top-1/2 lg:left-[1vw] lg:-translate-y-1/2 lg:-translate-x-0">
      <div className="w-7 h-7 relative">
        <Link href="/" aria-label="Home page">
          <Image src={icon} alt="" fill sizes="10vw" priority></Image>
        </Link>
      </div>

      <ul className="flex lg:flex-col lg:-mt-40 gap-5 items-center justify-center">
        {Object.values(NAV_ICONS).map((icon, index) => (
          <li key={index}>{icon}</li>
        ))}
      </ul>

      {/* @ts-ignore */}
      <NavUserProfile />
    </nav>
  );
};

export default Nav;
