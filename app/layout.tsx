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

const siteDescription =
  "東華株式会社（トウカ、TOUCA GROUP Co., Ltd.）の公式サイトです。大阪市中央区を拠点に、不動産資産管理、歯科医院の事業承継、介護事業、教育機関との業務提携に関する公開情報を掲載しています。";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://toucagroup.com/#website",
      url: "https://toucagroup.com",
      name: "東華株式会社",
      alternateName: ["トウカ", "TOUCA GROUP Co., Ltd."],
      inLanguage: "ja",
      publisher: { "@id": "https://toucagroup.com/#organization" },
    },
    {
      "@type": ["Organization", "RealEstateAgent"],
      "@id": "https://toucagroup.com/#organization",
      name: "東華株式会社",
      legalName: "東華株式会社",
      alternateName: ["トウカ", "TOUCA GROUP Co., Ltd."],
      url: "https://toucagroup.com",
      email: "info@toucagroup.com",
      vatID: "T2120001268465",
      identifier: [
        {
          "@type": "PropertyValue",
          name: "法人番号",
          value: "2120001268465",
        },
        {
          "@type": "PropertyValue",
          name: "インボイス登録番号",
          value: "T2120001268465",
        },
      ],
      address: {
        "@type": "PostalAddress",
        postalCode: "540-0013",
        addressCountry: "JP",
        addressRegion: "大阪府",
        addressLocality: "大阪市中央区",
        streetAddress: "内久宝寺町4-1-19 リンクスタイル中央ビル2階",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://toucagroup.com"),
  title: {
    default: "東華株式会社 | 公式サイト",
    template: "%s | 東華株式会社",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "東華株式会社 | 公式サイト",
    description: siteDescription,
    url: "https://toucagroup.com",
    siteName: "東華株式会社",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 2752,
        height: 1536,
        alt: "東華株式会社 公式サイト",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "東華株式会社 | 公式サイト",
    description: siteDescription,
    images: ["/images/hero.jpg"],
  },
  verification: {
    google: "CwmIb52DZCnYBdk_WPkZeaa7NrrZILJGcFsDmAZJIGk",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
