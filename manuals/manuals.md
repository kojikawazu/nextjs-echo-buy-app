# マニュアル

## インストール

```bash
# ESLintとPrettierをインストール
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
# next-authをインストール
npm install next-auth
# zodとreact-hook-formをインストール
npm install zod react-hook-form @hookform/resolvers
# Stripeをインストール
npm install stripe @stripe/stripe-js @stripe/react-stripe-js
# SWRをインストール
npm install swr
# axiosをインストール
npm install axios
```

## ランダムなシークレットキーを生成

```bash
openssl rand -base64 32
```

## GitHub OAuth アプリケーションの設定を確認

1. GitHub の設定ページ（Settings > Developer settings > OAuth Apps）に移動。
2. 「あなたのアプリケーション」を選択し、「Authorization callback URL」を確認。
3. この URL が http://localhost:3000/api/auth/callback/github（開発環境の場合）または https://あなたのドメイン/api/auth/callback/github（本番環境の場合）になっているか確認すること。

```txt:環境変数
GITHUB_ID=
GITHUB_SECRET=
```

## Stripe のキーを取得

1. Stripeアカウントにログイン
    - まず、Stripeのウェブサイトにアクセスし、アカウントにログインします。アカウントをお持ちでない場合は、新規登録が必要です。
2. ダッシュボードに移動
    - ログイン後、Stripeダッシュボードに移動します。
3. 開発者セクションを見つける
    - ダッシュボードの左側のメニューから「開発者」（Developers）セクションを探します。
4. APIキーを表示 -「APIキー」（API keys）をクリックします。
5. キーの確認
    - このページで以下の2種類のキーが表示されます：
        - 公開可能キー（Publishable key）: pk*test* で始まります。
        - シークレットキー（Secret key）: sk*test* で始まります。

-   テストモードと本番モード:
    -   デフォルトではテストモードのキーが表示されます。
-   本番環境用のキーを取得するには、右上の「テストデータを表示」（Viewing test data）スイッチをオフにします。
    -   キーをコピー:

```txt:環境変数
STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```
