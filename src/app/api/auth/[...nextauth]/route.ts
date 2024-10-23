import NextAuth from 'next-auth';
import { authOptions } from '@/app/lib/auth/auth';

/**
 * 認証設定
 */
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
