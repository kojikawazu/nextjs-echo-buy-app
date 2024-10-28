import Link from 'next/link';

const GoBackToAlbumList = () => {
    return (
        <>
            <Link href="/albums/list" className="text-blue-500 hover:underline">
                アルバムリストに戻る
            </Link>
        </>
    );
};

export default GoBackToAlbumList;
