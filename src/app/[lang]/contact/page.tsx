import type { Metadata } from "next";
import { dict, type Locale } from "@/content/i18n";
import { site } from "@/content/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: dict[lang].contact.title };
}

export default async function Contact({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = dict[lang].contact;
  return (
    <section className="section page">
      <div className="container narrow">
        <h1 className="page-title">{t.title}</h1>
        <p className="lead">{t.lead}</p>
        {site.contactFormUrl ? (
          <>
            <a href={site.contactFormUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {t.button}
            </a>
            <p className="note">{t.note}</p>
          </>
        ) : (
          <p className="notice">{t.preparing}</p>
        )}
      </div>
    </section>
  );
}
