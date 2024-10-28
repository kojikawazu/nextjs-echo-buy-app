'use client';

import React, { useState } from 'react';
// types
import { PaymentHistoryItem } from '@/app/types/payment-types';

interface PaymentHistoryProps {
    orderList: PaymentHistoryItem[];
}

/**
 * 支払い履歴
 * @returns JSX.Element
 */
const PaymentHistory = ({ orderList }: PaymentHistoryProps) => {
    const [history,] = useState<PaymentHistoryItem[]>(orderList);
    //const [loading, setLoading] = useState(false);
    //const [error, setError] = useState<string | null>(null);

    // useEffect(() => {
    //     const fetchPaymentHistory = async () => {
    //         try {
    //             const response = await axios.get(`/api/stripe/payment-history`);
    //             setHistory(response.data);
    //         } catch (err) {
    //             setError('支払い履歴の取得中にエラーが発生しました');
    //             console.error(err);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchPaymentHistory();
    // }, []);

    //if (loading) return <div>読み込み中...</div>;
    //if (error) return <div>エラー: {error}</div>;

    const formatCurrency = (amount: number, currency: string) => {
        return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: currency }).format(amount);
    };

    return (
        <div className="overflow-x-auto">
            {history.length === 0 ? (
                <p>購入履歴がありません。</p>
            ) : (
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b">日付</th>
                            <th className="py-2 px-4 border-b">顧客</th>
                            <th className="py-2 px-4 border-b">金額</th>
                            <th className="py-2 px-4 border-b">支払い方法</th>
                            <th className="py-2 px-4 border-b">ステータス</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{new Date(item.created).toLocaleDateString('ja-JP')}</td>
                                <td className="py-2 px-4 border-b">
                                    {item.isGuest ? 'ゲスト' : item.customerEmail}<br />
                                    <span className="text-sm text-gray-500">{item.customerName}</span>
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <span className="mr-2">{formatCurrency(item.amount, item.currency)}</span>
                                    <span className="text-sm text-gray-500">{item.currency}</span>
                                </td>
                                <td className="py-2 px-4 border-b">{item.paymentMethod}</td>
                                <td className="py-2 px-4 border-b">
                                    <span className={`px-2 py-1 rounded ${item.paymentStatus === 'paid' ? 'bg-green-200 text-green-800' :
                                        item.paymentStatus === 'unpaid' ? 'bg-red-200 text-red-800' :
                                            'bg-yellow-200 text-yellow-800'
                                        }`}>
                                        {item.paymentStatus}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default PaymentHistory;