import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://toucagroup.com"),
  title: "東華株式会社 | 公式サイト",
  description:
    "東華株式会社（TOUCA GROUP Co., Ltd.）の公式サイトです。歯科医院事業承継、介護事業基盤構築、教育機関業務提携、不動産資産管理に関する公開情報を掲載しています。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "東華株式会社 | 公式サイト",
    description:
      "東華株式会社（TOUCA GROUP Co., Ltd.）の公式サイトです。事業領域、更新情報、お問い合わせ窓口などの公開情報を掲載しています。",
    url: "https://toucagroup.com",
    siteName: "東華株式会社",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "東華株式会社 公式サイト",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "東華株式会社 | 公式サイト",
    description:
      "東華株式会社（TOUCA GROUP Co., Ltd.）の公式サイトです。公開情報を確認しやすい構成でご案内しています。",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSerifJP.variable} ${notoSansJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
