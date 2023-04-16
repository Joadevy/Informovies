import ClientLoader from "../../../components/Loaders/ClientLoader";

export default function Loading() {
  return (
    <div className="flex items-center justify-center self-center h-52 w-full relative">
      <ClientLoader />
    </div>
  );
}
