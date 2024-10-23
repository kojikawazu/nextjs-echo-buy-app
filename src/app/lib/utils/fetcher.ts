/**
 * fetcher
 * @param url リクエストURL
 * @returns レスポンスデータ
 */
export const fetcher = (url: string) => fetch(url).then((res) => res.json());
