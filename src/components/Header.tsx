import Link from "next/link";
import type { Dict, Locale } from "@/content/i18n";
import LangSwitch from "./LangSwitch";

export default function Header({ lang, t }: { lang: Locale; t: Dict }) {
  const nav = [
    { href: `/${lang}/about/`, label: t.nav.about },
    { href: `/${lang}/apps/`, label: t.nav.apps },
    { href: `/${lang}/contact/`, label: t.nav.contact },
  ];
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href={`/${lang}/`} className="brand" aria-label={t.meta.title}>
          <img src="/images/logo-mark.png" alt="" width={40} height={28} />
          <span className="brand-text">
            <span className="brand-name">Wilford</span>
            <span className="brand-sub">Technologies</span>
          </span>
        </Link>
        <nav className="nav">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <LangSwitch lang={lang} label={t.switchTo} />
        </nav>
      </div>
    </header>
  );
}
