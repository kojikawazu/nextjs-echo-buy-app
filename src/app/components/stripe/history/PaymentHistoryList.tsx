'use client';

import { useState } from 'react';

// utils
import { formatCurrency } from '@/app/lib/utils/formatter';
// types
import { PaymentHistoryItem } from '@/app/types/payment-types';

interface PaymentHistoryListProps {
    orderList: PaymentHistoryItem[];
}

/**
 * 支払い履歴
 * @param orderList 購入リスト
 * @returns JSX.Element
 */
const PaymentHistoryList = ({ orderList }: PaymentHistoryListProps) => {
    const [history] = useState<PaymentHistoryItem[]>(orderList);

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
                                <td className="py-2 px-4 border-b">
                                    {new Date(item.created).toLocaleDateString('ja-JP')}
                                </td>
                                <td className="py-2 px-4 border-b">
                                    {item.isGuest ? 'ゲスト' : item.customerEmail}
                                    <br />
                                    <span className="text-sm text-gray-500">
                                        {item.customerName}
                                    </span>
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <span className="mr-2">
                                        {formatCurrency(item.amount, item.currency)}
                                    </span>
                                    <span className="text-sm text-gray-500">{item.currency}</span>
                                </td>
                                <td className="py-2 px-4 border-b">{item.paymentMethod}</td>
                                <td className="py-2 px-4 border-b">
                                    <span
                                        className={`px-2 py-1 rounded ${
                                            item.paymentStatus === 'paid'
                                                ? 'bg-green-200 text-green-800'
                                                : item.paymentStatus === 'unpaid'
                                                  ? 'bg-red-200 text-red-800'
                                                  : 'bg-yellow-200 text-yellow-800'
                                        }`}
                                    >
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

export default PaymentHistoryList;
