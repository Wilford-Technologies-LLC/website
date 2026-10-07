import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wilford Technologies LLC",
  icons: { icon: "/icon.png" },
};

// 静的サイトのため、ブラウザの言語設定を見て /ja/ か /en/ へ振り分ける
const script = `(function(){var l=(navigator.language||"").toLowerCase();location.replace(l.indexOf("ja")===0?"/ja/":"/en/");})();`;

export default function RootRedirect() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <noscript>
        <meta httpEquiv="refresh" content="0; url=/ja/" />
      </noscript>
      <p style={{ padding: 24, fontFamily: "sans-serif" }}>
        <a href="/ja/">日本語</a> / <a href="/en/">English</a>
      </p>
    </>
  );
}
