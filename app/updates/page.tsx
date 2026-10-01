import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { SITE_OPENED_MONTH_JA, updateItems } from "../data/updateItems";
import { pageMetadata } from "../lib/pageMeta";

export const dynamic = "force-static";

export const metadata = pageMetadata({
  title: "更新情報",
  description:
    "東華株式会社公式サイトの更新履歴一覧です。本サイトは2025年1月に開設し、公開情報の見直し内容を時系列で掲載しています。",
  path: "/updates",
});

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F5F5F5]">
      <SiteHeader title="更新情報" backHref="/" backLabel="トップページへ戻る" />

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">UPDATES</p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">更新情報</h1>
          <p className="text-sm text-[#A0A0A0]">
            本公式サイトは{SITE_OPENED_MONTH_JA}に開設しています。以降の主な更新内容を新しい順に掲載しています。
          </p>
        </div>

        <div className="space-y-4">
          {updateItems.map((item) => (
            <article
              key={item.id}
              className="border border-[#C5A065]/20 bg-[#1E293B]/25 rounded-lg p-6 hover:border-[#C5A065]/40 transition-colors"
            >
              <p className="text-xs tracking-wider text-[#C5A065] mb-2">{item.date}</p>
              <h2 className="text-base md:text-lg font-serif font-semibold mb-3 leading-snug">{item.title}</h2>
              <p className="text-sm text-[#B0B0B0] leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-[#C5A065]/20">
          <Link href="/#updates" className="text-[#C5A065] hover:text-[#E5E5E5] transition-colors text-sm">
            トップページの更新情報へ戻る
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
