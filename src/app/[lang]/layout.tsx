import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Montserrat, Noto_Sans_JP } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { dict, isLocale, locales } from "@/content/i18n";
import { site } from "@/content/site";
import "../globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-display" });
const notoSansJp = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-body" });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = dict[lang];
  return {
    metadataBase: new URL(site.url),
    title: { default: t.meta.title, template: `%s | ${t.meta.title}` },
    description: t.meta.description,
    icons: { icon: "/icon.png", apple: "/apple-icon.png" },
    alternates: { languages: { ja: "/ja/", en: "/en/" } },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      images: ["/images/og.jpg"],
      locale: lang === "ja" ? "ja_JP" : "en_US",
      type: "website",
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = dict[lang];
  return (
    <html lang={lang} className={`${montserrat.variable} ${notoSansJp.variable}`}>
      <body>
        <Header lang={lang} t={t} />
        <main>{children}</main>
        <Footer lang={lang} t={t} />
      </body>
    </html>
  );
}
