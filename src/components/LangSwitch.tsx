"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/content/i18n";

// 現在のページのまま言語だけを切り替える
export default function LangSwitch({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname() ?? `/${lang}/`;
  const other: Locale = lang === "ja" ? "en" : "ja";
  const href = pathname.replace(new RegExp(`^/${lang}(?=/|$)`), `/${other}`);
  return (
    <Link href={href} className="lang-switch" hrefLang={other} lang={other}>
      {label}
    </Link>
  );
}
