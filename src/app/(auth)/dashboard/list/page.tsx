'use client';

import useSWR from 'swr';

// types
import { AlbumDataType } from '@/app/types/album-types';
// utils
import { fetcher } from '@/app/lib/utils/fetcher';
// components
import LogoutBtn from '@/app/components/auth/LogoutBtn';
import Link from 'next/link';

/**
 * リストページ
 * @returns JSX.Element
 */
const ListPage = () => {
    // アルバムAPI URL
    const url = process.env.NEXT_PUBLIC_DATA_ALBUMS_API_URL as string;
    // アルバムデータを取得
    const { data, error } = useSWR<AlbumDataType[]>(
        url,
        fetcher,
    );

    if (error) return <div>Error: {error.message}</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <LogoutBtn />
            <div className="flex justify-center items-center">
                <h1 className="text-2xl font-bold mb-4">リスト</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((item) => (
                    <Link href={`/dashboard/detail/${item.id}`} key={item.id}>
                        <div
                            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
                        >
                            <h2 className="text-xl font-semibold mb-2">アルバム {item.id}</h2>
                            <p className="text-gray-600">{item.title}</p>
                            <p className="text-sm text-gray-500 mt-2">ユーザーID: {item.userId}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ListPage;
