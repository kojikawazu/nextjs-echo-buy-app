import Stripe from 'stripe';

/**
 * Stripe のインスタンスを取得
 * @returns Stripe のインスタンス
 */
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-09-30.acacia',
});
