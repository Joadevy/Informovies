import { type AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/backend/db";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.JWT_SECRET!,
  },
  secret: process.env.NEXTAUTH_SECRET!,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.sub,
          name: `${profile.given_name} ${profile.family_name}`,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
  ],
  callbacks: {
    redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      const u = new URL(url.startsWith("http") ? url : baseUrl);
      const redirectUrl = u.searchParams.get("callbackUrl")!;

      if (redirectUrl) return redirectUrl;
      // Allows callback URLs on the same origin
      else if (
        new URL(url.startsWith("http") ? url : baseUrl).origin === baseUrl
      )
        return url;

      return baseUrl;
    },
    session({ session, token }) {
      return session;
    },
    jwt: ({ token, user }) => ({
      ...token,
      user,
    }),
  },

  pages: {
    signIn: "/subscribe",
    //signOut: "/auth/signout",
    //error: "/auth/error",
    //verifyRequest: "/auth/verify-request",
    //newUser: "/auth/new-user",
  },
};
