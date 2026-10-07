# Wilford Technologies LLC Website

ウィルフォード・テクノロジーズ合同会社のコーポレートサイトです。Next.js の静的書き出し（`output: "export"`）で作り、GitHub Pages（`https://wilford.co.jp`）で公開します。

## 開発

```bash
npm install
npm run dev      # http://localhost:3000/ja/ で確認
npm run build    # out/ に静的ファイルを書き出し
npm run lint     # 型チェック
```

## 内容の編集

| 変えたいもの | ファイル |
|---|---|
| 会社概要（代表者・所在地など）、お問い合わせフォームの URL、アプリ一覧 | `src/content/site.ts` |
| 各ページの文章（日本語・英語） | `src/content/i18n.ts` |
| プライバシーポリシー | `src/content/privacy.ts` |
| デザイン（色・余白など） | `src/app/globals.css` |
| ロゴ・アイコン画像 | `public/images/`, `public/icon.png`, `public/apple-icon.png` |

## ページ構成

`/` はブラウザの言語に応じて `/ja/` または `/en/` に振り分けます。

- `/ja/`, `/en/` — トップ
- `/{lang}/about/` — 会社概要
- `/{lang}/apps/` — アプリ
- `/{lang}/contact/` — お問い合わせ（Google フォームへのリンク）
- `/{lang}/privacy/` — プライバシーポリシー

## 公開（GitHub Pages）

`main` ブランチに push すると `.github/workflows/deploy.yml` が自動でビルドし公開します。初回のみ次の設定が必要です。

1. リポジトリの **Settings → Pages → Build and deployment → Source** を **GitHub Actions** にする
2. 同じ画面の **Custom domain** に `wilford.co.jp` を入力し、**Enforce HTTPS** を有効にする
3. ドメインの DNS に次のレコードを追加する
   - `A` レコード（`@`）: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www` を使う場合は `CNAME` レコード（`www`）: `wilford-technologies-llc.github.io`
