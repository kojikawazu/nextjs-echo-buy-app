import LogoutBtn from '@/app/components/auth/LogoutBtn';

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
            {name && <p>ようこそ、{name}さん！</p>}
            {/* ここにダッシュボードの内容を追加 */}
        </>
    );
};

export default DashboardMain;
