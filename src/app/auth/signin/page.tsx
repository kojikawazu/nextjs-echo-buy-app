import SignIn from '@/app/components/auth/SignIn';

/**
 * サインインページ
 * @returns JSX.Element
 */
const SignInPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <SignIn />
        </div>
    );
};

export default SignInPage;
