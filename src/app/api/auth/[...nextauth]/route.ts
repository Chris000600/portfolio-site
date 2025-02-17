import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    // // Google OAuth Provider
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    // }),
    // // GitHub OAuth Provider
    // GitHubProvider({
    //   clientId: process.env.GITHUB_CLIENT_ID!,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET!
    // }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const allowedEmail = process.env.ADMIN_EMAIL;
        const allowedPassword = process.env.ADMIN_PASSWORD;

        if (
          credentials?.email === allowedEmail &&
          credentials?.password === allowedPassword
        ) {
          return { id: '1', name: '001', email: allowedEmail };
        }
        return null;
      }
    })
  ],
  callbacks: {
    async session({ session, token, user }: any) {
      // Customize session here
      session.user.id = token.sub; // Attach user ID to session
      return session;
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
