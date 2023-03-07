import { IMedia } from "@/utils/types";
import getData from "lib/getData";
import SwipeSlider from "./SwipeSlider";

type Props<T extends IMedia> = {
  title: string;
  url: {
    path: string;
    optional?: string;
  };
  sizeImages?: number;
};

export const SwipeSection = async <T extends IMedia>({
  title,
  url,
  sizeImages = 200,
}: Props<T>) => {
  const media = await getData<T>(url.path, url.optional ?? "");
  return (
    <article>
      <h2>{title}</h2>
      <SwipeSlider data={media}></SwipeSlider>;
    </article>
  );
};

export default SwipeSection;
