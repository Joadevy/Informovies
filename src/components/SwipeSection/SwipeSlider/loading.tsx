import ClientLoader from "../../../components/Loaders/ClientLoader";

export default function Loading() {
  return (
    <div className="flex w-full min-h-screen">
      <div className="flex items-center justify-center self-center h-28 w-full relative border border-grayish-blue rounded-xl">
        <ClientLoader />
      </div>
    </div>
  );
}
