import getData from "lib/getData";
import ViewMedia from "./ViewMedia/ViewMedia";

export interface Media {
  id: number;
  title: string;
  name: string;
  poster_path: string;
}

type Props<T extends Media> = {
  title: string;
  url: {
    path: string;
    optional?: string;
  };
  sizeImages?: number;
};

const Section = async <T extends Media>({
  title,
  url,
  sizeImages = 200,
}: Props<T>) => {
  const data = await getData<T>(url.path, url.optional ?? "");
  return (
    <article className="text-white">
      <h2>{title}</h2>
      <div className="grid grid-cols-mobile lg:grid-cols-desktop gap-4 p-3">
        {data?.map((media) => (
          <ViewMedia key={media.id} media={media} sizeImages={sizeImages} />
        ))}
      </div>
    </article>
  );
};

export default Section;
