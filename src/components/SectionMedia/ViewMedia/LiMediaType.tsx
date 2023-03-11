import { IMedia } from "@/utils/types";

type props = {
  media: IMedia;
};
const LiMediaType = ({ media }: props) => {
  {
    return !media.media_type ? (
      <li>{media.first_air_date ? "Tv Series" : "Movie"}</li>
    ) : (
      <li>{media.media_type === "tv" ? "Tv Series" : "Movie"}</li>
    );
  }
};
export default LiMediaType;
