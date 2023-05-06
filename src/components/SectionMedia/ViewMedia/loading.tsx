import ClientLoader from "../../../components/Loaders/ClientLoader";

export default function Loading() {
  return (
    <div className="h-[250px] flex items-center justify-center relative lg:backface-hidden lg:absolute w-full lg:h-full">
      <ClientLoader />
    </div>
  );
}
