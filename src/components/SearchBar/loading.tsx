import ClientLoader from "../../components/Loaders/ClientLoader";

export default function Loading() {
  return (
    <div className="w-16 h-16 flex items-center justify-center relative">
      <ClientLoader />
    </div>
  );
}
