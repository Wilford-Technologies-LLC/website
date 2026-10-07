// 会社情報・外部リンクはこのファイルにまとめています。
// TODO の箇所は正式な情報が決まりしだい差し替えてください。

export const site = {
  url: "https://wilford.co.jp",
  // お問い合わせ用 Google フォームの URL（TODO: 作成後に設定。空のあいだは「準備中」と表示）
  contactFormUrl: "" as string,
} as const;

export const company = {
  ja: {
    name: "ウィルフォード・テクノロジーズ合同会社",
    representative: "代表社員 柳瀬 崇",
    address: "〒116-0012 東京都荒川区東尾久4-24-12",
    founded: "2026年11月11日",
    capital: "30万円",
    business: [
      "スマートフォンアプリの企画・開発・運営",
      "Webサービスの企画・開発・運営",
      "AIコンサルティング",
      "研究開発",
      "海外情報調査",
    ],
  },
  en: {
    name: "Wilford Technologies LLC",
    representative: "Takashi Yanase, Representative Member",
    address: "4-24-12 Higashiogu, Arakawa-ku, Tokyo 116-0012, Japan",
    founded: "November 11, 2026",
    capital: "JPY 300,000",
    business: [
      "Planning, development and operation of mobile apps",
      "Planning, development and operation of web services",
      "AI consulting",
      "Research and development",
      "Overseas information research",
    ],
  },
} as const;

// 公開アプリ一覧。ストアの URL が決まったら storeUrls に追加します。
export type App = {
  name: string;
  status: "coming-soon" | "available";
  description: { ja: string; en: string };
  storeUrls?: { appStore?: string; googlePlay?: string };
};

export const apps: App[] = [
  {
    name: "Coming Soon",
    status: "coming-soon",
    description: {
      ja: "現在、最初のアプリを開発しています。公開まで今しばらくお待ちください。",
      en: "We are currently building our first app. Stay tuned.",
    },
  },
];
