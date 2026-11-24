import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { companyOverview, heldProperties } from "../data/companyProfile";
import { siteNavItems } from "../data/siteNav";
import { pageMetadata } from "../lib/pageMeta";

export const dynamic = "force-static";

export const metadata = pageMetadata({
  title: "会社概要",
  description:
    "東華株式会社の会社概要です。商号、代表取締役、設立、資本金、所在地と、大阪市・吹田市で保有する物件の区域・種別を掲載しています。",
  path: "/company",
});

export default function CompanyPage() {
  const navItems = siteNavItems(false);

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F5F5F5]">
      <SiteHeader title="会社概要" backHref="/" backLabel="トップページへ戻る" />

      <nav aria-label="主要ナビゲーション" className="border-b border-[#C5A065]/20 bg-[#0F172A]">
        <ul className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap gap-x-5 gap-y-2">
          {navItems.map((item) => {
            const current = item.href === "/company";
            const className = `text-xs sm:text-sm tracking-wide transition-colors ${
              current ? "text-[#C5A065]" : "text-[#E5E5E5] hover:text-[#C5A065]"
            }`;
            return (
              <li key={item.href}>
                {item.href.startsWith("/#") ? (
                  <a href={item.href} className={className}>
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} className={className} aria-current={current ? "page" : undefined}>
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <header className="mb-10">
          <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">会社概要</p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold" style={{ fontFamily: "var(--font-serif)" }}>
            会社概要
          </h1>
        </header>

        <dl className="border-t border-[#C5A065]/20">
          {companyOverview.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[6.75rem_minmax(0,1fr)] sm:grid-cols-[9rem_minmax(0,1fr)] gap-x-3 sm:gap-x-6 py-3.5 border-b border-[#C5A065]/20"
            >
              <dt className="text-xs sm:text-sm tracking-[0.12em] sm:tracking-[0.18em] text-[#C5A065] leading-relaxed">
                {row.label}
              </dt>
              <dd className="text-sm md:text-base text-[#E5E5E5] leading-relaxed break-words min-w-0">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>

        <section className="mt-16" aria-labelledby="properties-title">
          <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">保有物件</p>
          <h2
            id="properties-title"
            className="text-2xl md:text-3xl font-serif font-bold mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            保有物件
          </h2>
          <ul className="space-y-2 text-[#E5E5E5] leading-relaxed">
            {heldProperties.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C5A065]/80" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
