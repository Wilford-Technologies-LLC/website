import type { Metadata } from "next";
import { dict, type Locale } from "@/content/i18n";
import { apps } from "@/content/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: dict[lang].apps.title };
}

export default async function Apps({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = dict[lang].apps;
  return (
    <section className="section page">
      <div className="container narrow">
        <h1 className="page-title">{t.title}</h1>
        <p className="lead">{t.lead}</p>
        <div className="app-list">
          {apps.map((app) => (
            <article key={app.name} className="app-card">
              <img src="/images/logo-mark.png" alt="" width={64} height={44} className="app-icon" />
              <div>
                <h2>{app.name}</h2>
                {app.status === "coming-soon" && <span className="badge">{t.comingSoon}</span>}
                <p>{app.description[lang]}</p>
                {app.storeUrls && (
                  <div className="store-links">
                    {app.storeUrls.appStore && <a href={app.storeUrls.appStore}>App Store</a>}
                    {app.storeUrls.googlePlay && <a href={app.storeUrls.googlePlay}>Google Play</a>}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
