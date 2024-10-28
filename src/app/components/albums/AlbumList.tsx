import Link from 'next/link';

// types
import { AlbumDataType } from '@/app/types/album-types';
// components
import LogoutBtn from '@/app/components/auth/LogoutBtn';

interface AlbumListProps {
    data: AlbumDataType[];
}

/**
 * アルバムリスト
 * @param data アルバムデータ
 * @returns JSX.Element
 */
const AlbumList = ({ data }: AlbumListProps) => {
    return (
        <>
            <LogoutBtn />

            <div className="flex justify-center items-center">
                <h1 className="text-2xl font-bold mb-4">リスト</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((item) => (
                    <Link href={`/albums/detail/${item.id}`} key={item.id}>
                        <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                            <h2 className="text-xl font-semibold mb-2">アルバム {item.id}</h2>
                            <p className="text-gray-600 mt-2">{item.title}</p>
                            {/* <p className="text-sm text-gray-500 mt-2">ユーザーID: {item.userId}</p> */}
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default AlbumList;
