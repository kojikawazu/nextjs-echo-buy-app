import PaymentCancel from '@/app/components/stripe/cancel/PaymentCancel';

/**
 * 支払いキャンセルページ
 * @returns JSX.Element
 */
const PaymentCancelPage = () => {
    return (
        <div className="container mx-auto p-4 text-center">
            <PaymentCancel />
        </div>
    );
};

export default PaymentCancelPage;
