// components
import GoBackToAlbumList from '@/app/components/albums/GoBackToAlbumList';

/**
 * 支払いキャンセル
 * @returns JSX.Element
 */
const PaymentCancel = () => {
    return (
        <>
            <h1 className="text-3xl font-bold mb-4">支払いがキャンセルされました</h1>
            <p className="mb-4">支払いプロセスが中断されました。もう一度お試しください。</p>
            <GoBackToAlbumList />
        </>
    );
};

export default PaymentCancel;
