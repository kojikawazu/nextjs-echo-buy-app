'use client';
import useSWR from 'swr';

// types
import { AlbumDataType } from '@/app/types/album-types';
// utils
import { fetcher } from '@/app/lib/utils/fetcher';
// components
import LogoutBtn from '@/app/components/auth/LogoutBtn';
import Link from 'next/link';

type DetailPageProps = {
    params: {
        albumId: string;
    };
};

/**
 * アルバム詳細ページ
 * @param params albumId
 * @returns JSX.Element
 */
const DetailPage = ({ params }: DetailPageProps) => {
    // アルバムID
    const { albumId } = params;
    // アルバムAPI URL
    const url = `${process.env.NEXT_PUBLIC_DATA_ALBUM_API_URL}/${albumId}`;

    // アルバムデータを取得
    const { data: album, error } = useSWR<AlbumDataType>(
        url,
        fetcher,
    );

    if (error) return <div className="text-center text-red-500">Error: {error.message}</div>;
    if (!album) return <div className="text-center">Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <LogoutBtn />

            <div className="flex justify-center items-center">
                <h1 className="text-2xl font-bold mb-4">アルバム詳細</h1>
            </div>

            <Link href="/dashboard/list" className="text-blue-500 hover:underline mb-4 inline-block">
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
            </div>
        </div>
    );
};

export default DetailPage;
