import LinkToGenre from "@/components/Buttons/LInkToGenre";
import ClientLoader from "../../components/Loaders/ClientLoader";

export default function Loading() {
  return (
    <main className="text-white flex flex-col lg:gap-10">
      <section className="flex flex-col lg:flex-row lg:gap-10 w-full min-h-screen lg:pr-10 relative">
        <div className="flex items-center justify-center lg:self-center h-[30vh] w-full sm:w-[450px] lg:h-[500px] lg:w-[350px] relative border border-grayish-blue rounded-xl">
          <ClientLoader />
        </div>

        <article className="flex flex-col p-2 gap-4 lg:p-0 lg:w-7/12 lg:mt-[11vh] animate-pulse">
          <header className="flex flex-col gap-2">
            <div className="lg:max-w-fit relative">
              <h1 className="bg-semi-dark-blue rounded-lg lg:w-80 lg:h-10">
                {/* {Details.name} */}
              </h1>
              {/* <div className="absolute -top-1 right-0 lg:top-0 lg:-right-12"> */}
              {/* <ButtonBookmark media={Details} /> */}
              {/* </div> */}
            </div>
            <p className="text-white-dust lg:w-24 h-4"></p>
            <div className="flex flex-col mt-2 lg:mt-0 lg:flex-row gap-5 lg:items-center">
              <ul className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <li
                    key={i}
                    className="border border-grayish-blue rounded-lg bg-semi-dark-blue"
                  >
                    <p className="px-8 py-3"></p>
                  </li>
                ))}
              </ul>
              <p className="hidden text-lg lg:text-xl lg:flex lg:gap-1 lg:items-center lg:justify-center">
                <span className="text-md lg:text-2xl"></span>{" "}
              </p>
            </div>
          </header>
        </article>
      </section>

      {/* 
        <ul className="flex gap-10 lg:gap-2 border justify-around lg:justify-between w-full lg:w-3/4 p-3 rounded-xl border-grayish-blue border-opacity-30">
          <LiMainInformation
            title="First air date"
            content={<ClientDate date={Details.first_air_date} />}
          />
          <LiMainInformation
            title="Seasons"
            content={Details.number_of_seasons}
          />
          <LiMainInformation
            title="Original language"
            content={Details.original_language}
          />
        </ul>

        <div>
          <h2 className="mb-1 font-bold">Synopsis</h2>
          <p className="text-white-smoke">{Details.overview}</p>
        </div>

        <article className="">
          <h2 className="mb-1 font-bold">More about</h2>
          <div className="flex gap-2">
            {Details.production_countries.length > 0 ? (
              <div className="border border-grayish-blue border-opacity-30 rounded-lg max-w-fit p-2">
                <h3 className="mb-1 font-semibold">Production countries</h3>
                <ul className="flex flex-col gap-1 max-w-fit rounded-xl text-white-smoke">
                  {Details.production_countries.map((country) => (
                    <li key={country.name}>◟{country.name} </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {Details.production_companies.length > 0 ? (
              <div className="border border-grayish-blue border-opacity-30 rounded-lg max-w-fit p-2">
                <h3 className="mb-1 font-semibold">Production companies</h3>
                <ul className="flex flex-col gap-1 max-w-fit rounded-xl text-white-smoke">
                  {Details.production_companies.map((country) => (
                    <li key={country.id}>◟{country.name} </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </article> */}
    </main>
  );
}
