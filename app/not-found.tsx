import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { pageMetadata } from "./lib/pageMeta";

export const metadata: Metadata = pageMetadata({
  title: "ページが見つかりません",
  description:
    "お探しのページは東華株式会社の公式サイト内に見つかりませんでした。トップページから目的の情報をお探しください。",
  path: "/404.html",
  noindex: true,
});

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F5F5F5]">
      <SiteHeader title="ページが見つかりません" backHref="/" backLabel="トップページへ戻る" />
      <main className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">404</p>
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">ページが見つかりません</h1>
        <p className="text-[#E5E5E5] leading-relaxed mb-8">
          アドレスをご確認いただくか、トップページから目的のページをお探しください。
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[#C5A065] text-[#0F172A] font-semibold hover:bg-[#B8945A] transition-colors"
        >
          トップページへ戻る
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
