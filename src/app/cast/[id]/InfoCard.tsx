import React from "react";
import { Person } from "./page";

type Props = {
  title: string;
  content: string;
  hidden?: boolean;
};

const InfoCard = ({ content, title, hidden }: Props) => {
  return (
    <li
      className={
        "border border-grayish-blue rounded-lg p-2 flex flex-col " +
        (hidden ? "hidden lg:visible" : "")
      }
    >
      <span className="font-bold text-center">{title}</span>
      {content ?? "-"}
    </li>
  );
};

export default InfoCard;
