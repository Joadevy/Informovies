type Props = {
  linkTo: string;
  label: string;
};

export const RedAnchorTag = ({ linkTo, label }: Props) => {
  return (
    <a
      className="text-white-smoke rounded-xl p-2 border shadow border-white-dust bg-red max-w-fit hover:opacity-60 transition-opacity"
      href={linkTo}
    >
      {label}
    </a>
  );
};
