import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { newsData, type NewsCategory } from "../data/newsData";

export const dynamic = "force-static";

const categoryColors: Record<NewsCategory, string> = {
  "不動産": "border-[#C5A065]/60 text-[#C5A065]",
  "介護": "border-blue-400/60 text-blue-400",
  "教育": "border-emerald-400/60 text-emerald-400",
  "IT・AI": "border-purple-400/60 text-purple-400",
  "経済": "border-rose-400/60 text-rose-400",
};

const categoryBg: Record<NewsCategory, string> = {
  "不動産": "bg-[#C5A065]/10",
  "介護": "bg-blue-400/10",
  "教育": "bg-emerald-400/10",
  "IT・AI": "bg-purple-400/10",
  "経済": "bg-rose-400/10",
};

export default function NewsPage() {
  // newsDataはid降順（最新順）で定義済み
  const sorted = [...newsData].sort((a, b) => b.id - a.id);

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F5F5F5]">
      <SiteHeader title="ニュース" backHref="/" backLabel="トップページへ戻る" />

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">NEWS</p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">ニュース</h1>
          <p className="text-sm text-[#A0A0A0]">
            日本の不動産・介護・教育・IT分野における市場動向・政策情報をお届けします。
          </p>
        </div>

        <div className="space-y-4">
          {sorted.map((item) => (
            <article
              key={item.id}
              className="border border-[#C5A065]/20 bg-[#1E293B]/25 rounded-lg p-6 hover:border-[#C5A065]/40 transition-colors"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <time className="text-xs tracking-wider text-[#C5A065]">{item.date}</time>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded border ${categoryColors[item.category]} ${categoryBg[item.category]}`}
                >
                  {item.category}
                </span>
              </div>
              <h2 className="text-base md:text-lg font-serif font-semibold mb-3 leading-snug">
                {item.title}
              </h2>
              <p className="text-sm text-[#B0B0B0] leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
