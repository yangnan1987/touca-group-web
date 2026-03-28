import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import BusinessCharts from "../../components/BusinessCharts";
import { educationData } from "../../data/businessData";

export const dynamic = "force-static";

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F5F5F5]">
      <SiteHeader title="教育機関 業務提携" section="事業領域" backHref="/#business" backLabel="事業領域へ戻る" />

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">

        <section>
          <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">事業領域 / 教育機関</p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">教育機関 業務提携</h1>
          <p className="text-[#E5E5E5] text-base md:text-lg leading-relaxed max-w-3xl">
            グローバル人材の育成を見据えた国境を越える業務提携。教育カリキュラムの共同開発や留学生支援を推進します。
          </p>
        </section>

        <section className="border-t border-[#C5A065]/15 pt-12">
          <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">市場現状</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">日本の教育機関・留学市場の現状</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[#C5A065]/20 bg-[#1E293B]/30 rounded-lg p-6 space-y-3">
              <h3 className="text-lg font-semibold text-[#C5A065]">留学生の回復と新たな拡大局面</h3>
              <p className="text-sm text-[#E5E5E5] leading-relaxed">
                コロナ禍で大幅に減少した在日外国人留学生数は2023年度に約31万人まで回復し、2024年度には過去最高水準の33万人超が見込まれています（日本学生支援機構）。東南アジアや南アジアからの入学者増加が全体を牽引しています。
              </p>
            </div>
            <div className="border border-[#C5A065]/20 bg-[#1E293B]/30 rounded-lg p-6 space-y-3">
              <h3 className="text-lg font-semibold text-[#C5A065]">日本語教育機関の制度改革</h3>
              <p className="text-sm text-[#E5E5E5] leading-relaxed">
                2024年施行の改正日本語教育振興法により「認定日本語教育機関」制度が創設されました。教育品質の担保と国際的な認知向上を目的としており、認定を取得した機関に対する留学生の集中が進んでいます。
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-[#C5A065]/15 pt-12">
          <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">市場データ</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">市場規模・構成データ</h2>
          <BusinessCharts data={educationData} />
        </section>

        <section className="border-t border-[#C5A065]/15 pt-12">
          <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">将来展望</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">今後の発展トレンド</h2>
          <div className="space-y-4">
            {[
              { title: "日本語教育の国際標準化", body: "認定日本語教育機関制度の普及により、教育品質の国際的な可視化が進みます。海外大学・政府機関との提携を通じた留学生の組織的派遣が増加し、機関間ネットワークの重要性が高まっています。" },
              { title: "就労・定着支援の強化", body: "日本政府は留学生の卒業後の就職・定着促進を重要政策として位置づけています。在留資格の拡充・日本語能力要件の柔軟化・就職支援プログラムの充実により、留学生が長期的に日本で活躍できる環境整備が進んでいます。" },
              { title: "産学連携型教育の拡大", body: "IT・製造・介護などの産業ニーズに直結したカリキュラム開発が進んでいます。企業と教育機関の連携による実践的な日本語・職業スキル教育が、留学生の即戦力化と企業の外国人材確保に寄与しています。" },
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
            東華株式会社は、海外教育機関と日本の大学・日本語学校・専門学校との業務提携を仲介・支援します。カリキュラムの共同開発から留学生の生活支援・就職支援まで、グローバル人材の育成を包括的にサポートします。
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
