"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F5F5F5]">
      {/* Branding Logo - Top Left */}
      <div className="fixed top-0 left-0 z-50 p-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2
            className="text-2xl md:text-3xl font-serif font-bold text-white mb-1"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            東華株式会社
          </h2>
          <p
            className="text-xs md:text-sm font-sans text-[#C5A065] tracking-wider"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            TOUCA GROUP Co., Ltd.
          </p>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Hero Background"
            fill
            priority
            quality={100}
            className="object-cover"
            unoptimized
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto z-10 relative"
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
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-[#C5A065] text-[#0F172A] font-semibold rounded-none hover:bg-[#B8945A] transition-colors duration-300 font-sans tracking-wide"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              お問い合わせ
            </a>
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Card 1: Dental */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="border border-[#C5A065]/20 overflow-hidden hover:border-[#C5A065]/40 transition-colors duration-300 bg-[#1E293B]/30 rounded-lg"
            >
              <div className="relative w-full h-48 flex items-center justify-center bg-[#1E293B]/50 rounded-t-lg">
                <Image
                  src="/images/dental.jpg"
                  alt="歯科医院 事業承継"
                  fill
                  className="object-contain rounded-t-lg"
                  unoptimized
                />
              </div>
              <div className="p-6 text-center">
                <h3
                  className="text-xl font-serif font-bold mb-4 text-[#C5A065] text-center"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  歯科医院 事業承継
                </h3>
                <p
                  className="text-sm leading-snug text-[#E5E5E5] font-sans text-center"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  地域医療の灯を守るための戦略的パートナーシップ。円滑な承継と経営の持続的発展を支援します。
                </p>
              </div>
            </motion.div>

            {/* Card 2: Nursing Care */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="border border-[#C5A065]/20 overflow-hidden hover:border-[#C5A065]/40 transition-colors duration-300 bg-[#1E293B]/30 rounded-lg"
            >
              <div className="relative w-full h-48 flex items-center justify-center bg-[#1E293B]/50 rounded-t-lg">
                <Image
                  src="/images/care.jpg"
                  alt="介護事業 基盤構築"
                  fill
                  className="object-contain rounded-t-lg"
                  unoptimized
                />
              </div>
              <div className="p-6 text-center">
                <h3
                  className="text-xl font-serif font-bold mb-4 text-[#C5A065] text-center"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  介護事業 基盤構築
                </h3>
                <p
                  className="text-sm leading-snug text-[#E5E5E5] font-sans text-center"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  新規施設の開発および既存事業の再生・再構築。安定的かつ高品質な介護サービスの提供体制を確立します。
                </p>
              </div>
            </motion.div>

            {/* Card 3: Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="border border-[#C5A065]/20 overflow-hidden hover:border-[#C5A065]/40 transition-colors duration-300 bg-[#1E293B]/30 rounded-lg"
            >
              <div className="relative w-full h-48 flex items-center justify-center bg-[#1E293B]/50 rounded-t-lg">
                <Image
                  src="/images/school.jpg"
                  alt="教育機関 業務提携"
                  fill
                  className="object-contain rounded-t-lg"
                  unoptimized
                />
              </div>
              <div className="p-6 text-center">
                <h3
                  className="text-xl font-serif font-bold mb-4 text-[#C5A065] text-center"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  教育機関 業務提携
                </h3>
                <p
                  className="text-sm leading-snug text-[#E5E5E5] font-sans text-center"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  グローバル人材の育成を見据えた国境を越える業務提携。教育カリキュラムの共同開発や留学生支援を推進します。
                </p>
              </div>
            </motion.div>

            {/* Card 4: Real Estate */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="border border-[#C5A065]/20 overflow-hidden hover:border-[#C5A065]/40 transition-colors duration-300 bg-[#1E293B]/30 rounded-lg"
            >
              <div className="relative w-full h-48 flex items-center justify-center bg-[#1E293B]/50 rounded-t-lg">
                <Image
                  src="/images/building.jpg"
                  alt="不動産資産管理"
                  fill
                  className="object-contain rounded-t-lg"
                  unoptimized
                />
              </div>
              <div className="p-6 text-center">
                <h3
                  className="text-xl font-serif font-bold mb-4 text-[#C5A065] text-center"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  不動産資産管理
                </h3>
                <p
                  className="text-sm leading-snug text-[#E5E5E5] font-sans text-center"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  自社保有による収益不動産の長期運用。資産価値の最大化と安定的なキャッシュフローの創出を追求します。
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-[#C5A065]/20 px-6 py-12 md:py-16">
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
            className="text-center mb-8"
          >
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
