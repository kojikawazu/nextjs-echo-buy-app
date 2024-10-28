'use client';

import useSWR from 'swr';

// types
import { AlbumDataType } from '@/app/types/album-types';
// utils
import { fetcher } from '@/app/lib/utils/fetcher';
// components
import AlbumDetail from '@/app/components/albums/AlbumDetail';

type AlbumDetailPageProps = {
    params: {
        albumId: string;
    };
};

/**
 * アルバム詳細ページ
 * @param params albumId
 * @returns JSX.Element
 */
const AlbumDetailPage = ({ params }: AlbumDetailPageProps) => {
    // アルバムID
    const { albumId } = params;
    // アルバムAPI URL
    const url = `${process.env.NEXT_PUBLIC_DATA_ALBUM_API_URL}/${albumId}`;

    // アルバムデータを取得
    const { data: album, error } = useSWR<AlbumDataType>(url, fetcher);

    if (error) return <div className="text-center text-red-500">Error: {error.message}</div>;
    if (!album) return <div className="text-center">Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <AlbumDetail album={album} />
        </div>
    );
};

export default AlbumDetailPage;
