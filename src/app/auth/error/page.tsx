import DbSuspenseError from "@/components/Errors/DbSuspenseError";

const ErrorWhileAuth = () => {
  return <DbSuspenseError error={new Error("Error while auth process")} />;
};

export default ErrorWhileAuth;
