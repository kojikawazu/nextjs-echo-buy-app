import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

/**
 * ミドルウェア
 * @param request リクエスト
 * @returns レスポンス
 */
export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    // 保護されたルートのリスト
    const protectedRoutes = ['/dashboard', '/profile', '/payment'];

    // 現在のパスが保護されたルートかどうかをチェック
    const isProtectedRoute = protectedRoutes.some((route) =>
        request.nextUrl.pathname.startsWith(route),
    );

    // 保護されたルートにアクセスしているが、トークンがない場合はリダイレクト
    if (isProtectedRoute && !token) {
        return NextResponse.redirect(new URL('/auth/signin', request.url));
    }

    // それ以外は次のミドルウェアに処理を移す
    return NextResponse.next();
}

/**
 * マッチャー
 */
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
