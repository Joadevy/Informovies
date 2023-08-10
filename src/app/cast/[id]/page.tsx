import { getApiURL } from "@/utils/helpers";
import PersonImage from "./PersonImage";
import InfoCard from "./InfoCard";
import RedAnchorTag from "@/components/Buttons/RedAnchorTag";
import SwipeSection from "@/components/SwipeSection";
import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

export interface Person {
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const path = `person/${params.id}`;
  const person = await getData(path);
  return {
    title: `${person.name} —Informovies`,
    description: `Personal information about ${person.name}`,
  };
}

const page = async ({ params }: Props) => {
  const path = `person/${params.id}`;
  const data = await getData(path);
  return (
    <main className="text-white flex flex-col lg:gap-10 min-h-screen">
      <section
        className={
          "flex flex-col lg:flex-row lg:gap-10 w-full lg:pr-10 relative " +
          (data.profile_path ? "min-h-screen" : "")
        }
      >
        {data.profile_path ? (
          <div className="self-center h-[40vh] w-1/2 rounded-lg overflow-hidden sm:w-[450px] lg:h-[500px] lg:w-[350px] relative">
            <PersonImage url={data.profile_path!} />
          </div>
        ) : null}

        <article className="flex flex-col p-2 gap-4 lg:p-0 lg:w-7/12 lg:mt-[11vh]">
          <header className="flex flex-col gap-2">
            <div className="lg:max-w-fit relative">
              <h1 className="text-3xl w-full lg:text-4xl font-bold text-center lg:text-left">
                {data.name}
              </h1>
            </div>
            <p className="text-white-dust text-center lg:text-left">
              {data.known_for_department}
            </p>
            <div className="flex flex-col items-center mt-2 lg:mt-0 lg:flex-row gap-5">
              <ul className="flex gap-2">
                <InfoCard
                  content={new Date(data.birthday).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  title="Birthday"
                />
                <InfoCard
                  content={data.place_of_birth}
                  title="Place of birth"
                />
                <InfoCard
                  content={data.also_known_as[0]}
                  title="Also known as"
                  hidden={true}
                />
                {data.deathday ? (
                  <InfoCard content={data.deathday} title="Death date" />
                ) : null}
              </ul>
            </div>
          </header>

          {data.biography ? (
            <div>
              <h2 className="mb-1 font-bold">Biography</h2>
              <p className="text-white-smoke text-justify">{data.biography}</p>
            </div>
          ) : null}

          {data.homepage ? (
            <RedAnchorTag linkTo={data.homepage} label="Official website" />
          ) : null}
        </article>
      </section>

      {/* @ts-expect-error Server Component */}
      <SwipeSection
        url={{
          path: "discover/movie",
          optional: `&sort_by=popularity.desc&with_cast=${data.id}&page=1`,
        }}
        title={"The best movies with " + data.name}
        showMediaType={true}
      />
    </main>
  );
};

export default page;
