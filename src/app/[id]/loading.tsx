import ClientLoader from "../../components/Loaders/ClientLoader";

export default function Loading() {
  return (
    <div className="flex w-full min-h-screen">
      <div className="flex items-center justify-center self-center h-[400px] w-[250px] lg:h-[500px] lg:w-[350px] relative border border-grayish-blue rounded-xl">
        <ClientLoader />
      </div>
    </div>
  );
}
