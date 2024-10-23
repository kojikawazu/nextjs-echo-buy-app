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
npm install @stripe/stripe-js @stripe/react-stripe-js
# SWRをインストール
npm install swr
```

## ランダムなシークレットキーを生成

```bash
openssl rand -base64 32
```

## GitHub OAuth アプリケーションの設定を確認

-   1. GitHub の設定ページ（Settings > Developer settings > OAuth Apps）に移動。
-   2. 「あなたのアプリケーション」を選択し、「Authorization callback URL」を確認。
-   3. この URL が http://localhost:3000/api/auth/callback/github（開発環境の場合）または https://あなたのドメイン/api/auth/callback/github（本番環境の場合）になっているか確認すること。
