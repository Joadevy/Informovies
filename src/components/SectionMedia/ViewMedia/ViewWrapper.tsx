"use client";
import { useMediaQuery } from "@react-hook/media-query";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  URL: string;
  customHeight: number;
}

export function WrapperComponent({ children, URL, customHeight }: Props) {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  if (isMobile)
    return (
      <Link
        href={URL}
        className={`w-full h-[325px] lg:h-[${customHeight}px] group perspective bg-semi-dark-blue lg:bg-transparent shadow rounded-t-xl rounded-b-lg`}
      >
        {children}
      </Link>
    );

  return (
    <div
      className={`w-full h-[325px] lg:h-[${customHeight}px] group perspective bg-semi-dark-blue lg:bg-transparent shadow rounded-t-xl rounded-b-lg`}
    >
      {children}
    </div>
  );
}
