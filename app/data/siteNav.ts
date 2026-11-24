/** 首页用页内锚点；其他页面用回到首页的锚点，会社概要始终进入独立页面。 */
export function siteNavItems(onHome: boolean) {
  const section = (id: string) => (onHome ? `#${id}` : `/#${id}`);
  return [
    { href: section("greeting"), label: "ご挨拶", internal: onHome },
    { href: "/company", label: "会社概要", internal: false },
    { href: section("business"), label: "事業領域", internal: onHome },
    { href: section("updates"), label: "更新情報", internal: onHome },
    { href: section("faq"), label: "よくあるご質問", internal: onHome },
    { href: "/updates", label: "更新一覧", internal: false },
    { href: "/news", label: "ニュース", internal: false },
    { href: section("contact"), label: "お問い合わせ", internal: onHome },
  ];
}
