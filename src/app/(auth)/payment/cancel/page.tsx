import Link from 'next/link';

/**
 * 支払いキャンセルページ
 * @returns JSX.Element
 */
const PaymentCancelPage = () => {
    return (
        <div className="container mx-auto p-4 text-center">
            <h1 className="text-3xl font-bold mb-4">支払いがキャンセルされました</h1>
            <p className="mb-4">支払いプロセスが中断されました。もう一度お試しください。</p>
            <Link href="/dashboard/list" className="text-blue-500 hover:underline">
                アルバムリストに戻る
            </Link>
        </div>
    );
};

export default PaymentCancelPage;
