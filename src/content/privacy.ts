import type { Locale } from "./i18n";

// 一般的なアプリ開発会社向けのひな形です。正式に運用する前に内容をご確認ください。
export const privacyUpdated = { ja: "2026年10月7日 制定", en: "Effective: October 7, 2026" };

type Section = { heading: string; body: string[] };

export const privacy: Record<Locale, { intro: string; sections: Section[] }> = {
  ja: {
    intro:
      "ウィルフォード・テクノロジーズ合同会社（以下「当社」）は、当社が提供するアプリケーションおよびウェブサイト（以下「本サービス」）における利用者の個人情報の取扱いについて、以下のとおりプライバシーポリシーを定めます。",
    sections: [
      {
        heading: "1. 取得する情報",
        body: [
          "当社は、本サービスの提供にあたり、以下の情報を取得することがあります。",
          "・お問い合わせ時にご提供いただく氏名、メールアドレス等の情報",
          "・端末の種類、OS のバージョン、アプリの利用状況、クラッシュログ等の情報",
          "・本サービスの機能上必要な範囲で、利用者が入力・許可した情報",
        ],
      },
      {
        heading: "2. 利用目的",
        body: [
          "当社は、取得した情報を以下の目的で利用します。",
          "・本サービスの提供、維持、改善のため",
          "・お問い合わせへの対応のため",
          "・不具合の調査および不正利用の防止のため",
          "・新機能やお知らせ等のご案内のため",
        ],
      },
      {
        heading: "3. 第三者提供",
        body: [
          "当社は、法令に基づく場合を除き、利用者の同意なく個人情報を第三者に提供しません。",
        ],
      },
      {
        heading: "4. 外部サービスの利用",
        body: [
          "本サービスでは、アクセス解析、クラッシュレポート、広告配信等のために第三者のサービスを利用する場合があります。これらのサービスは各提供者のプライバシーポリシーに基づいて情報を取り扱います。利用するサービスの詳細は、各アプリのストアページまたは本ページでお知らせします。",
        ],
      },
      {
        heading: "5. 安全管理",
        body: [
          "当社は、取得した情報の漏えい、滅失または毀損を防止するため、必要かつ適切な安全管理措置を講じます。",
        ],
      },
      {
        heading: "6. 開示・訂正・削除",
        body: [
          "利用者は、当社が保有する自己の個人情報について、開示、訂正、利用停止、削除を求めることができます。ご希望の場合は、お問い合わせページよりご連絡ください。",
        ],
      },
      {
        heading: "7. 子どものプライバシー",
        body: [
          "本サービスは、13歳未満の子どもから意図的に個人情報を取得することはありません。",
        ],
      },
      {
        heading: "8. 本ポリシーの変更",
        body: [
          "当社は、必要に応じて本ポリシーを変更することがあります。変更後のポリシーは、本ページに掲載した時点から効力を生じます。",
        ],
      },
      {
        heading: "9. お問い合わせ窓口",
        body: ["本ポリシーに関するお問い合わせは、お問い合わせページよりご連絡ください。"],
      },
    ],
  },
  en: {
    intro:
      'Wilford Technologies LLC ("we", "us") sets out this Privacy Policy to explain how we handle personal information in the applications and website we provide (the "Services").',
    sections: [
      {
        heading: "1. Information we collect",
        body: [
          "We may collect the following information when providing the Services:",
          "• Information you provide when contacting us, such as your name and email address",
          "• Device type, OS version, app usage and crash logs",
          "• Information you enter or permit, to the extent required for app features",
        ],
      },
      {
        heading: "2. How we use information",
        body: [
          "We use the information we collect to:",
          "• Provide, maintain and improve the Services",
          "• Respond to your inquiries",
          "• Investigate bugs and prevent misuse",
          "• Inform you about new features and announcements",
        ],
      },
      {
        heading: "3. Sharing with third parties",
        body: ["We do not share personal information with third parties without your consent, except as required by law."],
      },
      {
        heading: "4. Third-party services",
        body: [
          "The Services may use third-party services for analytics, crash reporting or advertising. These services handle information under their own privacy policies. Details of the services we use are provided on each app's store page or on this page.",
        ],
      },
      {
        heading: "5. Security",
        body: ["We take necessary and appropriate measures to protect information against leakage, loss or damage."],
      },
      {
        heading: "6. Access, correction and deletion",
        body: [
          "You may request access to, correction, suspension of use or deletion of your personal information held by us. Please contact us via our Contact page.",
        ],
      },
      {
        heading: "7. Children's privacy",
        body: ["The Services do not knowingly collect personal information from children under 13."],
      },
      {
        heading: "8. Changes to this policy",
        body: ["We may update this policy as needed. Changes take effect when posted on this page."],
      },
      {
        heading: "9. Contact",
        body: ["For questions about this policy, please contact us via our Contact page."],
      },
    ],
  },
};
