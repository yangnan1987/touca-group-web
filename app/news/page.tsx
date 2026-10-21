import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { NewsCardGrid } from "../components/NewsCard";
import { newsData } from "../data/newsData";
import { pageMetadata } from "../lib/pageMeta";

export const dynamic = "force-static";

export const metadata = pageMetadata({
  title: "ニュース",
  description:
    "東華株式会社が掲載するニュース一覧です。日本の不動産、介護、教育、IT・経済分野の市場動向と政策情報をまとめています。",
  path: "/news",
});

export default function NewsPage() {
  const sorted = [...newsData].sort((a, b) => b.id - a.id);

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F5F5F5]">
      <SiteHeader title="ニュース" backHref="/" backLabel="トップページへ戻る" />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">NEWS</p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">ニュース</h1>
          <p className="text-sm text-[#A0A0A0]">
            日本の不動産・介護・教育・IT分野における市場動向・政策情報をお届けします。
          </p>
        </div>

        <NewsCardGrid items={sorted} />
      </main>

      <SiteFooter />
    </div>
  );
}
