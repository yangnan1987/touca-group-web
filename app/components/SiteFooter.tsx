import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#C5A065]/20 bg-[#0F172A] px-6 py-10 mt-16">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <p className="text-xl font-serif font-semibold text-[#C5A065]">
          未来を共に創るパートナーとして。
        </p>
        <p className="text-sm text-[#E5E5E5]">
          公式連絡先：
          <a href="mailto:info@toucagroup.com" className="hover:text-[#C5A065] transition-colors">
            info@toucagroup.com
          </a>
        </p>
        <p className="text-xs text-[#A0A0A0]">公式サイト：toucagroup.com</p>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-[#A0A0A0]">
          <Link href="/privacy-policy" className="hover:text-[#C5A065] transition-colors">
            プライバシーポリシー
          </Link>
          <Link href="/site-policy" className="hover:text-[#C5A065] transition-colors">
            サイト利用方針
          </Link>
          <Link href="/updates" className="hover:text-[#C5A065] transition-colors">
            更新情報
          </Link>
        </div>
        <div className="pt-4 border-t border-[#C5A065]/10">
          <p className="text-xs text-[#A0A0A0]">© 2025–2026 東華株式会社</p>
        </div>
      </div>
    </footer>
  );
}
