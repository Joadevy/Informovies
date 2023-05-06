import ClientLoader from "../../../components/Loaders/ClientLoader";

export default function Loading() {
  return (
    <div className="h-[250px] rounded-t-xl lg:rounded-xl border border-grayish-blue border-opacity-50 flex items-center justify-center relative lg:backface-hidden lg:absolute w-full lg:h-full">
      <ClientLoader />
    </div>
  );
}
