import { stripe } from '@/app/lib/stripe/stripe-server';
import { Suspense } from 'react';

// types
import { PaymentHistoryItem } from '@/app/types/payment-types';
// components
import PaymentHistory from '@/app/components/stripe/history/PaymentHistory';

/**
 * 購入履歴ページ
 * @returns JSX.Element
 */
const PaymentHistoryPage = async () => {
    let orderList: PaymentHistoryItem[] = [];

    try {
        // 支払い履歴の取得
        const sessions = await stripe.checkout.sessions.list({
            limit: 100,
        });

        // 支払い履歴のデータを整形
        orderList = sessions.data.map((session) => {
            const lineItems = session.line_items?.data || [];
            const productNames = lineItems.map((item) => item.description).join(', ');

            return {
                id: session.id,
                isGuest: !session.customer,
                customerEmail: session.customer_details?.email || null,
                customerName: session.customer_details?.name || 'ゲスト',
                amount: session.amount_total || 0,
                currency: session.currency || '不明',
                paymentStatus: session.payment_status,
                mode: session.mode,
                created: new Date(session.created * 1000).toISOString(),
                productNames: productNames,
                itemCount: lineItems.length,
                paymentMethod: session.payment_method_types?.[0] || '不明',
                billingAddress: session.customer_details?.address
                    ? `${session.customer_details.address.city}, ${session.customer_details.address.country}`
                    : '不明',
                sessionStatus: session.status,
            };
        });
        //console.log('orderList', orderList);
    } catch (err) {
        console.error(err);
        return <div>エラー: {String(err)}</div>;
    }

    return (
        <Suspense fallback={<div>読み込み中...</div>}>
            <PaymentHistory orderList={orderList} />
        </Suspense>
    );
};

export default PaymentHistoryPage;
