import { getApiURL } from "@/utils/helpers";
import getData from "lib/getData";

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
  const response = await getData(pathCast);
  //   if (!response.ok) throw new Error(`Error while fetching ${pathCast}`);
  return response;
};

const CastComponent = async ({ path }: Props) => {
  const { cast } = await getCast(path);
  console.log(cast);
  return (
    <ul className="border">
      {cast.map((person: any) => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
};

export default CastComponent;
