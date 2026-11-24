# AGENTS.md — touca-group-web

面向 AI 助手与维护者的快速地图。

## 项目目的

東華株式会社（TOUCA GROUP Co., Ltd.）企业站点（Next.js，静态导出）。对外文案以单一会社表述为准，避免「企業グループ／グループ体制」等尚未成立的集团含义。

## 技术栈

- Next.js 16、React 19、TypeScript
- Tailwind CSS 4、Framer Motion、Chart.js / react-chartjs-2（见 `package.json`）
- **`next.config.ts`**：`output: 'export'`、`images.unoptimized: true` → 构建产物在 **`out/`**

## 目录地图

| 路径 | 说明 |
|------|------|
| `app/layout.tsx`、`app/page.tsx` | 根布局与首页 |
| `app/updates/` | 更新/动态页 |
| `app/news/` | 新闻相关页 |
| `app/business/*` | 各业务子页（地产、齿科、教育、介护等） |
| `app/privacy-policy/`、`app/site-policy/` | 政策页 |
| `app/components/` | `SiteHeader`、`SiteFooter`、`BusinessCharts` 等 |
| `out/` | 静态导出输出（勿手工当源码改） |

## 常用命令

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run gen:qr
```

部署前以 `npm run build` 生成 `out/` 为准。

## 环境变量

- 纯静态导出场景下通常无服务端密钥；若增加 API 或运行时配置，在 AGENTS.md 本节补充变量**名称**即可。

## 最近变更

- **2026-11-24**：首页 `#greeting` ご挨拶正文整段替换为已确认的代表问候（投资公司定位、事业范围、IT/AI、署名右对齐）。首页事业领域「不動産資産管理」卡片与 `/business/real-estate` 复用 `companyProfile.ts` 的保有物件与モデルハウス列表，格式与会社概要页相同。会社概要页、隐藏页与 JSON-LD 未改，未加入电话号码。
- **2026-11-24**：Next.js 16.1.4 → 16.4.6、eslint-config-next 同步升级。GitHub Pages 构建在 Google Fonts 返回无扩展名 `/l/font?kit=` 地址时，Turbopack 会报 `next/font/google queries have exactly one entry`；16.4.3 起已修复。`app/layout.tsx` 的 Noto Sans JP / Noto Serif JP 调用未改。
- **2026-11-24**：`/company` 保有物件改为四行明细（阶数、再建筑、クライアント・ヴィラ与面积），其下新增「モデルハウス」一行「大阪府吹田市古江台　３棟」。表、首页、隐藏页与 JSON-LD 未改。
- **2026-11-24**：`/company` 保有物件中，吹田市古江台两行（3丁目住宅1棟、6丁目住宅3棟）合并为一行「吹田市古江台　モデルハウス4棟」。首页问候里的「マンション・テナントビル・住宅」未改。
- **2026-11-24**：会社概要改为独立页 `/company`（`out/company.html`，与 `/updates` 相同，无尾斜杠可访问，`/company/` 在 GitHub Pages 上与其他子页一样为 404）。首页 `#company` 区块删除，导航「会社概要」指向该页；子页导航用 `/#greeting` 等回到首页。问候正文不再列物件，物件列表移至会社概要页。隐藏页与 JSON-LD 未改。
- **2026-11-24**：首页导航「会社案内」改为「ご挨拶」（锚点 `#greeting`），三段正文替换为代表问候，并列出大阪府内保有物件的区域与类型。原会社概要表移至独立区块 `#company`，导航放在「ご挨拶」之后；表的商号／代表取締役／設立／資本金／所在地用字未改。隐藏页 `/c/touca2026cp` 与 JSON-LD 未改。
- **2026-11-24**：首页「会社案内」增加「会社概要」两列表（商号、代表取締役 宋 超、設立 2024年9月、資本金 9,500万円、所在地按履歴事項全部証明書）。页脚、首页联系区与隐藏会社案内 `/c/touca2026cp` 的地址改为四丁目1番19号；隐藏页代表者为「宋 超」，設立保持「令和6年9月6日」。JSON-LD 仅更新 `streetAddress`，并写入 `foundingDate` `2024-09-06`，不含 founder、不含 telephone。站点仅日文，无英/中页面。
- **2026-11-23**：News id 70 追加都心5区オフィス10月空室率稿（标题与正文仅采用三鬼商事东京オフィスマーケット给定事实，日期 2026.11.23、分类 不動産，出典 https://www.e-miki.com/rent/tokyo.html）。来源核对表见 `docs/news-sources-2026-11.md`。
- **2026-11-16**：News id 69 追加大阪ビジネス地区10月空室率稿（标题与正文仅采用三鬼商事大阪オフィスマーケット给定事实，日期 2026.11.16、分类 不動産，出典 https://e-miki.com/rent/osaka.html）。来源核对表见 `docs/news-sources-2026-11.md`。
- **2026-11-09**：News 新增介護「経営情報報告の受付再開」（`app/data/newsData.ts` id 68、2026.10.26／介護保险最新信息 Vol.1546）。来源记入 `docs/news-sources-2026-11.md`。
- **2026-10-26**：News id 66 追加大阪ビジネス地区空室率稿（标题与正文按三鬼商事大阪オフィスマーケット原文，日期 2026.10.26、分类 不動産，出典 https://www.e-miki.com/rent/osaka.html）。来源核对表见 `docs/news-sources-2026-10.md`。
- **2026-10-21**：首页与 `/news` 的新闻改为统一尺寸的可折叠卡片（默认约 3 行摘要，「続きを読む ▼」/「閉じる ▲」）。首页只显示最新 6 条，并链到 `/news`。
- **2026-10-21**：News id 65 由「既存非住宅の省エネ改修」改为都道府県地価調査稿（标题、正文、出典 URL 与 yangnan1987.github.io `368c21b` 的 `n_20261021_2` 一致，日期 2026.10.21、分类 不動産）。id 64 的都心5区オフィス稿保留。来源核对表见 `docs/news-sources-2026-10.md`。
- **2026-10-01**：SEO 小修——各公开页独立 title / description / canonical / OGP；根布局加入 Organization・RealEstateAgent JSON-LD（法人番号、发票号、正确地址）和 Google Search Console 验证标记；页脚与隐藏会社案内更正邮编 540-0022→540-0013；404 改为日文且 noindex。未改页面结构与正文叙述。
- **2026-08-24**：手机端适配——首页底部 7 项导航改为顶部汉堡菜单；取消 fixed Logo 遮挡正文；`SiteHeader` 窄屏改为「戻る」；图表固定高度并禁止横向撑开。
- **2026-08-18**：删除首页「方針」区块；公开页面去掉「企業グループ／グループ体制／グループ企業」等尚未成立的集团表述。隐藏会社案内页 `/c/touca2026cp` 保持原样。英文商号 `TOUCA GROUP Co., Ltd.` 与域名保持不变。
- **2026-08-05**：News 补充 2026.03.20～08.05 真实行业动态（`app/data/newsData.ts` id 31–63）；来源核对表见 `docs/news-sources-2026-03-to-08.md`（页面不展示链接）。
- **2026-05-22**：新增隐藏会社案内页 `/c/touca2026cp`（`app/c/touca2026cp/page.tsx`，`metadata.robots = noindex/nofollow`，不写入 sitemap，不从任何页面引用），仅供扫码访问；新增 `scripts/generate-qr.mjs` 与 `npm run gen:qr`，产出 `public/qr/company-profile.{png,svg}` 与仓库根 `company-profile-qr.png`；补齐 `chart.js` / `react-chartjs-2` 到 `dependencies`，并新增 `qrcode` / `@types/qrcode` 到 `devDependencies`。
- **2026-04-01**：新增根目录 `AGENTS.md`；约定重大变更后更新本节。
