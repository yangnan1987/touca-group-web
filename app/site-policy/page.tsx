import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const dynamic = "force-static";

export default function SitePolicyPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F5F5F5]">
      <SiteHeader title="サイト利用方針" backHref="/" backLabel="トップページへ戻る" />

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        <header className="space-y-4">
          <p className="text-xs tracking-[0.2em] text-[#C5A065]">サイト運営方針</p>
          <h1 className="text-3xl md:text-4xl font-bold">サイト利用方針</h1>
          <p className="text-sm text-[#E5E5E5]">サイト開設：2025年1月</p>
          <p className="text-sm text-[#E5E5E5]">最終更新日：2026年3月1日</p>
        </header>

        <section className="space-y-3 text-sm md:text-base leading-relaxed text-[#E5E5E5]">
          <h2 className="text-xl text-[#C5A065] font-semibold">1. 掲載情報について</h2>
          <p>
            本サイトは、東華株式会社の公開可能な情報を掲載することを目的として運営しています。掲載情報は予告なく更新または変更される場合があります。
          </p>
        </section>

        <section className="space-y-3 text-sm md:text-base leading-relaxed text-[#E5E5E5]">
          <h2 className="text-xl text-[#C5A065] font-semibold">2. 著作権について</h2>
          <p>本サイトに掲載されている文章・画像・その他のコンテンツの著作権は、当社または正当な権利者に帰属します。</p>
        </section>

        <section className="space-y-3 text-sm md:text-base leading-relaxed text-[#E5E5E5]">
          <h2 className="text-xl text-[#C5A065] font-semibold">3. 免責事項</h2>
          <p>
            当社は、本サイトに掲載する情報の正確性向上に努めますが、本サイトの利用により生じたいかなる損害についても、当社の故意または重大な過失がある場合を除き責任を負いません。
          </p>
        </section>

        <section className="space-y-3 text-sm md:text-base leading-relaxed text-[#E5E5E5]">
          <h2 className="text-xl text-[#C5A065] font-semibold">4. お問い合わせ</h2>
          <p>
            本サイトに関するお問い合わせは、下記までご連絡ください。
            <br />
            メールアドレス：info@toucagroup.com
          </p>
        </section>

        <div className="pt-6 border-t border-[#C5A065]/20">
          <Link href="/" className="text-[#C5A065] hover:text-[#E5E5E5] transition-colors">
            トップページへ戻る
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
