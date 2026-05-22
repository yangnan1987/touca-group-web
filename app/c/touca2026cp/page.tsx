import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "会社案内 | 東華株式会社 TOUCA GROUP",
  description: "東華株式会社 会社案内（Company Profile）",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

const companyOverview: { label: string; value: string }[] = [
  { label: "会社名", value: "東華株式会社（TOUCA GROUP Co., Ltd.）" },
  { label: "代表取締役", value: "宋　超" },
  { label: "設立", value: "令和6年9月6日" },
  { label: "資本金", value: "9,500万円" },
  { label: "所在地", value: "大阪市中央区内久宝寺町4-1-19　リンクスタイル中央ビル2階" },
  { label: "事業内容", value: "資産管理、投資事業等" },
];

const businessDomains: { title: string; body: string }[] = [
  {
    title: "不動産資産管理",
    body: "収益不動産の取得・運用・管理を通じ、中長期的な資産価値の最大化と安定したキャッシュフローを創出します。市場の動向を見極め、最適なポートフォリオを構築します。",
  },
  {
    title: "企業間M&A・事業承継支援",
    body: "後継者不在などの課題を抱える企業に対し、M&Aを通じた円滑な事業承継を支援します。次世代へ企業の価値と想いを確実にバトンタッチするための最適なスキームを提案します。",
  },
  {
    title: "歯科医療総合ソリューション",
    body: "歯科医院の経営コンサルティングから、高品質かつ低価格な医療機器（デンタルユニット等）の提供まで、歯科医療現場の課題解決をトータルでサポートします。",
  },
  {
    title: "経営コンサルティング・DX支援",
    body: "企業の持続的成長に向けた業務改善、IT・AI技術を活用したデジタルトランスフォーメーション（DX）の推進など、多角的な視点から経営基盤の強化を支援します。",
  },
];

const newlifeServices: string[] = [
  "資産管理コンサルティング",
  "ビジネスマッチング",
  "歯科医療ビジネスソリューション",
  "経営サポート（業務改善、DX支援等）",
];

const showrooms: { name: string; area: string }[] = [
  { name: "大阪工場", area: "大阪市旭区" },
  { name: "新大阪ショールーム", area: "大阪市東淀川区" },
  { name: "岡山ショールーム", area: "岡山県浅口郡" },
  { name: "熊本ショールーム", area: "熊本市中央区" },
  { name: "東京ショールーム", area: "東京都文京区" },
  { name: "名古屋ショールーム", area: "名古屋市中村区" },
  { name: "福岡ショールーム", area: "福岡県糸島市" },
];

export default function CompanyProfileBrochurePage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F5F5F5]">
      <header className="border-b border-[#C5A065]/20">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between gap-4">
          <div>
            <p
              className="text-xl md:text-2xl font-serif font-bold text-white"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              東華株式会社
            </p>
            <p className="text-[11px] md:text-xs text-[#C5A065] tracking-[0.2em]">
              TOUCA GROUP Co., Ltd.
            </p>
          </div>
          <p className="hidden sm:block text-[10px] md:text-xs tracking-[0.3em] text-[#A0A0A0] uppercase">
            Company Profile
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-16 space-y-20 md:space-y-24">
        <section aria-labelledby="cover-title" className="text-center pt-6 md:pt-10">
          <p className="text-[11px] md:text-xs tracking-[0.4em] text-[#C5A065] mb-6">
            COMPANY PROFILE
          </p>
          <h1
            id="cover-title"
            className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            会社案内
          </h1>
          <div className="mx-auto h-px w-16 bg-[#C5A065]/60 mb-8" />
          <p
            className="text-lg md:text-2xl font-serif text-[#E5E5E5] mb-2"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            東華株式会社
          </p>
          <p className="text-xs md:text-sm tracking-[0.25em] text-[#C5A065]">
            TOUCA GROUP Co., Ltd.
          </p>
        </section>

        <section
          aria-labelledby="message-title"
          className="border-t border-[#C5A065]/15 pt-12 md:pt-16"
        >
          <p className="text-[11px] tracking-[0.3em] text-[#C5A065] mb-4">
            TOP MESSAGE
          </p>
          <h2
            id="message-title"
            className="text-2xl md:text-3xl font-serif font-bold mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            トップメッセージ
          </h2>

          <blockquote
            className="text-xl md:text-2xl font-serif font-semibold text-[#C5A065] leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            「投資の力で、新たな価値と可能性を創造する。」
          </blockquote>

          <div className="space-y-5 text-sm md:text-base leading-loose text-[#E5E5E5] max-w-3xl">
            <p>
              社会構造が劇的な変化を遂げる現代において、「より豊かな人生を送りたい」「事業を次世代へ繋ぎたい」という人々の根源的な願いは変わりません。
            </p>
            <p>
              東華株式会社は、投資と事業基盤整備を通じて新たな価値と可能性の創造を目指す企業グループです。
            </p>
            <p>
              国境を越えた連携と、地域・関係者・事業基盤の将来性を見据えた中長期の支援を重視し、皆様のビジネスにおける羅針盤となることを使命としています。
            </p>
            <p>
              私たちは専門性とローカルな知見、そして最新のテクノロジーを融合させ、単なるコンサルティングを超えた複合的な価値（トータルソリューション）を提供し続けます。
            </p>
          </div>

          <div className="mt-10 flex items-baseline gap-4">
            <span className="text-xs tracking-[0.2em] text-[#A0A0A0]">
              代表取締役
            </span>
            <span
              className="text-xl md:text-2xl font-serif font-semibold text-white"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              宋　超
            </span>
          </div>
        </section>

        <section
          aria-labelledby="overview-title"
          className="border-t border-[#C5A065]/15 pt-12 md:pt-16"
        >
          <p className="text-[11px] tracking-[0.3em] text-[#C5A065] mb-4">
            COMPANY OVERVIEW
          </p>
          <h2
            id="overview-title"
            className="text-2xl md:text-3xl font-serif font-bold mb-10"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            会社概要・グループ体制
          </h2>

          <dl className="border-t border-[#C5A065]/15 divide-y divide-[#C5A065]/15">
            {companyOverview.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 md:grid-cols-[12rem_1fr] gap-2 md:gap-6 py-4 md:py-5"
              >
                <dt className="text-xs md:text-sm tracking-[0.2em] text-[#C5A065]">
                  {row.label}
                </dt>
                <dd className="text-sm md:text-base text-[#E5E5E5] leading-relaxed">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-14">
            <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-6 text-center">
              GROUP STRUCTURE ／ グループ体制
            </p>

            <div className="flex flex-col items-center gap-6">
              <div className="border border-[#C5A065]/60 bg-[#1E293B]/40 rounded-lg px-8 py-5 text-center min-w-[280px]">
                <p
                  className="text-lg md:text-xl font-serif font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  東華株式会社
                </p>
                <p className="text-xs text-[#C5A065] tracking-wider">
                  資産管理・投資統括
                </p>
              </div>

              <div className="h-8 w-px bg-[#C5A065]/40" aria-hidden />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
                <div className="border border-[#C5A065]/25 bg-[#1E293B]/25 rounded-lg px-6 py-5 text-center">
                  <p
                    className="text-base md:text-lg font-serif font-semibold text-[#C5A065] mb-1"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    ニューライフ開発株式会社
                  </p>
                  <p className="text-xs text-[#A0A0A0]">日中総合コンサルティング</p>
                </div>
                <div className="border border-[#C5A065]/25 bg-[#1E293B]/25 rounded-lg px-6 py-5 text-center">
                  <p
                    className="text-base md:text-lg font-serif font-semibold text-[#C5A065] mb-1"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    株式会社エスディーメディカル
                  </p>
                  <p className="text-xs text-[#A0A0A0]">医療機器製造販売</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="domains-title"
          className="border-t border-[#C5A065]/15 pt-12 md:pt-16"
        >
          <p className="text-[11px] tracking-[0.3em] text-[#C5A065] mb-4">
            BUSINESS DOMAINS
          </p>
          <h2
            id="domains-title"
            className="text-2xl md:text-3xl font-serif font-bold mb-3"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            事業領域
          </h2>
          <p className="text-sm text-[#A0A0A0] mb-10 max-w-3xl leading-relaxed">
            グループ全体で連携し、以下の4つの領域を中心に価値を創造します。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {businessDomains.map((item, index) => (
              <article
                key={item.title}
                className="border border-[#C5A065]/20 bg-[#1E293B]/30 rounded-lg p-6"
              >
                <p className="text-[10px] tracking-[0.3em] text-[#C5A065]/80 mb-3">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3
                  className="text-lg md:text-xl font-serif font-semibold text-[#C5A065] mb-3"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#E5E5E5]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="group-title"
          className="border-t border-[#C5A065]/15 pt-12 md:pt-16"
        >
          <p className="text-[11px] tracking-[0.3em] text-[#C5A065] mb-4">
            GROUP COMPANIES
          </p>
          <h2
            id="group-title"
            className="text-2xl md:text-3xl font-serif font-bold mb-10"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            グループ企業紹介
          </h2>

          <article className="border border-[#C5A065]/20 bg-[#1E293B]/25 rounded-lg p-6 md:p-8 mb-6">
            <h3
              className="text-xl md:text-2xl font-serif font-bold text-[#C5A065] mb-3"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              ニューライフ開発株式会社
            </h3>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs md:text-sm text-[#A0A0A0] mb-5">
              <span>
                <span className="text-[#C5A065] tracking-wider">会社設立日</span>
                ：2015年5月14日
              </span>
              <span>
                <span className="text-[#C5A065] tracking-wider">資本金</span>
                ：800万円
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#E5E5E5] mb-3">
              大阪市中央区を拠点に、日中間のビジネスを総合支援するコンサルティング会社です。
            </p>
            <p className="text-sm leading-relaxed text-[#E5E5E5] mb-6">
              専門性とローカルな知見、最新のテクノロジーを融合させ、複合的な価値を提供します。
            </p>
            <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">
              主な事業内容
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#E5E5E5]">
              {newlifeServices.map((service) => (
                <li key={service} className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#C5A065]/80 flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="border border-[#C5A065]/20 bg-[#1E293B]/25 rounded-lg p-6 md:p-8">
            <h3
              className="text-xl md:text-2xl font-serif font-bold text-[#C5A065] mb-3"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              株式会社エスディーメディカル
            </h3>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs md:text-sm text-[#A0A0A0] mb-5">
              <span>
                <span className="text-[#C5A065] tracking-wider">会社設立日</span>
                ：2012年3月1日
              </span>
              <span>
                <span className="text-[#C5A065] tracking-wider">資本金</span>
                ：3,000万円
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#E5E5E5] mb-6">
              高品質かつコストパフォーマンスに優れた歯科医療機器の製造販売・サポートを行っています。
            </p>

            <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">
              全国ショールーム展開
            </p>
            <ul className="flex flex-wrap gap-2 mb-4">
              {showrooms.map((room) => (
                <li
                  key={room.name}
                  className="border border-[#C5A065]/30 bg-[#0F172A]/60 rounded-full px-3 py-1.5 text-xs text-[#E5E5E5]"
                >
                  <span className="text-[#C5A065]">{room.name}</span>
                  <span className="text-[#A0A0A0] mx-1">／</span>
                  <span>{room.area}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#A0A0A0] leading-relaxed">
              ※ 完全予約制にて、実機のご見学・ご相談を承っております。
            </p>
          </article>
        </section>

        <section
          aria-labelledby="contact-title"
          className="border-t border-[#C5A065]/15 pt-12 md:pt-16 text-center"
        >
          <p
            className="text-2xl md:text-3xl font-serif font-semibold text-[#C5A065] mb-10"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            未来を共に創るパートナーとして。
          </p>

          <h2
            id="contact-title"
            className="text-xl md:text-2xl font-serif font-bold mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            東華株式会社
          </h2>

          <div className="space-y-2 text-sm md:text-base text-[#E5E5E5] leading-relaxed">
            <p>〒540-0022</p>
            <p>大阪市中央区内久宝寺町4-1-19　リンクスタイル中央ビル2階</p>
          </div>

          <div className="mt-8 inline-flex flex-col gap-2 text-sm md:text-base">
            <p>
              <span className="text-[#C5A065] tracking-wider mr-2">公式サイト</span>
              <a
                href="https://toucagroup.com"
                rel="noopener"
                className="text-[#E5E5E5] hover:text-[#C5A065] underline decoration-[#C5A065]/40 underline-offset-4 transition-colors"
              >
                https://toucagroup.com
              </a>
            </p>
            <p>
              <span className="text-[#C5A065] tracking-wider mr-2">Email</span>
              <a
                href="mailto:info@toucagroup.com"
                className="text-[#E5E5E5] hover:text-[#C5A065] underline decoration-[#C5A065]/40 underline-offset-4 transition-colors"
              >
                info@toucagroup.com
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#C5A065]/15 mt-16">
        <div className="max-w-5xl mx-auto px-6 py-8 text-center">
          <p className="text-xs text-[#A0A0A0]">
            © 2025–2026 東華株式会社 TOUCA GROUP Co., Ltd.
          </p>
        </div>
      </footer>
    </div>
  );
}
