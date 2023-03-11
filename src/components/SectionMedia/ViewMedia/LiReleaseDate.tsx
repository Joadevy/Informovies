import { getYear } from "@/utils/helpers";
import { IMedia } from "@/utils/types";

type props = {
  media: IMedia;
};
const LiReleaseDate = ({ media }: props) => (
  <li>{getYear(media.first_air_date ?? media.release_date)}</li>
);

export default LiReleaseDate;
