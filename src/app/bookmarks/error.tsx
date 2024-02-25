"use client"; // Error components must be Client Components

import DbSuspenseError from "@/components/Errors/DbSuspenseError";

export default function Error({ error }: { error: Error }) {
  return <DbSuspenseError error={error} />;
}
