/**
 * 通貨をフォーマット
 * @param amount 金額
 * @param currency 通貨
 * @returns フォーマットされた通貨
 */
export const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: currency }).format(amount);
};
