import Link from "next/link";

type Props = {
  linkTo: string;
};

const ButtonWatchNow = ({ linkTo }: Props) => (
  <button className="hidden border bg-red border-grayish-blue px-4 py-2 rounded-xl lg:block absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-2">
    <Link href={linkTo}>Watch it now!</Link>
  </button>
);

export default ButtonWatchNow;
