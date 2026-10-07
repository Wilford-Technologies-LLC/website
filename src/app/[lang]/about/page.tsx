import type { Metadata } from "next";
import { dict, type Locale } from "@/content/i18n";
import { company } from "@/content/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: dict[lang].about.title };
}

export default async function About({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = dict[lang].about;
  const c = company[lang];
  const rows = [
    [t.labels.name, c.name],
    [t.labels.representative, c.representative],
    [t.labels.address, c.address],
    [t.labels.founded, c.founded],
    [t.labels.capital, c.capital],
  ];
  return (
    <section className="section page">
      <div className="container narrow">
        <h1 className="page-title">{t.title}</h1>
        <dl className="info-table">
          {rows.map(([label, value]) => (
            <div key={label} className="info-row">
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
          <div className="info-row">
            <dt>{t.labels.business}</dt>
            <dd>
              <ul>
                {c.business.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
