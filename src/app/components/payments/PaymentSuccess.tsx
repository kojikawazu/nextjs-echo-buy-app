import Link from 'next/link';

// interface PaymentSuccessProps {
//     sessionId: string | null;
// }

/**
 * 支払い成功
 * @returns JSX.Element
 */
const PaymentSuccess = () => {
    return (
        <>
            <h1 className="text-3xl font-bold mb-4">支払い成功</h1>
            <p className="mb-4">ご購入ありがとうございます！</p>
            {/* {sessionId && <p className="mb-4">セッションID: {sessionId}</p>} */}
            <Link href="/dashboard/list" className="text-blue-500 hover:underline">
                アルバムリストに戻る
            </Link>
        </>
    );
};

export default PaymentSuccess;
