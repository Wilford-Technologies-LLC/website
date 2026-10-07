import Link from "next/link";
import { dict, type Locale } from "@/content/i18n";

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = dict[lang];
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">{t.home.eyebrow}</p>
            <h1 className="hero-title">{t.home.title}</h1>
            <p className="lead">{t.home.lead}</p>
            <div className="actions">
              <Link href={`/${lang}/apps/`} className="btn btn-primary">
                {t.home.ctaApps}
              </Link>
              <Link href={`/${lang}/contact/`} className="btn btn-ghost">
                {t.home.ctaContact}
              </Link>
            </div>
          </div>
          <img className="hero-mark" src="/images/logo-mark.png" alt="" width={400} height={275} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t.home.valuesTitle}</h2>
          <div className="cards">
            {t.home.values.map((v, i) => (
              <div key={v.title} className="card">
                <span className="card-num">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
