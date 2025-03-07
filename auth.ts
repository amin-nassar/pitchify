import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { client } from "./sanity/lib/client";
import { AUTHOR_BY_GOOGLE_ID_QUERY } from "./sanity/lib/queries";
import { writeClient } from "./sanity/lib/write-client";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [Google],
  callbacks: {
    signIn: async ({ user, profile }) => {
      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(AUTHOR_BY_GOOGLE_ID_QUERY, { id: profile?.sub });

      if (!existingUser) {
        await writeClient.create({
          _type: "author",
          id: profile?.sub,
          name: user?.name,
          username: profile?.name
            ?.split(" ")
            .map((e) => e.toLowerCase())
            .join("-"),
          email: user.email,
          image: user.image,
        });
      }

      return true;
    },
    jwt: async ({ token, account, profile }) => {
      if (account && profile) {
        const user = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_GOOGLE_ID_QUERY, { id: profile?.sub });

        token.id = user?._id;
      }

      return token;
    },
    session: async ({ session, token }) => {
      Object.assign(session, { id: token.id });
      return session;
    },
  },
});
