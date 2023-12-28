import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";

const libsql = createClient({
  url: `${process.env.NEXT_PUBLIC_DB_URL}`,
  authToken: `${process.env.NEXT_DB_AUTH_TOKEN}`,
});

const adapter = new PrismaLibSQL(libsql);

export const db = new PrismaClient({ adapter } as any);
