'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { signInSchema } from '@/app/lib/schema/auth-schema';

/**
 * サインインフォームデータ
 */
type SignInFormData = z.infer<typeof signInSchema>;

/**
 * サインインページ
 * @returns JSX.Element
 */
export default function SignIn() {
    // ルーター
    const router = useRouter();
    // フォーム
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<SignInFormData>({
        resolver: zodResolver(signInSchema),
    });

    /**
     * サインイン
     * @param data サインインフォームデータ
     */
    const onSubmit = async (data: SignInFormData) => {
        try {
            const result = await signIn('credentials', {
                email: data.email,
                password: data.password,
                redirect: false,
            });

            if (result?.ok) {
                router.push('/dashboard');
            } else if (result?.error) {
                setError('root', { message: 'サインインに失敗しました。' });
            } else {
                setError('root', { message: '予期せぬエラーが発生しました。' });
            }
        } catch (error) {
            console.error(error);
            setError('root', { message: '予期せぬエラーが発生しました。' });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-8">サインイン</h1>
            {errors.root && <p className="text-red-500 mb-4">{errors.root.message}</p>}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(onSubmit)(e);
                }}
                className="w-full max-w-xs"
            >
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        メールアドレス
                    </label>
                    <input
                        {...register('email')}
                        type="email"
                        id="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        パスワード
                    </label>
                    <input
                        {...register('password')}
                        type="password"
                        id="password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        サインイン
                    </button>
                </div>
            </form>
            <div className="mt-8">
                <button
                    onClick={() => signIn('github')}
                    className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    GitHubでサインイン
                </button>
            </div>
        </div>
    );
}
