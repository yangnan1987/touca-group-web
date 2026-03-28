import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import BusinessCharts from "../../components/BusinessCharts";
import { careData } from "../../data/businessData";

export const dynamic = "force-static";

export default function CarePage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F5F5F5]">
      <SiteHeader title="介護事業 基盤構築" section="事業領域" backHref="/#business" backLabel="事業領域へ戻る" />

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">

        <section>
          <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">事業領域 / 介護事業</p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">介護事業 基盤構築</h1>
          <p className="text-[#E5E5E5] text-base md:text-lg leading-relaxed max-w-3xl">
            新規施設の開発および既存事業の再生・再構築。安定的かつ高品質な介護サービスの提供体制を確立します。
          </p>
        </section>

        <section className="border-t border-[#C5A065]/15 pt-12">
          <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">市場現状</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">日本の介護市場の現状</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[#C5A065]/20 bg-[#1E293B]/30 rounded-lg p-6 space-y-3">
              <h3 className="text-lg font-semibold text-[#C5A065]">給付費の拡大と財政課題</h3>
              <p className="text-sm text-[#E5E5E5] leading-relaxed">
                介護保険給付費は2024年度に12.5兆円を超えると見込まれており、制度発足時の約5倍に拡大しています（厚生労働省「介護保険事業状況報告」）。高齢化の進行とともに今後も増加が見込まれ、持続可能な財政運営が重要な政策課題となっています。
              </p>
            </div>
            <div className="border border-[#C5A065]/20 bg-[#1E293B]/30 rounded-lg p-6 space-y-3">
              <h3 className="text-lg font-semibold text-[#C5A065]">深刻な人材不足</h3>
              <p className="text-sm text-[#E5E5E5] leading-relaxed">
                2025年には約32万人、2040年には約69万人の介護人材が不足すると推計されています（厚生労働省）。訪問介護事業所の倒産件数は2024年に過去最多を更新するなど、経営環境は厳しさを増しています。
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-[#C5A065]/15 pt-12">
          <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">市場データ</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">市場規模・構成データ</h2>
          <BusinessCharts data={careData} />
        </section>

        <section className="border-t border-[#C5A065]/15 pt-12">
          <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">将来展望</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">今後の発展トレンド</h2>
          <div className="space-y-4">
            {[
              { title: "テクノロジーによる業務効率化", body: "介護ロボットや見守りシステム、AI活用の介護記録自動化ツールの普及が加速しています。厚生労働省もICT導入補助金を拡充しており、テクノロジーを活用した介護の質向上と業務負担軽減が同時に求められています。" },
              { title: "外国人介護人材の本格活用", body: "特定技能制度や EPA（経済連携協定）を通じた外国人介護人材の受け入れが拡大しています。特定技能2号への移行促進策も強化され、長期的な外国人人材の定着と育成が業界の優先課題となっています。" },
              { title: "地域包括ケアシステムの深化", body: "医療・介護・住まい・生活支援を一体的に提供する地域包括ケアシステムの構築が全国で進展しています。多職種連携や在宅医療との連携強化が求められる中、地域の中核を担う介護事業者の存在感が高まっています。" },
            ].map((item) => (
              <div key={item.title} className="border border-[#C5A065]/20 bg-[#1E293B]/25 rounded-lg p-5">
                <h3 className="text-base font-semibold text-[#C5A065] mb-2">{item.title}</h3>
                <p className="text-sm text-[#E5E5E5] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[#C5A065]/15 pt-12">
          <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">総括</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">東華株式会社の取り組み</h2>
          <p className="text-[#E5E5E5] leading-relaxed max-w-3xl">
            東華株式会社は、新規介護施設の立ち上げから既存事業者の経営改善まで、介護事業基盤の強化を総合的に支援します。ICT導入・人材確保・法令対応の三軸で、安定した事業運営と高品質なサービス提供を実現するためのパートナーとなります。
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
