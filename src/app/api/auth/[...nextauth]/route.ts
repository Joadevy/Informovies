import { authOptions } from "@/utils/authOptions";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };

// RESOLVER TYPE CHECKING
// https://stackoverflow.com/questions/76298505/my-next-js-app-isnt-building-and-returing-a-type-error-how-do-i-fix
