import type { Metadata } from "next";

const SITE_NAME = "東華株式会社";

/** 子页面标题会套用 layout 的 `%s | 東華株式会社`。这里同时写好分享用标题和本页规范链接。 */
export function pageMetadata(options: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  const fullTitle = `${options.title} | ${SITE_NAME}`;
  const url =
    options.path === "/"
      ? "https://toucagroup.com"
      : `https://toucagroup.com${options.path}`;

  return {
    title: options.title,
    description: options.description,
    alternates: { canonical: options.path },
    openGraph: {
      title: fullTitle,
      description: options.description,
      url,
    },
    twitter: {
      title: fullTitle,
      description: options.description,
    },
    ...(options.noindex
      ? {
          robots: {
            index: false,
            follow: false,
            nocache: true,
            googleBot: {
              index: false,
              follow: false,
              noimageindex: true,
            },
          },
        }
      : {}),
  };
}
