import { Stripe } from 'stripe';

/**
 * 支払い履歴アイテム
 */
export interface PaymentHistoryItem {
    id: string;
    isGuest: boolean;
    customerEmail: string | null;
    customerName: string;
    amount: number;
    currency: string;
    paymentStatus: Stripe.Checkout.Session.PaymentStatus;
    mode: Stripe.Checkout.Session.Mode;
    productNames: string;
    itemCount: number;
    paymentMethod: string;
    billingAddress: string;
    sessionStatus: Stripe.Checkout.Session.Status | null;
    created: string;
}
