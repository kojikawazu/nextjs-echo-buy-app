'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

/**
 * 支払い成功ページ
 * @returns 支払い成功ページ
 */
const PaymentSuccessPage = () => {
    const [, setSessionId] = useState<string | null>(null);
    const searchParams = useSearchParams();

    useEffect(() => {
        setSessionId(searchParams.get('session_id'));
    }, [searchParams]);

    return (
        <div className="container mx-auto p-4 text-center">
            <h1 className="text-3xl font-bold mb-4">支払い成功</h1>
            <p className="mb-4">ご購入ありがとうございます！</p>
            {/* {sessionId && <p className="mb-4">セッションID: {sessionId}</p>} */}
            <Link href="/dashboard/list" className="text-blue-500 hover:underline">
                アルバムリストに戻る
            </Link>
        </div>
    );
};

export default PaymentSuccessPage;
