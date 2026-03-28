import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import BusinessCharts from "../../components/BusinessCharts";
import { dentalData } from "../../data/businessData";

export const dynamic = "force-static";

export default function DentalPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F5F5F5]">
      <SiteHeader title="歯科医院 事業承継" section="事業領域" backHref="/#business" backLabel="事業領域へ戻る" />

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">

        {/* ヘッダービジュアル */}
        <section>
          <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">事業領域 / 歯科医院</p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">歯科医院 事業承継</h1>
          <p className="text-[#E5E5E5] text-base md:text-lg leading-relaxed max-w-3xl">
            地域医療の灯を守るための戦略的パートナーシップ。円滑な承継と経営の持続的発展を支援します。
          </p>
        </section>

        {/* 市場現状 */}
        <section className="border-t border-[#C5A065]/15 pt-12">
          <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">市場現状</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">日本の歯科医院市場の現状</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[#C5A065]/20 bg-[#1E293B]/30 rounded-lg p-6 space-y-3">
              <h3 className="text-lg font-semibold text-[#C5A065]">院数の飽和と後継者不足</h3>
              <p className="text-sm text-[#E5E5E5] leading-relaxed">
                日本の歯科診療所数はコンビニエンスストアよりも多い約6.7万施設に達しています（厚生労働省「医療施設調査」）。一方、院長の平均年齢上昇に伴う後継者問題が深刻化しており、毎年約1,000件以上の廃院が発生していると推計されています。
              </p>
            </div>
            <div className="border border-[#C5A065]/20 bg-[#1E293B]/30 rounded-lg p-6 space-y-3">
              <h3 className="text-lg font-semibold text-[#C5A065]">地域医療への影響</h3>
              <p className="text-sm text-[#E5E5E5] leading-relaxed">
                地方・郊外を中心に、歯科医院の廃院は高齢患者の通院困難を引き起こしています。地域住民にとって身近な医療インフラを次世代に引き継ぐことは、地域包括ケアシステムの観点からも急務となっています。
              </p>
            </div>
          </div>
        </section>

        {/* データ・チャート */}
        <section className="border-t border-[#C5A065]/15 pt-12">
          <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">市場データ</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">市場規模・構成データ</h2>
          <BusinessCharts data={dentalData} />
        </section>

        {/* 将来トレンド */}
        <section className="border-t border-[#C5A065]/15 pt-12">
          <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">将来展望</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">今後の発展トレンド</h2>
          <div className="space-y-4">
            {[
              { title: "M&A・事業承継ニーズの拡大", body: "日本M&Aセンターや民間仲介会社を通じた歯科医院承継件数は年々増加しており、医療法人化による組織的承継も注目されています。後継者不在の院長が計画的な承継を希望するケースが急増しています。" },
              { title: "医療法人化による経営安定", body: "個人開業から医療法人への移行により、節税効果・信用力向上・採用力強化が期待できます。法人化を機に複数診療科・複数院舎への展開を図る動きも活発化しています。" },
              { title: "デジタル化による競争力強化", body: "電子カルテ・予約システム・口腔内スキャナーなどのデジタルツールの導入が標準化しつつあります。IT化対応済みの歯科医院は承継後の患者満足度向上・経営効率化において優位性を持ちます。" },
            ].map((item) => (
              <div key={item.title} className="border border-[#C5A065]/20 bg-[#1E293B]/25 rounded-lg p-5">
                <h3 className="text-base font-semibold text-[#C5A065] mb-2">{item.title}</h3>
                <p className="text-sm text-[#E5E5E5] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* トレンド総括 */}
        <section className="border-t border-[#C5A065]/15 pt-12">
          <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">総括</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">東華株式会社の取り組み</h2>
          <p className="text-[#E5E5E5] leading-relaxed max-w-3xl">
            東華株式会社は、歯科医院の事業承継において、承継前の経営分析から承継後の運営安定化まで一貫してサポートします。地域医療を継続的に提供できる体制の構築を最優先とし、院長・スタッフ・患者のすべてが安心できる承継を実現します。
          </p>
          <div className="mt-6">
            <a
              href="/#contact"
              className="inline-block px-8 py-4 bg-[#C5A065] text-[#0F172A] font-semibold hover:bg-[#B8945A] transition-colors"
            >
              お問い合わせ
            </a>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
