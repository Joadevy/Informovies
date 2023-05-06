import getData from "lib/getData";
import ViewMedia from "./ViewMedia/ViewMedia";
import { MovieDetails, TvDetails } from "@/utils/types";

type Props = {
  title: string;
  url: {
    path: string;
    optional?: string;
  };
  sizeImages?: number;
  showMediaType: boolean;
};

const SectionMedia = async ({
  title,
  url,
  sizeImages = 200,
  showMediaType,
}: Props) => {
  const data = await getData<TvDetails | MovieDetails>(
    url.path,
    url.optional ?? ""
  );

  if (data.length === 0) return;
  return (
    <article className="text-white">
      <h2 className={`text-2xl mb-2`}>{title}</h2>
      <div className="grid grid-cols-mobile lg:grid-cols-desktop gap-y-6 gap-x-4 p-2 lg:p-0">
        {data?.map((media) => (
          <ViewMedia
            key={media.id}
            media={media}
            sizeImages={sizeImages}
            showDetails={showMediaType}
          />
        ))}
      </div>
    </article>
  );
};

export default SectionMedia;
