import { createClient } from "@libsql/client/web";

export default function Turso() {
  const config = {
    url: process.env.NEXT_PUBLIC_DB_URL ?? "",
    authToken: process.env.NEXT_DB_AUTH_TOKEN,
  };

  return createClient(config);
}

export const db = Turso();
