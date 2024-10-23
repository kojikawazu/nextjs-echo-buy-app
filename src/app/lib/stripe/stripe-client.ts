import { loadStripe } from '@stripe/stripe-js';

/**
 * Stripe のインスタンスを取得
 * @returns Stripe のインスタンス
 */
export const getStripe = () => {
    return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);
};
