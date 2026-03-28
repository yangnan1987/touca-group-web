"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HOME_UPDATES_VISIBLE_COUNT, SITE_OPENED_MONTH_JA, updateItems } from "./data/updateItems";

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const navItems = [
    { href: "#about", label: "会社案内", internal: true },
    { href: "#policy", label: "方針", internal: true },
    { href: "#business", label: "事業領域", internal: true },
    { href: "#updates", label: "更新情報", internal: true },
    { href: "#faq", label: "よくあるご質問", internal: true },
    { href: "/updates", label: "更新一覧", internal: false },
    { href: "/news", label: "ニュース", internal: false },
    { href: "#contact", label: "お問い合わせ", internal: true },
  ];

  const policyItems = [
    {
      title: "価値創造",
      description: "投資の力で、新たな価値と可能性を創造するという姿勢を軸に、各領域で持続性を重視した取り組みを行います。",
    },
    {
      title: "長期視点",
      description: "短期的な成果だけでなく、地域・関係者・事業基盤の将来性を見据えた中長期の支援を重視します。",
    },
    {
      title: "対話と誠実",
      description: "関係各所との丁寧な対話を基盤に、公開可能な情報を明確化し、透明性の高い情報発信に努めます。",
    },
  ];


  const faqItems = [
    {
      question: "どのような領域の相談が可能ですか。",
      answer:
        "本サイトで公開している事業領域（歯科医院事業承継、介護事業基盤構築、教育機関業務提携、不動産資産管理）に関するご相談を受け付けています。",
    },
    {
      question: "問い合わせ方法を教えてください。",
      answer:
        "ページ下部の公式連絡先よりメールでご連絡ください。本サイトに入力フォームは設けておりません。内容確認後、必要に応じて担当より返信いたします（目安：5営業日以内。内容により前後する場合があります）。",
    },
    {
      question: "このサイトに掲載されていない企業情報はありますか。",
      answer:
        "本ページでは公開情報を中心に掲載しています。未掲載事項については、お問い合わせ時に確認可能な範囲でご案内します。",
    },
  ];

  const smoothScroll = (target: string) => {
    const element = document.getElementById(target);
    if (!element) return;
    element.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth", block: "start" });
    element.focus({ preventScroll: true });
  };

  const transitionBase = (delay = 0): Transition =>
    shouldReduceMotion ? { duration: 0 } : { delay, duration: 0.8, ease: "easeOut" };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "東華株式会社",
    alternateName: "TOUCA GROUP Co., Ltd.",
    url: "https://toucagroup.com",
    inLanguage: "ja-JP",
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F5F5F5] pb-20 lg:pb-0">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-[#C5A065] focus:text-[#0F172A] focus:px-4 focus:py-2"
      >
        本文へ移動
      </a>

      <nav
        aria-label="主要ナビゲーション"
        className="fixed top-0 right-0 z-50 hidden lg:block px-8 py-6 bg-[#0F172A]/60 backdrop-blur-sm border-b border-l border-[#C5A065]/20 rounded-bl-lg"
      >
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              {item.internal ? (
                <a
                  href={item.href}
                  className="text-xs tracking-wider text-[#E5E5E5] hover:text-[#C5A065] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll(item.href.replace("#", ""));
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <Link href={item.href} className="text-xs tracking-wider text-[#E5E5E5] hover:text-[#C5A065] transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <nav
        aria-label="モバイルナビゲーション"
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#0F172A]/90 backdrop-blur-sm border-t border-[#C5A065]/20"
      >
        <ul className="grid grid-cols-4 gap-x-2 gap-y-1 p-3">
          {navItems.map((item) => (
            <li key={`mobile-${item.href}`} className="text-center">
              {item.internal ? (
                <a
                  href={item.href}
                  className="text-[11px] text-[#E5E5E5] hover:text-[#C5A065] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll(item.href.replace("#", ""));
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <Link href={item.href} className="text-[11px] text-[#E5E5E5] hover:text-[#C5A065] transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="fixed top-0 left-0 z-50 p-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={transitionBase()}>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-1" style={{ fontFamily: "var(--font-serif)" }}>
            東華株式会社
          </h2>
          <p className="text-xs md:text-sm font-sans text-[#C5A065] tracking-wider" style={{ fontFamily: "var(--font-sans)" }}>
            TOUCA GROUP Co., Ltd.
          </p>
        </motion.div>
      </div>

      <main id="main-content" className="outline-none">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/images/hero.jpg" alt="東華株式会社のメインビジュアル" fill priority quality={100} className="object-cover" unoptimized />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transitionBase()}
            className="text-center max-w-4xl mx-auto z-10 relative"
          >
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={transitionBase(0.3)} className="text-[#C5A065] text-sm md:text-base tracking-widest mb-6 font-sans">
              TOUCA GROUP ASSET MANAGEMENT
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transitionBase(0.4)}
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              信念こそが、未来を拓く。
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transitionBase(0.6)}
              className="text-lg md:text-xl lg:text-2xl mb-12 text-[#E5E5E5] font-sans"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              投資の力で、新たな価値と可能性を創造する。
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={transitionBase(0.8)}>
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-[#C5A065] text-[#0F172A] font-semibold rounded-none hover:bg-[#B8945A] transition-colors duration-300 font-sans tracking-wide"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll("contact");
                }}
              >
                お問い合わせ
              </a>
            </motion.div>
          </motion.div>
        </section>

        <section id="about" tabIndex={-1} className="px-6 py-16 md:py-24 border-t border-[#C5A065]/15 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={transitionBase()}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              <div className="lg:col-span-1">
                <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-4">会社案内</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ fontFamily: "var(--font-serif)" }}>
                  会社案内
                </h2>
              </div>
              <div className="lg:col-span-2 space-y-4 text-[#E5E5E5] font-sans leading-relaxed">
                <p>東華株式会社（TOUCA GROUP Co., Ltd.）は、投資と事業基盤整備を通じて新たな価値と可能性の創造を目指す企業グループです。</p>
                <p>本公式サイトは{SITE_OPENED_MONTH_JA}に開設しています。公開中の事業領域と連絡窓口を中心に、確認可能な情報を整理して掲載しています。記載内容は継続的に見直し、運営情報の明瞭化に努めています。</p>
                <p>業務の効率化と品質向上のため、IT の活用および AI を含む先端ツールの検討を進めています。</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="policy" tabIndex={-1} className="px-6 py-16 md:py-24 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transitionBase()} className="mb-10">
              <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-4">方針</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ fontFamily: "var(--font-serif)" }}>
                価値創造の方針
              </h2>
              <p className="text-sm text-[#E5E5E5] max-w-3xl mt-4 font-sans leading-relaxed">
                2026 年度は、各事業領域における持続的な価値創造に加え、グループ一体での情報発信と連携体制の明確化に取り組みます。
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {policyItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={transitionBase(0.1 * index)}
                  className="border border-[#C5A065]/20 bg-[#1E293B]/30 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-serif font-semibold text-[#C5A065] mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#E5E5E5] font-sans">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="business" tabIndex={-1} className="px-6 py-20 md:py-32 border-y border-[#C5A065]/15 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transitionBase()} className="mb-10">
              <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-4">事業領域</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ fontFamily: "var(--font-serif)" }}>
                事業領域
              </h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transitionBase()} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/business/dental" className="group block">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transitionBase(0.2)} className="border border-[#C5A065]/20 overflow-hidden hover:border-[#C5A065]/60 transition-colors duration-300 bg-[#1E293B]/30 rounded-lg cursor-pointer h-full">
                <div className="relative w-full h-48 flex items-center justify-center">
                  <Image src="/images/dental.png" alt="歯科医院事業承継のイメージ" fill className="object-contain drop-shadow-[0_0_15px_rgba(197,160,101,0.15)]" unoptimized />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-serif font-bold mb-4 text-[#C5A065] text-center group-hover:text-[#E5C888] transition-colors" style={{ fontFamily: "var(--font-serif)" }}>
                    歯科医院 事業承継
                  </h3>
                  <p className="text-sm leading-snug text-[#E5E5E5] font-sans text-center" style={{ fontFamily: "var(--font-sans)" }}>
                    地域医療の灯を守るための戦略的パートナーシップ。円滑な承継と経営の持続的発展を支援します。
                  </p>
                  <p className="mt-4 text-xs text-[#C5A065]/70 group-hover:text-[#C5A065] transition-colors">詳細を見る →</p>
                </div>
              </motion.div>
              </Link>
              <Link href="/business/care" className="group block">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transitionBase(0.4)} className="border border-[#C5A065]/20 overflow-hidden hover:border-[#C5A065]/60 transition-colors duration-300 bg-[#1E293B]/30 rounded-lg cursor-pointer h-full">
                <div className="relative w-full h-48 flex items-center justify-center">
                  <Image src="/images/care.png" alt="介護事業基盤構築のイメージ" fill className="object-contain drop-shadow-[0_0_15px_rgba(197,160,101,0.15)]" unoptimized />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-serif font-bold mb-4 text-[#C5A065] text-center group-hover:text-[#E5C888] transition-colors" style={{ fontFamily: "var(--font-serif)" }}>
                    介護事業 基盤構築
                  </h3>
                  <p className="text-sm leading-snug text-[#E5E5E5] font-sans text-center" style={{ fontFamily: "var(--font-sans)" }}>
                    新規施設の開発および既存事業の再生・再構築。安定的かつ高品質な介護サービスの提供体制を確立します。
                  </p>
                  <p className="mt-4 text-xs text-[#C5A065]/70 group-hover:text-[#C5A065] transition-colors">詳細を見る →</p>
                </div>
              </motion.div>
              </Link>
              <Link href="/business/education" className="group block">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transitionBase(0.6)} className="border border-[#C5A065]/20 overflow-hidden hover:border-[#C5A065]/60 transition-colors duration-300 bg-[#1E293B]/30 rounded-lg cursor-pointer h-full">
                <div className="relative w-full h-48 flex items-center justify-center">
                  <Image src="/images/school.png" alt="教育機関業務提携のイメージ" fill className="object-contain drop-shadow-[0_0_15px_rgba(197,160,101,0.15)]" unoptimized />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-serif font-bold mb-4 text-[#C5A065] text-center group-hover:text-[#E5C888] transition-colors" style={{ fontFamily: "var(--font-serif)" }}>
                    教育機関 業務提携
                  </h3>
                  <p className="text-sm leading-snug text-[#E5E5E5] font-sans text-center" style={{ fontFamily: "var(--font-sans)" }}>
                    グローバル人材の育成を見据えた国境を越える業務提携。教育カリキュラムの共同開発や留学生支援を推進します。
                  </p>
                  <p className="mt-4 text-xs text-[#C5A065]/70 group-hover:text-[#C5A065] transition-colors">詳細を見る →</p>
                </div>
              </motion.div>
              </Link>
              <Link href="/business/real-estate" className="group block">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transitionBase(0.8)} className="border border-[#C5A065]/20 overflow-hidden hover:border-[#C5A065]/60 transition-colors duration-300 bg-[#1E293B]/30 rounded-lg cursor-pointer h-full">
                <div className="relative w-full h-48 flex items-center justify-center">
                  <Image src="/images/building.png" alt="不動産資産管理のイメージ" fill className="object-contain drop-shadow-[0_0_15px_rgba(197,160,101,0.15)]" unoptimized />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-serif font-bold mb-4 text-[#C5A065] text-center group-hover:text-[#E5C888] transition-colors" style={{ fontFamily: "var(--font-serif)" }}>
                    不動産資産管理
                  </h3>
                  <p className="text-sm leading-snug text-[#E5E5E5] font-sans text-center" style={{ fontFamily: "var(--font-sans)" }}>
                    自社保有による収益不動産の長期運用。資産価値の最大化と安定的なキャッシュフローの創出を追求します。
                  </p>
                  <p className="mt-4 text-xs text-[#C5A065]/70 group-hover:text-[#C5A065] transition-colors">詳細を見る →</p>
                </div>
              </motion.div>
              </Link>
            </motion.div>
          </div>
        </section>

        <section id="updates" tabIndex={-1} className="px-6 py-16 md:py-24 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transitionBase()} className="mb-10">
              <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-4">更新情報</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ fontFamily: "var(--font-serif)" }}>
                更新情報
              </h2>
              <p className="text-sm text-[#A0A0A0] font-sans mt-3 max-w-2xl">
                最新の{HOME_UPDATES_VISIBLE_COUNT}件を表示しています。開設は{SITE_OPENED_MONTH_JA}です。一覧は
                <Link href="/updates" className="text-[#C5A065] hover:text-[#E5C888] mx-1">
                  更新情報ページ
                </Link>
                をご覧ください。
              </p>
            </motion.div>
            <div className="space-y-4">
              {updateItems.slice(0, HOME_UPDATES_VISIBLE_COUNT).map((item, index) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transitionBase(0.1 * index)} className="border border-[#C5A065]/20 bg-[#1E293B]/25 p-6 rounded-lg">
                  <p className="text-xs tracking-wider text-[#C5A065] mb-2">{item.date}</p>
                  <h3 className="text-xl font-serif font-semibold mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#E5E5E5] font-sans">{item.description}</p>
                </motion.div>
              ))}
            </div>
            {updateItems.length > HOME_UPDATES_VISIBLE_COUNT && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={transitionBase(0.15)}
                className="mt-8 text-center"
              >
                <Link
                  href="/updates"
                  className="inline-block px-8 py-3 border border-[#C5A065]/50 text-[#C5A065] text-sm tracking-wider hover:bg-[#C5A065]/10 hover:border-[#C5A065] transition-colors"
                >
                  すべての更新情報を見る（全{updateItems.length}件）
                </Link>
              </motion.div>
            )}
          </div>
        </section>

        <section id="faq" tabIndex={-1} className="px-6 py-16 md:py-24 border-t border-[#C5A065]/15 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transitionBase()} className="mb-10">
              <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-4">よくあるご質問</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ fontFamily: "var(--font-serif)" }}>
                よくあるご質問
              </h2>
            </motion.div>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div key={item.question} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transitionBase(0.1 * index)} className="border border-[#C5A065]/20 rounded-lg p-6 bg-[#1E293B]/25">
                  <h3 className="text-lg md:text-xl font-serif font-semibold text-[#C5A065] mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                    {item.question}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-[#E5E5E5] font-sans">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" tabIndex={-1} className="border-t border-[#C5A065]/20 px-6 py-12 md:py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transitionBase()}
            className="text-center mb-8"
          >
            <p
              className="text-xl md:text-2xl font-serif font-semibold mb-8 text-[#C5A065]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              未来を共に創るパートナーとして。
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transitionBase(0.2)}
            className="text-center mb-8"
          >
            <p
              className="text-sm md:text-base text-[#E5E5E5] font-sans"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              公式連絡先：
              <a href="mailto:info@toucagroup.com" className="hover:text-[#C5A065] transition-colors">
                info@toucagroup.com
              </a>
            </p>
            <p className="text-xs md:text-sm text-[#A0A0A0] font-sans mt-3">公式サイト：toucagroup.com</p>
            <p className="text-xs md:text-sm text-[#A0A0A0] font-sans mt-2">
              本サイトは公開情報をもとに運営・更新しています。
            </p>
            <p className="text-xs md:text-sm text-[#A0A0A0] font-sans mt-3 max-w-xl mx-auto leading-relaxed">
              メールでのお問い合わせは順次確認し、原則として 5 営業日以内に返信いたします。長期休業等がある場合は本欄にてお知らせいたします。
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs md:text-sm">
              <a href="/privacy-policy" className="text-[#A0A0A0] hover:text-[#C5A065] transition-colors">
                プライバシーポリシー
              </a>
              <a href="/site-policy" className="text-[#A0A0A0] hover:text-[#C5A065] transition-colors">
                サイト利用方針
              </a>
              <a href="/updates" className="text-[#A0A0A0] hover:text-[#C5A065] transition-colors">
                更新情報
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={transitionBase(0.4)}
            className="text-center pt-8 border-t border-[#C5A065]/10"
          >
            <p
              className="text-xs md:text-sm text-[#A0A0A0] font-sans"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              © 2025–2026 東華株式会社
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
