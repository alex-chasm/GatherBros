import clientPromise from '@/lib/mongodb-adapter'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import NextAuth, { AuthOptions } from 'next-auth'
import TwitterProvider from 'next-auth/providers/twitter'

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!,
      version: '2.0',
      userinfo: {
        url: 'https://api.twitter.com/2/users/me',
        params: { 'user.fields': 'id,profile_image_url,username,verified' },
      },
      profile: ({ data }) => {
        return {
          id: data.id,
          name: data.name,
          image: data.profile_image_url,
          username: data.username,
        }
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log('account', account)
      if (account) {
        token.id = account.id
      }
      return token
    },
    async session({ session, user, token }) {
      ;(session.user as any).id = user.id
      return session
    },
  },
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
