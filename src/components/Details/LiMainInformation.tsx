import { ReactElement } from "react";

type Props = {
  title: string;
  content: string | number | ReactElement;
  extra?: string;
};

const LiMainInformation = ({ title, content, extra }: Props) => {
  return (
    <li>
      <h3 className="font-bold">{title}</h3>
      <p className="text-white-dust">
        <span className="text-lg lg:text-2xl lg:font-extrabold">{content}</span>
        {extra}
      </p>
    </li>
  );
};

export default LiMainInformation;
