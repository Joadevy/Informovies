import { Video } from "@/utils/types";
import getData from "lib/getData";
import ClientVideo from "./ClientVideo";

type Props = {
  endpoint: string;
};

const getVideos = async (path: Props["endpoint"]) => {
  const videosPath = path + "/videos";
  const data = await getData<Video>(videosPath);
  const trailer = data.find(
    (video) => video.site === "YouTube" && video.type === "Trailer"
  );

  if (trailer) return trailer;
  if (data.length) return data[0];
  return null;
};

export const VideoComponent = async ({ endpoint }: Props) => {
  const videos = await getVideos(endpoint);
  if (!videos) return null;
  return (
    <article>
      <h3 className="font-extrabold mb-2">Get a sneek peek</h3>
      <ClientVideo videoKey={videos.key} />
    </article>
  );
};
