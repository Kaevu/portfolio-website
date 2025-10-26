import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({ profile }) {
      const allowedUsername = ""
      const allowedEmail = ""

      if (
        (profile?.login && profile.login === allowedUsername) ||
        (profile?.email && profile.email === allowedEmail)
      ) {
        return true
      }

      // Deny login
      return false
    },
  },
})