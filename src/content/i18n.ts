export const locales = ["ja", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const dict = {
  ja: {
    meta: {
      title: "ウィルフォード・テクノロジーズ合同会社",
      description:
        "ウィルフォード・テクノロジーズ合同会社は、日々の暮らしや仕事を便利にするアプリを開発するソフトウェア会社です。",
    },
    nav: { home: "ホーム", about: "会社概要", apps: "アプリ", contact: "お問い合わせ", privacy: "プライバシーポリシー" },
    switchTo: "English",
    home: {
      eyebrow: "App Development",
      title: "テクノロジーで、\n毎日をもっと軽やかに。",
      lead: "ウィルフォード・テクノロジーズは、使う人の暮らしや仕事に自然になじむアプリを企画・開発しています。",
      ctaApps: "アプリを見る",
      ctaContact: "お問い合わせ",
      valuesTitle: "私たちが大切にしていること",
      values: [
        { title: "シンプル", body: "迷わず使える、わかりやすい体験を目指します。" },
        { title: "信頼", body: "プライバシーとセキュリティに配慮した設計を徹底します。" },
        { title: "改善し続ける", body: "ユーザーの声をもとに、公開後もアプリを育てていきます。" },
      ],
    },
    about: {
      title: "会社概要",
      labels: { name: "商号", representative: "代表者", address: "所在地", founded: "設立", capital: "資本金", business: "事業内容" },
    },
    apps: {
      title: "アプリ",
      lead: "ウィルフォード・テクノロジーズが開発・提供するアプリです。",
      comingSoon: "近日公開",
    },
    contact: {
      title: "お問い合わせ",
      lead: "アプリやお仕事のご相談など、お気軽にお問い合わせください。以下のフォームからご連絡いただけます。",
      button: "お問い合わせフォームを開く",
      note: "Google フォームが新しいタブで開きます。",
      preparing: "お問い合わせフォームは現在準備中です。公開まで今しばらくお待ちください。",
    },
    privacy: { title: "プライバシーポリシー" },
  },
  en: {
    meta: {
      title: "Wilford Technologies LLC",
      description:
        "Wilford Technologies LLC is a software company building apps that make everyday life and work easier.",
    },
    nav: { home: "Home", about: "Company", apps: "Apps", contact: "Contact", privacy: "Privacy Policy" },
    switchTo: "日本語",
    home: {
      eyebrow: "App Development",
      title: "Technology that makes\nevery day lighter.",
      lead: "Wilford Technologies designs and builds apps that fit naturally into the way people live and work.",
      ctaApps: "Our apps",
      ctaContact: "Contact us",
      valuesTitle: "What we value",
      values: [
        { title: "Simplicity", body: "Clear, intuitive experiences anyone can use without a manual." },
        { title: "Trust", body: "Privacy and security are built in from the very first line of code." },
        { title: "Continuous improvement", body: "We keep growing our apps with feedback from real users." },
      ],
    },
    about: {
      title: "Company",
      labels: { name: "Company name", representative: "Representative", address: "Address", founded: "Founded", capital: "Capital", business: "Business" },
    },
    apps: {
      title: "Apps",
      lead: "Apps developed and published by Wilford Technologies.",
      comingSoon: "Coming soon",
    },
    contact: {
      title: "Contact",
      lead: "For questions about our apps or business inquiries, please reach out using the form below.",
      button: "Open the contact form",
      note: "The Google Form opens in a new tab.",
      preparing: "Our contact form is coming soon. Thank you for your patience.",
    },
    privacy: { title: "Privacy Policy" },
  },
} as const;

export type Dict = (typeof dict)[Locale];
