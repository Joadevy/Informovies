import ClientLoader from "../../../components/Loaders/ClientLoader";

export default function Loading() {
  return (
    <div className="flex flex-col relative w-full h-full">
      <div className="h-[250px] relative lg:backface-hidden lg:absolute w-full lg:h-full">
        <ClientLoader />
      </div>
    </div>
  );
}
