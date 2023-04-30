import ClientLoader from "../../components/Loaders/ClientLoader";

export default function Loading() {
  return (
    <div className="flex w-full min-h-screen">
      <div className="flex items-center justify-center lg:self-center h-[30vh] w-full sm:w-[450px] lg:h-[500px] lg:w-[350px] relative border border-grayish-blue rounded-xl">
        <ClientLoader />
      </div>
    </div>
  );
}
