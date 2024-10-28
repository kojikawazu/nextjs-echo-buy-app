import Link from 'next/link';

/**
 * 支払いキャンセル
 * @returns JSX.Element
 */
const PaymentCancel = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">支払いがキャンセルされました</h1>
            <p className="mb-4">支払いプロセスが中断されました。もう一度お試しください。</p>
            <Link href="/dashboard/list" className="text-blue-500 hover:underline">
                アルバムリストに戻る
            </Link>
        </div>
    );
};

export default PaymentCancel;
