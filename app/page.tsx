"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F5F5F5]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto z-10"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#C5A065] text-sm md:text-base tracking-widest mb-6 font-sans"
          >
            TOUCA GROUP ASSET MANAGEMENT
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            信念こそが、未来を拓く。
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl mb-12 text-[#E5E5E5] font-sans"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            投資の力で、新たな価値と可能性を創造する。
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <button className="px-8 py-4 bg-[#C5A065] text-[#0F172A] font-semibold rounded-none hover:bg-[#B8945A] transition-colors duration-300 font-sans tracking-wide">
              お問い合わせ
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Business Section */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="border border-[#C5A065]/20 p-8 md:p-10 hover:border-[#C5A065]/40 transition-colors duration-300 bg-[#1E293B]/30"
            >
              <h3
                className="text-2xl md:text-3xl font-serif font-bold mb-6 text-[#C5A065]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                歯科業界M&A
              </h3>
              <p
                className="text-base md:text-lg leading-relaxed text-[#E5E5E5] font-sans"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                技術承継と経営資源の最適化を通じ、地域医療の質的向上と持続可能な発展に貢献します。
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="border border-[#C5A065]/20 p-8 md:p-10 hover:border-[#C5A065]/40 transition-colors duration-300 bg-[#1E293B]/30"
            >
              <h3
                className="text-2xl md:text-3xl font-serif font-bold mb-6 text-[#C5A065]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                介護関連M&A
              </h3>
              <p
                className="text-base md:text-lg leading-relaxed text-[#E5E5E5] font-sans"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                高齢化社会の課題に対し、強固な事業基盤と高品質なサービス体制を構築し、安心できる社会インフラを支えます。
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="border border-[#C5A065]/20 p-8 md:p-10 hover:border-[#C5A065]/40 transition-colors duration-300 bg-[#1E293B]/30"
            >
              <h3
                className="text-2xl md:text-3xl font-serif font-bold mb-6 text-[#C5A065]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                教育機関M&A
              </h3>
              <p
                className="text-base md:text-lg leading-relaxed text-[#E5E5E5] font-sans"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                次世代の可能性を広げる教育環境への投資。グローバルな視点を持つ人材育成を加速させます。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#C5A065]/20 px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center space-y-4 mb-8"
          >
            <p
              className="text-sm md:text-base text-[#E5E5E5] font-sans"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              〒540-0013 大阪府大阪市中央区内久宝寺町4-1-19 リンクスタイル中央ビル2階
            </p>
            <p
              className="text-sm md:text-base text-[#E5E5E5] font-sans"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              <a href="mailto:info@toucagroup.com" className="hover:text-[#C5A065] transition-colors">
                info@toucagroup.com
              </a>
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center pt-8 border-t border-[#C5A065]/10"
          >
            <p
              className="text-xs md:text-sm text-[#A0A0A0] font-sans"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              © 2026 TOUCA GROUP. All Rights Reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
