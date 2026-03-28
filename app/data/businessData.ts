// 各事業領域の市場データ
// 出典：国土交通省、厚生労働省、文部科学省の公表統計を参照

export interface ChartDataset {
  label: string;
  data: number[];
  borderColor?: string;
  backgroundColor?: string | string[];
}

export interface BusinessChartData {
  lineChart: {
    title: string;
    unit: string;
    note: string;
    labels: string[];
    datasets: ChartDataset[];
  };
  pieChart: {
    title: string;
    unit: string;
    note: string;
    labels: string[];
    datasets: ChartDataset[];
  };
  barChart: {
    title: string;
    unit: string;
    note: string;
    labels: string[];
    datasets: ChartDataset[];
  };
}

// ─────────────────────────────────────────────
// 不動産資産管理
// 出典：国土交通省「不動産投資市場の現状と課題」
// ─────────────────────────────────────────────
export const realEstateData: BusinessChartData = {
  lineChart: {
    title: "不動産投資市場規模の推移",
    unit: "億円",
    note: "出典：国土交通省「不動産投資市場政策研究会」参照値",
    labels: ["2018年", "2019年", "2020年", "2021年", "2022年", "2023年", "2024年"],
    datasets: [
      {
        label: "不動産投資市場規模（億円）",
        data: [38200, 40100, 35600, 39800, 43500, 46200, 48700],
        borderColor: "#C5A065",
        backgroundColor: "rgba(197,160,101,0.15)",
      },
    ],
  },
  pieChart: {
    title: "用途別不動産取引構成（2024年）",
    unit: "%",
    note: "出典：国土交通省「不動産価格指数」等を基に推計",
    labels: ["住宅（マンション・戸建）", "オフィス", "物流施設", "商業施設", "ホテル・その他"],
    datasets: [
      {
        label: "構成比",
        data: [38, 24, 18, 12, 8],
        backgroundColor: [
          "rgba(197,160,101,0.85)",
          "rgba(148,116,70,0.85)",
          "rgba(100,80,50,0.85)",
          "rgba(197,160,101,0.4)",
          "rgba(75,60,40,0.7)",
        ],
      },
    ],
  },
  barChart: {
    title: "不動産価格指数（住宅）の推移",
    unit: "（2010年＝100）",
    note: "出典：国土交通省「不動産価格指数」",
    labels: ["2019年", "2020年", "2021年", "2022年", "2023年", "2024年"],
    datasets: [
      {
        label: "マンション",
        data: [152, 158, 175, 192, 208, 221],
        backgroundColor: "rgba(197,160,101,0.8)",
      },
      {
        label: "戸建住宅",
        data: [108, 110, 116, 122, 126, 130],
        backgroundColor: "rgba(100,80,50,0.7)",
      },
    ],
  },
};

// ─────────────────────────────────────────────
// 介護事業基盤構築
// 出典：厚生労働省「介護給付費等実態統計」「介護保険事業状況報告」
// ─────────────────────────────────────────────
export const careData: BusinessChartData = {
  lineChart: {
    title: "介護保険給付費の推移",
    unit: "億円",
    note: "出典：厚生労働省「介護保険事業状況報告（年報）」",
    labels: ["2018年度", "2019年度", "2020年度", "2021年度", "2022年度", "2023年度", "2024年度"],
    datasets: [
      {
        label: "介護保険給付費（億円）",
        data: [97456, 101280, 103956, 109178, 114320, 119840, 125600],
        borderColor: "#C5A065",
        backgroundColor: "rgba(197,160,101,0.15)",
      },
    ],
  },
  pieChart: {
    title: "介護サービス種別構成（2023年度）",
    unit: "%",
    note: "出典：厚生労働省「介護給付費等実態統計」",
    labels: ["居宅サービス", "施設サービス", "地域密着型サービス", "居宅介護支援"],
    datasets: [
      {
        label: "構成比",
        data: [45, 31, 17, 7],
        backgroundColor: [
          "rgba(197,160,101,0.85)",
          "rgba(148,116,70,0.85)",
          "rgba(100,80,50,0.7)",
          "rgba(197,160,101,0.4)",
        ],
      },
    ],
  },
  barChart: {
    title: "要介護・要支援認定者数の推移",
    unit: "万人",
    note: "出典：厚生労働省「介護保険事業状況報告（年報）」",
    labels: ["2019年", "2020年", "2021年", "2022年", "2023年", "2024年"],
    datasets: [
      {
        label: "要介護認定者数（万人）",
        data: [655, 669, 681, 695, 712, 728],
        backgroundColor: "rgba(197,160,101,0.8)",
      },
    ],
  },
};

// ─────────────────────────────────────────────
// 歯科医院事業承継
// 出典：厚生労働省「医療施設調査」「歯科医療費の動向」
// ─────────────────────────────────────────────
export const dentalData: BusinessChartData = {
  lineChart: {
    title: "歯科診療所数の推移",
    unit: "施設",
    note: "出典：厚生労働省「医療施設（動態）調査」",
    labels: ["2018年", "2019年", "2020年", "2021年", "2022年", "2023年", "2024年"],
    datasets: [
      {
        label: "歯科診療所数（施設）",
        data: [68609, 68500, 67899, 67766, 67755, 67620, 67440],
        borderColor: "#C5A065",
        backgroundColor: "rgba(197,160,101,0.15)",
      },
    ],
  },
  pieChart: {
    title: "歯科医院の経営形態別構成（2023年）",
    unit: "%",
    note: "出典：厚生労働省「医療施設調査」等を基に推計",
    labels: ["個人経営", "医療法人", "その他（社団法人等）"],
    datasets: [
      {
        label: "構成比",
        data: [62, 34, 4],
        backgroundColor: [
          "rgba(197,160,101,0.85)",
          "rgba(148,116,70,0.85)",
          "rgba(100,80,50,0.7)",
        ],
      },
    ],
  },
  barChart: {
    title: "歯科医療費の推移",
    unit: "億円",
    note: "出典：厚生労働省「医療費の動向（概算医療費）」",
    labels: ["2019年度", "2020年度", "2021年度", "2022年度", "2023年度", "2024年度"],
    datasets: [
      {
        label: "歯科医療費（億円）",
        data: [29900, 27800, 30200, 31400, 32600, 33500],
        backgroundColor: "rgba(197,160,101,0.8)",
      },
    ],
  },
};

// ─────────────────────────────────────────────
// 教育機関業務提携
// 出典：文部科学省「外国人留学生在籍状況調査」「学校基本調査」
// ─────────────────────────────────────────────
export const educationData: BusinessChartData = {
  lineChart: {
    title: "在日外国人留学生数の推移",
    unit: "人",
    note: "出典：文部科学省「外国人留学生在籍状況調査」・日本学生支援機構",
    labels: ["2018年", "2019年", "2020年", "2021年", "2022年", "2023年", "2024年"],
    datasets: [
      {
        label: "外国人留学生数（人）",
        data: [298980, 312214, 279597, 242444, 260699, 309537, 330000],
        borderColor: "#C5A065",
        backgroundColor: "rgba(197,160,101,0.15)",
      },
    ],
  },
  pieChart: {
    title: "留学生の出身地域別構成（2023年）",
    unit: "%",
    note: "出典：日本学生支援機構「外国人留学生在籍状況調査」",
    labels: ["中国", "ベトナム", "ネパール", "韓国", "その他"],
    datasets: [
      {
        label: "構成比",
        data: [38, 19, 10, 9, 24],
        backgroundColor: [
          "rgba(197,160,101,0.85)",
          "rgba(148,116,70,0.85)",
          "rgba(100,80,50,0.7)",
          "rgba(197,160,101,0.4)",
          "rgba(75,60,40,0.7)",
        ],
      },
    ],
  },
  barChart: {
    title: "日本語教育機関数の推移",
    unit: "校",
    note: "出典：文化庁「日本語教育機関実態調査」",
    labels: ["2019年", "2020年", "2021年", "2022年", "2023年", "2024年"],
    datasets: [
      {
        label: "日本語教育機関数（校）",
        data: [741, 698, 670, 695, 738, 780],
        backgroundColor: "rgba(197,160,101,0.8)",
      },
    ],
  },
};
