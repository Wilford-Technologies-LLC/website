import type { Metadata } from "next";
import { dict, type Locale } from "@/content/i18n";
import { privacy, privacyUpdated } from "@/content/privacy";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: dict[lang].privacy.title };
}

export default async function Privacy({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const p = privacy[lang];
  return (
    <section className="section page">
      <div className="container narrow prose">
        <h1 className="page-title">{dict[lang].privacy.title}</h1>
        <p>{p.intro}</p>
        {p.sections.map((s) => (
          <div key={s.heading}>
            <h2>{s.heading}</h2>
            {s.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        ))}
        <p className="note">{privacyUpdated[lang]}</p>
      </div>
    </section>
  );
}
