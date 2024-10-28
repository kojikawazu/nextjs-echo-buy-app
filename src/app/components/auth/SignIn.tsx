// components
import SignInForm from '@/app/components/auth/SignInForm';

/**
 * サインイン
 * @returns JSX.Element
 */
const SignIn = () => {
    return (
        <>
            <h1 className="text-4xl font-bold mb-8">サインイン</h1>
            <SignInForm />
        </>
    );
};

export default SignIn;
