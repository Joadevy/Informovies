import { IMedia } from "@/utils/types";
import getData from "lib/getData";
import ViewMedia from "./ViewMedia/ViewMedia";

type Props<T extends IMedia> = {
  title: string;
  url: {
    path: string;
    optional?: string;
  };
  sizeImages?: number;
};

const SectionMedia = async <T extends IMedia>({
  title,
  url,
  sizeImages = 200,
}: Props<T>) => {
  const data = await getData<T>(url.path, url.optional ?? "");

  if (data.length === 0) return;
  return (
    <article className="text-white">
      <h2 className={`text-2xl m-2`}>{title}</h2>
      <div className="grid grid-cols-mobile lg:grid-cols-desktop gap-y-6 gap-x-4 p-3">
        {data?.map((media) => (
          <ViewMedia key={media.id} media={media} sizeImages={sizeImages} />
        ))}
      </div>
    </article>
  );
};

export default SectionMedia;
