import ClientLoader from "../../../components/Loaders/ClientLoader";

export default function Loading() {
  return (
    <main className="text-white flex flex-col lg:gap-10">
      <section className="flex flex-col lg:flex-row lg:gap-10 w-full min-h-screen lg:pr-10 relative">
        <div className="flex items-center self-center justify-center h-[40vh] w-1/2 overflow-hidden sm:w-[450px] lg:h-[500px] lg:w-[350px] relative border border-grayish-blue rounded-xl">
          <ClientLoader />
        </div>

        <article className="flex flex-col p-2 gap-4 lg:p-0 lg:w-7/12 lg:mt-[11vh] animate-pulse">
          <header className="flex flex-col gap-2">
            <div className="lg:max-w-fit relative self-center lg:self-start">
              <h1 className="bg-semi-dark-blue rounded-lg w-52 h-7 lg:w-80 lg:h-10"></h1>
            </div>
            <p className="bg-semi-dark-blue rounded-lg h-3 w-24 lg:h-5 mb-1 self-center lg:self-start"></p>
            <div className="flex flex-col mt-2 lg:mt-0 lg:flex-row gap-5 lg:items-center">
              <ul className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <li
                    key={i}
                    className={
                      `border border-grayish-blue rounded-lg bg-semi-dark-blue ` +
                      (i === 2 ? "hidden lg:block" : "")
                    }
                  >
                    <p className="px-20 py-9 lg:py-6"></p>
                  </li>
                ))}
              </ul>
            </div>
          </header>

          <div>
            <h2 className="bg-semi-dark-blue rounded-lg h-3 w-24 lg:h-5 mb-1"></h2>
            <p className="bg-semi-dark-blue rounded-lg w-full h-20"></p>
          </div>

          <div className="rounded-xl p-2 bg-semi-dark-blue h-10 w-1/3 lg:w-2/12"></div>
        </article>
      </section>
    </main>
  );
}
