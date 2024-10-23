import { NextAuthOptions, DefaultSession } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

/**
 * next-authのセッションにidを追加
 */
declare module 'next-auth' {
    interface Session {
        user?: DefaultSession['user'] & {
            id: string;
        };
    }
}

/**
 * 認証設定
 */
export const authOptions: NextAuthOptions = {
    /**
     * ページ
     */
    pages: {
        signIn: '/auth/signin',
    },
    providers: [
        /**
         * GitHub 認証プロバイダー
         */
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                const checkEmail = process.env.AUTH_TEST_USER_EMAIL as string;
                const checkPassword = process.env.AUTH_TEST_USER_PASSWORD as string;
                const testId = process.env.TEST_USER_ID as string;
                const testName = process.env.TEST_USER_NAME as string;
                const testEmail = process.env.TEST_USER_EMAIL as string;

                if (credentials?.email === checkEmail && credentials?.password === checkPassword) {
                    return { id: testId, name: testName, email: testEmail };
                }
                return null;
            },
        }),
    ],
    /**
     * シークレットキー
     */
    secret: process.env.NEXTAUTH_SECRET,
    /**
     * リダイレクト
     */
    callbacks: {
        /**
         * JWTトークンの生成
         */
        async jwt({ token, user }) {
            //console.log('jwt', token, user);
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        /**
         * セッションの生成
         */
        async session({ session, token }) {
            //console.log('session', session, token);
            if (session.user) {
                session.user.id = token.id as string;
            }
            return session;
        },
        /**
         * リダイレクト
         */
        async redirect({ baseUrl }) {
            // ログイン成功後に /dashboard に遷移
            return `${baseUrl}/dashboard`;
        },
    },
};
