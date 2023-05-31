import { getApiURL } from "@/utils/helpers";

type Props = {
  params: {
    id: string;
  };
};

interface Person {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string | null;
}

const getData = async (path: string, optional?: string): Promise<Person> => {
  const response = await fetch(getApiURL(path, optional), {});
  if (!response.ok) throw new Error(`Error while fetching ${path}`);

  const results = await response.json();
  return results;
};

const page = async ({ params }: Props) => {
  const path = `person/${params.id}`;
  const data = await getData(path);
  console.log(data);
  return (
    <div className="text-white">
      This will be the profile page for: {data.name}
    </div>
  );
};

export default page;
