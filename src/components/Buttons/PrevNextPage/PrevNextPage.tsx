"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  nextUrl: string;
  prevUrl: string;
};

const PrevNextPage = ({ nextUrl, prevUrl }: Props) => {
  const [scrollToSection, setScrollToSection] = useState(false);

  useEffect(() => {
    const handleScrollToSection = () => {
      if (scrollToSection) {
        const section = document.getElementById("all");
        if (section) {
          const yOffset = -75;
          const y =
            section.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
        setScrollToSection(false);
      }
    };

    handleScrollToSection();
  }, [scrollToSection]);

  const handleLinkClick = () => {
    setScrollToSection(true);
  };
  return (
    <div className="flex gap-2 border-2 border-grayish-blue rounded-lg p-2">
      {prevUrl.length > 0 ? (
        <Link href={prevUrl} legacyBehavior>
          <a onClick={handleLinkClick}>← Prev</a>
        </Link>
      ) : (
        <p className=" cursor-not-allowed">← Prev</p>
      )}

      <Link href={nextUrl} onClick={handleLinkClick}>
        Next →
      </Link>
    </div>
  );
};

export default PrevNextPage;
