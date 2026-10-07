// 会社情報・外部リンクはこのファイルにまとめています。
// 「〇〇」や TODO の箇所は正式な情報が決まりしだい差し替えてください。

export const site = {
  url: "https://wilford.co.jp",
  // お問い合わせ用 Google フォームの URL（TODO: 作成後に差し替え）
  contactFormUrl: "https://forms.gle/REPLACE_ME",
} as const;

export const company = {
  ja: {
    name: "ウィルフォード・テクノロジーズ合同会社",
    representative: "代表社員 〇〇 〇〇", // TODO
    address: "〒000-0000 〇〇県〇〇市〇〇", // TODO
    founded: "20〇〇年〇月〇日", // TODO
    capital: "〇〇万円", // TODO
    business: ["スマートフォンアプリの企画・開発・運営", "Webサービスの企画・開発・運営"],
  },
  en: {
    name: "Wilford Technologies LLC",
    representative: "Representative Member: TBD", // TODO
    address: "TBD, Japan", // TODO
    founded: "TBD", // TODO
    capital: "TBD", // TODO
    business: [
      "Planning, development and operation of mobile apps",
      "Planning, development and operation of web services",
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
