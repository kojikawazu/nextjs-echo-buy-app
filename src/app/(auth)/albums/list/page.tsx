'use client';

import useSWR from 'swr';

// types
import { AlbumDataType } from '@/app/types/album-types';
// utils
import { fetcher } from '@/app/lib/utils/fetcher';
// components
import AlbumList from '@/app/components/albums/AlbumList';

/**
 * Albumリストページ
 * @returns JSX.Element
 */
const AlbumListPage = () => {
    // アルバムAPI URL
    const url = process.env.NEXT_PUBLIC_DATA_ALBUMS_API_URL as string;
    // アルバムデータを取得
    const { data, error } = useSWR<AlbumDataType[]>(url, fetcher);

    if (error) return <div>Error: {error.message}</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <AlbumList data={data} />
        </div>
    );
};

export default AlbumListPage;
