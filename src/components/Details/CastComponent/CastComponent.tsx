import getData from "lib/getData";
import ClientCastView from "./ClientCastView";

type Props = {
  path: string;
};

type Cast = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

const getCast = async (path: string) => {
  const pathCast = path + "/credits";
  const response = await getData<Cast>(pathCast, "", "cast");
  return response;
};

const CastComponent = async ({ path }: Props) => {
  const cast = (await getCast(path)).slice(0, 50); // Take the 50-first because of length on screen
  if (cast.length === 0) return null;
  return (
    <article>
      <h3 className="font-extrabold mb-2">Lights, Camera, Cast</h3>
      <ClientCastView cast={cast} />
    </article>
  );
};

export default CastComponent;
