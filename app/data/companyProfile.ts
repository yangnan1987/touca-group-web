export const COMPANY_ADDRESS =
  "〒540-0013 大阪府大阪市中央区内久宝寺町四丁目1番19号 リンクスタイル中央ビル2階";

export const companyOverview = [
  { label: "商号", value: "東華株式会社" },
  { label: "代表取締役", value: "宋 超" },
  { label: "設立", value: "2024年9月" },
  { label: "資本金", value: "9,500万円" },
  { label: "所在地", value: COMPANY_ADDRESS },
] as const;

export const heldProperties = [
  "大阪市浪速区元町3丁目　マンション 1棟（９階建）",
  "大阪市中央区道頓堀2丁目　テナントビル　1棟（５階建＋地下１階）",
  "大阪市中央区難波2丁目　テナントビル　1棟（3階建再建築予定）",
  "大阪府吹田市古江台　クライアント・ヴィラ　１棟（2階建＋車庫、316.17㎡）",
] as const;

export const modelHouses = [
  "大阪府吹田市古江台　３棟",
] as const;
