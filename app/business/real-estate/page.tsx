import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import BusinessCharts from "../../components/BusinessCharts";
import { realEstateData } from "../../data/businessData";

export const dynamic = "force-static";

export default function RealEstatePage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F5F5F5]">
      <SiteHeader title="不動産資産管理" section="事業領域" backHref="/#business" backLabel="事業領域へ戻る" />

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">

        <section>
          <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">事業領域 / 不動産</p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">不動産資産管理</h1>
          <p className="text-[#E5E5E5] text-base md:text-lg leading-relaxed max-w-3xl">
            自社保有による収益不動産の長期運用。資産価値の最大化と安定的なキャッシュフローの創出を追求します。
          </p>
        </section>

        <section className="border-t border-[#C5A065]/15 pt-12">
          <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">市場現状</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">日本の不動産投資市場の現状</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[#C5A065]/20 bg-[#1E293B]/30 rounded-lg p-6 space-y-3">
              <h3 className="text-lg font-semibold text-[#C5A065]">投資市場の拡大と多様化</h3>
              <p className="text-sm text-[#E5E5E5] leading-relaxed">
                国内不動産投資市場は2024年に約4.9兆円規模に達し、従来のオフィス・住宅に加え、物流施設・データセンター・ヘルスケア施設への投資が急増しています（国土交通省「不動産投資市場政策研究会」）。低金利環境下での安定利回り資産として内外からの資金流入が続いています。
              </p>
            </div>
            <div className="border border-[#C5A065]/20 bg-[#1E293B]/30 rounded-lg p-6 space-y-3">
              <h3 className="text-lg font-semibold text-[#C5A065]">都市圏の価格上昇と地方の機会</h3>
              <p className="text-sm text-[#E5E5E5] leading-relaxed">
                東京圏の新築マンション価格は2024年に平均1億円を超え、投資用不動産の利回り圧縮が続いています（不動産経済研究所）。一方、地方中枢都市では移住需要・インバウンド需要を背景に中古物件の価格上昇と賃料上昇が同時進行しています。
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-[#C5A065]/15 pt-12">
          <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">市場データ</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">市場規模・構成データ</h2>
          <BusinessCharts data={realEstateData} />
        </section>

        <section className="border-t border-[#C5A065]/15 pt-12">
          <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">将来展望</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">今後の発展トレンド</h2>
          <div className="space-y-4">
            {[
              { title: "物流・データセンター需要の長期化", body: "eコマースの拡大とAIインフラ整備を背景に、物流施設・データセンターへの需要は中長期的に拡大が見込まれます。用地確保競争が激化しており、早期参入と長期保有戦略が資産価値最大化の鍵となります。" },
              { title: "グリーンビルディングと環境対応", body: "2050年カーボンニュートラル目標に向け、CASBEE・ZEB認証取得物件への移行が不動産投資の必須条件となりつつあります。省エネ改修・再エネ導入による資産価値向上と賃料プレミアムの獲得が今後の主要な戦略となります。" },
              { title: "J-REITと私募ファンドの機能分担", body: "J-REITによる機動的な資金調達と私募ファンドによる戦略的資産形成の組み合わせが高度化しています。上場・非上場を横断した最適な資産ポートフォリオの設計が、機関投資家・個人投資家双方に求められています。" },
            ].map((item) => (
              <div key={item.title} className="border border-[#C5A065]/20 bg-[#1E293B]/25 rounded-lg p-5">
                <h3 className="text-base font-semibold text-[#C5A065] mb-2">{item.title}</h3>
                <p className="text-sm text-[#E5E5E5] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[#C5A065]/15 pt-12">
          <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">窓口・運用方針</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">お問い合わせと公開情報</h2>
          <div className="space-y-4 text-sm text-[#E5E5E5] max-w-3xl leading-relaxed">
            <p>
              不動産資産管理に関するお問い合わせは、公式サイト（トップページ）記載のメール窓口（info@toucagroup.com）にて共通で承ります。
            </p>
            <p>
              投資・運用の基本方針は、収益不動産の自社保有と長期運用です。管理物件に関する個別情報は非公開とする場合がありますが、取り組みの概要は下記「東華株式会社の取り組み」をご参照ください。
            </p>
          </div>
        </section>

        <section className="border-t border-[#C5A065]/15 pt-12">
          <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">総括</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">東華株式会社の取り組み</h2>
          <p className="text-[#E5E5E5] leading-relaxed max-w-3xl">
            東華株式会社は、収益不動産の自社保有・長期運用を通じて安定的なキャッシュフローを創出するとともに、物件の価値向上に継続的に取り組んでいます。物流・住宅・商業施設など多様なアセットクラスに対応し、資産価値の最大化を追求します。
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
