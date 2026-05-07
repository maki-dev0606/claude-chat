# Claude Chat

Claude API（claude-sonnet-4-6）を使ったシンプルなチャットUIです。  
Next.js + Vercel AI SDK で実装し、ストリーミングでリアルタイムに返答を表示します。

## 技術スタック

- [Next.js](https://nextjs.org/) (App Router)
- [Vercel AI SDK](https://sdk.vercel.ai/) (`ai` v6 / `@ai-sdk/react` v3)
- [@ai-sdk/anthropic](https://sdk.vercel.ai/providers/ai-sdk-providers/anthropic)
- Tailwind CSS

## セットアップ

### 1. 依存パッケージのインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local` を作成し、Anthropic の API キーを設定します。

```
ANTHROPIC_API_KEY=your_api_key_here
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開いてください。

## 構成

```
app/
├── api/chat/route.ts   # サーバー側：Claude APIをストリーミング呼び出し
└── page.tsx            # クライアント側：チャット画面
```
