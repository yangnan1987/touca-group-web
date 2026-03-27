import Link from "next/link";

export const dynamic = "force-static";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-[#F5F5F5] px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-4">
          <p className="text-xs tracking-[0.2em] text-[#C5A065]">個人情報保護方針</p>
          <h1 className="text-3xl md:text-4xl font-bold">プライバシーポリシー</h1>
          <p className="text-sm text-[#E5E5E5]">最終更新日：2026年3月</p>
        </header>

        <section className="space-y-3 text-sm md:text-base leading-relaxed text-[#E5E5E5]">
          <h2 className="text-xl text-[#C5A065] font-semibold">1. 基本方針</h2>
          <p>
            東華株式会社（以下「当社」）は、当社公式サイト（toucagroup.com）において取得する情報について、関連法令および本ポリシーに基づき適切に取り扱います。
          </p>
        </section>

        <section className="space-y-3 text-sm md:text-base leading-relaxed text-[#E5E5E5]">
          <h2 className="text-xl text-[#C5A065] font-semibold">2. 取得する情報</h2>
          <p>
            本サイトには入力フォームを設置していません。お問い合わせはメールで受け付けており、当社が受信する情報は、ご連絡時に送信者がメール本文等に記載した内容です。
          </p>
        </section>

        <section className="space-y-3 text-sm md:text-base leading-relaxed text-[#E5E5E5]">
          <h2 className="text-xl text-[#C5A065] font-semibold">3. 利用目的</h2>
          <p>取得した情報は、お問い合わせへの対応、連絡、必要な業務上の確認のために利用します。</p>
        </section>

        <section className="space-y-3 text-sm md:text-base leading-relaxed text-[#E5E5E5]">
          <h2 className="text-xl text-[#C5A065] font-semibold">4. 第三者提供</h2>
          <p>法令に基づく場合を除き、本人の同意なく第三者へ提供しません。</p>
        </section>

        <section className="space-y-3 text-sm md:text-base leading-relaxed text-[#E5E5E5]">
          <h2 className="text-xl text-[#C5A065] font-semibold">5. お問い合わせ窓口</h2>
          <p>
            個人情報の取り扱いに関するお問い合わせは、以下の窓口までご連絡ください。
            <br />
            メールアドレス：info@toucagroup.com
          </p>
        </section>

        <div className="pt-6 border-t border-[#C5A065]/20">
          <Link href="/" className="text-[#C5A065] hover:text-[#E5E5E5] transition-colors">
            トップページへ戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
