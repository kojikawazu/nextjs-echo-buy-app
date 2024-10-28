import { NextResponse } from 'next/server';
import { stripe } from '@/app/lib/stripe/stripe-server';

/**
 * 支払い履歴の取得
 * @returns レスポンス
 */
export async function GET() {
    try {
        // 支払い履歴の取得
        const sessions = await stripe.checkout.sessions.list({
            limit: 100,
        });

        // 支払い履歴のデータを整形
        const orderList = sessions.data.map(session => {
            const lineItems = session.line_items?.data || [];
            const productNames = lineItems.map(item => item.description).join(', ');

            return {
                id: session.id,
                customerEmail: session.customer_details?.email || null,
                customerName: session.customer_details?.name || 'ゲスト',
                amount: session.amount_total,
                currency: session.currency,
                paymentStatus: session.payment_status,
                mode: session.mode,
                created: new Date(session.created * 1000).toISOString(),
                isGuest: !session.customer,
                expiresAt: new Date(session.expires_at * 1000).toISOString(),
                sessionStatus: session.status,
                paymentIntentId: typeof session.payment_intent === 'string'
                    ? session.payment_intent
                    : session.payment_intent?.id || null,
                customerCreation: session.customer_creation,
                // 新しく追加したフィールド
                productNames: productNames,
                itemCount: lineItems.length,
                paymentMethod: session.payment_method_types?.[0] || '不明',
                billingAddress: session.customer_details?.address
                    ? `${session.customer_details.address.city}, ${session.customer_details.address.country}`
                    : '不明',
                metadata: session.metadata,
                successUrl: session.success_url,
                cancelUrl: session.cancel_url,
            };
        });

        return NextResponse.json(orderList);
    } catch (error) {
        console.error('支払い履歴の取得中にエラーが発生しました:', error);
        if (error instanceof Error) {
            return NextResponse.json({ message: error.message }, { status: 500 });
        }
        return NextResponse.json({ message: 'Unknown error occurred' }, { status: 500 });
    }
}