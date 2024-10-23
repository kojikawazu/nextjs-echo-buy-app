import { z } from 'zod';

/**
 * サインインスキーマ
 */
export const signInSchema = z.object({
    email: z.string().email('有効なメールアドレスを入力してください'),
    password: z.string().min(8, 'パスワードは8文字以上である必要があります'),
});
