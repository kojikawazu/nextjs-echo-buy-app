import Link from 'next/link';

// types
import { AlbumDataType } from '@/app/types/album-types';
// components
import LogoutBtn from '@/app/components/auth/LogoutBtn';
import PaymentButton from '@/app/components/stripe/common/PaymentBtn';

interface AlbumDetailProps {
    album: AlbumDataType;
}

/**
 * アルバム詳細
 * @param album
 * @returns JSX.Element
 */
const AlbumDetail = ({ album }: AlbumDetailProps) => {
    return (
        <>
            <LogoutBtn />

            <div className="flex justify-center items-center">
                <h1 className="text-2xl font-bold mb-4">アルバム詳細</h1>
            </div>

            <Link
                href="/dashboard/list"
                className="text-blue-500 hover:underline mb-4 inline-block"
            >
                ← アルバムリストに戻る
            </Link>
            <div className="bg-white shadow-lg rounded-lg p-6 mt-4">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">アルバム {album.id}</h2>
                    <p className="text-gray-600 mt-2">{album.title}</p>
                </div>
                <div className="mt-4">
                    <p className="text-sm text-gray-500">ユーザーID: {album.userId}</p>
                </div>
                <div className="mt-6">
                    <PaymentButton amount={1000} productName={`アルバム ${album.id}`} />
                </div>
            </div>
        </>
    );
};

export default AlbumDetail;
