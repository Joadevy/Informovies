export default function DbSuspenseError({ error }: { error: Error }) {
  return (
    <div className=" min-h-screen text-white-smoke flex flex-col gap-2 items-center justify-center">
      <header className="space-y-1 w-9/12 lg:w-1/2">
        <h2 className="text-xl font-extrabold">
          Houston... you already know what we have.
        </h2>
        <p className="italic">
          Im really sorry but we&apos;ve a problem. It&apos;s probably related
          to the database because this app is using a free plan and the database
          is paused after certain time.
        </p>
      </header>

      <footer className="mt-4 w-9/12 lg:w-1/2">
        <h3 className="font-semibold mb-1">
          I would be very grateful if you could report this error to me via
          message at:
        </h3>

        <div className="flex gap-2">
          <a
            className="bg-grayish-blue hover:opacity-50 text-white font-bold py-2 px-4 rounded transition-opacity"
            href="https://twitter.com/JoaquinArlettaz"
          >
            X (Twitter)
          </a>

          <a
            className="bg-grayish-blue hover:opacity-50 text-white font-bold py-2 px-4 rounded transition-opacity"
            href="https://www.linkedin.com/in/joaqu%C3%ADn-arlettaz/"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
