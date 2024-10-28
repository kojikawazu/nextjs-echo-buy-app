import { getServerSession } from 'next-auth/next';

// lib
import { authOptions } from '@/app/lib/auth/auth';
// components
import DashboardMain from '@/app/components/dashboard/DashboardMain';

/**
 * ダッシュボード
 * @returns JSX.Element
 */
const DashboardPage = async () => {
    const session = await getServerSession(authOptions);

    return (
        <div className="container mx-auto p-4">
            <DashboardMain name={session?.user?.name} />
        </div>
    );
};

export default DashboardPage;
