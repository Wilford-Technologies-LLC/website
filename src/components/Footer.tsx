import Link from "next/link";
import type { Dict, Locale } from "@/content/i18n";
import { company } from "@/content/site";

export default function Footer({ lang, t }: { lang: Locale; t: Dict }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">{company[lang].name}</p>
          <p className="footer-copy">© {new Date().getFullYear()} Wilford Technologies LLC</p>
        </div>
        <nav className="footer-nav">
          <Link href={`/${lang}/about/`}>{t.nav.about}</Link>
          <Link href={`/${lang}/apps/`}>{t.nav.apps}</Link>
          <Link href={`/${lang}/contact/`}>{t.nav.contact}</Link>
          <Link href={`/${lang}/privacy/`}>{t.nav.privacy}</Link>
        </nav>
      </div>
    </footer>
  );
}
