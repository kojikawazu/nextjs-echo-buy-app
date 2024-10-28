import LogoutBtn from '@/app/components/auth/LogoutBtn';
import Link from 'next/link';

interface DashboardMainProps {
    name?: string | null | undefined;
}

/**
 * ダッシュボードメイン
 * @param name
 * @returns JSX.Element
 */
const DashboardMain = ({ name }: DashboardMainProps) => {
    return (
        <>
            <LogoutBtn />

            <h1 className="text-2xl font-bold mb-4">ダッシュボード</h1>
            {name && <p className="mb-4">ようこそ、{name}さん！</p>}
            {/* ここにダッシュボードの内容を追加 */}
            <div className="mb-4">
                <Link href="/albums/list">商品一覧</Link>
            </div>
        </>
    );
};

export default DashboardMain;
