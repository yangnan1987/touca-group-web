import Link from "next/link";

interface SiteHeaderProps {
  title: string;
  section?: string;
  backHref?: string;
  backLabel?: string;
}

export default function SiteHeader({
  title,
  section,
  backHref = "/",
  backLabel = "トップページへ戻る",
}: SiteHeaderProps) {
  return (
    <header className="bg-[#0F172A] border-b border-[#C5A065]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6">
        <div className="flex items-center justify-between gap-3 min-w-0">
          <Link href="/" className="flex-shrink-0 group min-w-0">
            <p className="text-lg sm:text-xl font-serif font-bold text-white group-hover:text-[#C5A065] transition-colors">
              東華株式会社
            </p>
            <p className="text-[10px] sm:text-xs text-[#C5A065] tracking-wide sm:tracking-wider">TOUCA GROUP Co., Ltd.</p>
          </Link>
          <Link
            href={backHref}
            className="sm:hidden flex-shrink-0 text-xs text-[#A0A0A0] hover:text-[#C5A065] transition-colors border border-[#C5A065]/30 hover:border-[#C5A065]/60 px-3 py-1.5 rounded"
          >
            戻る
          </Link>
        </div>

        <nav aria-label="パンくずナビゲーション" className="hidden md:flex items-center gap-3 text-sm text-[#A0A0A0] min-w-0">
          <Link href="/" className="hover:text-[#C5A065] transition-colors flex-shrink-0">
            ホーム
          </Link>
          {section && (
            <>
              <span className="flex-shrink-0">›</span>
              <span className="text-[#A0A0A0] flex-shrink-0">{section}</span>
            </>
          )}
          <span className="flex-shrink-0">›</span>
          <span className="text-[#E5E5E5] truncate">{title}</span>
        </nav>

        <Link
          href={backHref}
          className="hidden sm:inline-flex flex-shrink-0 text-xs text-[#A0A0A0] hover:text-[#C5A065] transition-colors border border-[#C5A065]/30 hover:border-[#C5A065]/60 px-3 py-1.5 rounded"
        >
          {backLabel}
        </Link>
      </div>
    </header>
  );
}
