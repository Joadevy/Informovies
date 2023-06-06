"use client";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

type Props = {
  videoKey: string;
};

const ClientVideo = ({ videoKey }: Props) => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [windowWidth, setWindowWidth] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 960);
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    // Add the resize when the component is mounted
    window.addEventListener("resize", handleResize);

    // Remove the resize when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]); // eslint-disable-line react-hooks/exhaustive-deps

  const opts = {
    height: isDesktop ? "390" : "300",
    width: isDesktop ? "640" : (windowWidth * 0.95).toString(),
  };

  return (
    <div className="shadow max-w-fit rounded-xl overflow-hidden">
      <YouTube videoId={videoKey} opts={opts} />
    </div>
  );
};

export default ClientVideo;
