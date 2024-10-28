//import { useSearchParams } from 'next/navigation';
import PaymentSuccess from '@/app/components/payments/PaymentSuccess';

/**
 * 支払い成功ページ
 * @returns 支払い成功ページ
 */
const PaymentSuccessPage = () => {
    //const searchParams = useSearchParams();

    return (
        <div className="container mx-auto p-4 text-center">
            {/* <PaymentSuccess sessionId={searchParams.get('session_id')} /> */}
            <PaymentSuccess />
        </div>
    );
};

export default PaymentSuccessPage;
