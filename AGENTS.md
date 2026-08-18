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

- **2026-08-18**：删除首页「方針」区块；公开页面去掉「企業グループ／グループ体制／グループ企業」等尚未成立的集团表述。隐藏会社案内页 `/c/touca2026cp` 保持原样。英文商号 `TOUCA GROUP Co., Ltd.` 与域名保持不变。
- **2026-08-05**：News 补充 2026.03.20～08.05 真实行业动态（`app/data/newsData.ts` id 31–63）；来源核对表见 `docs/news-sources-2026-03-to-08.md`（页面不展示链接）。
- **2026-05-22**：新增隐藏会社案内页 `/c/touca2026cp`（`app/c/touca2026cp/page.tsx`，`metadata.robots = noindex/nofollow`，不写入 sitemap，不从任何页面引用），仅供扫码访问；新增 `scripts/generate-qr.mjs` 与 `npm run gen:qr`，产出 `public/qr/company-profile.{png,svg}` 与仓库根 `company-profile-qr.png`；补齐 `chart.js` / `react-chartjs-2` 到 `dependencies`，并新增 `qrcode` / `@types/qrcode` 到 `devDependencies`。
- **2026-04-01**：新增根目录 `AGENTS.md`；约定重大变更后更新本节。
