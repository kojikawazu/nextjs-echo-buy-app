import { getServerSession } from 'next-auth/next';

import { authOptions } from '@/app/lib/auth/auth';
import LogoutBtn from '@/app/components/auth/LogoutBtn';

/**
 * ダッシュボード
 * @returns JSX.Element
 */
const DashboardPage = async () => {
    const session = await getServerSession(authOptions);

    return (
        <div className="container mx-auto p-4">
            <LogoutBtn />
            <h1 className="text-2xl font-bold mb-4">ダッシュボード</h1>
            <p>ようこそ、{session?.user?.name}さん！</p>
            {/* ここにダッシュボードの内容を追加 */}
        </div>
    );
};

export default DashboardPage;
