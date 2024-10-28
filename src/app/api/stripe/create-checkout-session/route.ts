import { stripe } from '@/app/lib/stripe/stripe-server';

/**
 * チェックアウトセッションの作成
 * @param req リクエスト
 * @returns レスポンス
 */
export async function POST(req: Request) {
    try {
        const { amount, productName } = await req.json();

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'jpy',
                        product_data: {
                            name: productName,
                        },
                        unit_amount: amount,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${req.headers.get('origin')}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.get('origin')}/payment/cancel`,
            customer_email: 'required',
        });

        return new Response(JSON.stringify({ id: session.id }), { status: 200 });
    } catch (err) {
        console.error('Stripe API error:', err);
        return new Response(
            JSON.stringify({ error: 'チェックアウトセッションの作成に失敗しました' }),
            { status: 500 },
        );
    }
}
