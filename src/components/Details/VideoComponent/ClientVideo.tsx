"use client";
import YouTube from "react-youtube";

type Props = {
  videoKey: string;
};

const ClientVideo = ({ videoKey }: Props) => {
  return (
    <div className="shadow max-w-fit rounded-xl overflow-hidden">
      <YouTube videoId={videoKey} />
    </div>
  );
};

export default ClientVideo;
