'use client';

import { useState } from 'react';
import { getStripe } from '@/app/lib/stripe/stripe-client';

type PaymentButtonProps = {
    amount: number;
    productName: string;
};

/**
 * 支払いボタン
 * @param amount 金額
 * @param productName 商品名
 * @returns 支払いボタン
 */
const PaymentButton = ({ amount, productName }: PaymentButtonProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const handlePayment = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/stripe/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount, productName }),
            });

            if (!response.ok) {
                throw new Error('支払いセッションの作成に失敗しました');
            }

            const session = await response.json();
            const stripe = await getStripe();
            if (stripe) {
                const { error } = await stripe.redirectToCheckout({
                    sessionId: session.id,
                });

                if (error) {
                    console.error('Stripe error:', error);
                    throw new Error(error.message);
                }
            }
        } catch (err) {
            console.error('Payment error:', err);
            alert('支払い処理中にエラーが発生しました。もう一度お試しください。');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            onClick={handlePayment}
            disabled={isLoading}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
            {isLoading ? '処理中...' : '購入する'}
        </button>
    );
};

export default PaymentButton;
