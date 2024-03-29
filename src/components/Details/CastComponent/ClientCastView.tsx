"use client";

import Link from "next/link";

type Cast = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

type Props = {
  cast: Cast[];
};

const ClientCastView = ({ cast }: Props) => {
  if (typeof window !== "undefined") {
    window.innerWidth < 960 ? (cast = cast.slice(0, 21)) : "";
  }

  return (
    <ul className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-2">
      {cast.map((person) => (
        <li
          className="border border-grayish-blue text-grayish-blue py-1 px-2 rounded-lg bg-semi-dark-blue hover:opacity-70 transition-opacity"
          key={person.id}
        >
          <Link href={`/cast/${person.id}`}>{person.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ClientCastView;
