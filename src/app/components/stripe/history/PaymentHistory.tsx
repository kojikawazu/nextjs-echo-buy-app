// types
import { PaymentHistoryItem } from '@/app/types/payment-types';
// components
import PaymentHistoryList from '@/app/components/stripe/history/PaymentHistoryList';
import GoBackToAlbumList from '@/app/components/albums/GoBackToAlbumList';

interface PaymentHistoryProps {
    orderList: PaymentHistoryItem[];
}

/**
 * 支払い履歴
 * @param orderList 購入リスト
 * @returns JSX.Element
 */
const PaymentHistory = ({ orderList }: PaymentHistoryProps) => {
    return (
        <>
            <div className="flex justify-center items-center m-4">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold mb-4">購入履歴ページ</h1>
                    <GoBackToAlbumList />
                </div>
            </div>

            <PaymentHistoryList orderList={orderList} />
        </>
    );
};

export default PaymentHistory;
