import { getYear } from "@/utils/helpers";
import { MovieDetails, TvDetails } from "@/utils/types";

type props = {
  media: TvDetails | MovieDetails;
};
const LiReleaseDate = ({ media }: props) => (
  <li>
    {getYear(
      "first_air_date" in media ? media.first_air_date : media.release_date
    )}
  </li>
);

export default LiReleaseDate;
