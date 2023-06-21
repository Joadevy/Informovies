import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  description: string;
  href: string;
};

const NavLink = ({ children, description, href }: Props) => {
  return (
    <Link
      href={href}
      className="flex flex-col gap-1 items-center justify-center"
      aria-label={href + " page"}
    >
      <div className="w-6 h-6 relative">{children}</div>
      <p className="text-xs text-grayish-blue">{description}</p>
    </Link>
  );
};

export default NavLink;
