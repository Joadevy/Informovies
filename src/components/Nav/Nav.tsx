import Image from "next/image";
import Link from "next/link";
import IconNavBookmarks from "../Icons/IconNavBookmarks";
import IconNavHome from "../Icons/IconNavHome";
import IconNavMovies from "../Icons/IconNavMovies";
import IconNavSeries from "../Icons/IconNavSeries";
import icon from "../../../public/assets/favicon.png";
import NavLink from "./NavLink";

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
  bookmarks: (
    <NavLink description="Bookmarks" href="/bookmarks">
      <IconNavBookmarks />
    </NavLink>
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
