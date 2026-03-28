"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Pie, Bar } from "react-chartjs-2";
import type { BusinessChartData } from "../data/businessData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const baseOptions = {
  responsive: true,
  plugins: {
    legend: {
      labels: { color: "#E5E5E5", font: { size: 12 } },
    },
  },
  scales: {
    x: { ticks: { color: "#A0A0A0" }, grid: { color: "rgba(197,160,101,0.1)" } },
    y: { ticks: { color: "#A0A0A0" }, grid: { color: "rgba(197,160,101,0.1)" } },
  },
} as const;

interface Props {
  data: BusinessChartData;
}

function ChartCard({ title, unit, note, children }: { title: string; unit: string; note: string; children: React.ReactNode }) {
  return (
    <div className="border border-[#C5A065]/20 bg-[#1E293B]/30 rounded-lg p-6">
      <h3 className="text-lg font-serif font-semibold text-[#C5A065] mb-1">{title}</h3>
      <p className="text-xs text-[#A0A0A0] mb-4">単位：{unit}</p>
      <div className="w-full">{children}</div>
      <p className="text-xs text-[#A0A0A0] mt-4 border-t border-[#C5A065]/10 pt-3">{note}</p>
    </div>
  );
}

export default function BusinessCharts({ data }: Props) {
  const { lineChart, pieChart, barChart } = data;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <ChartCard title={lineChart.title} unit={lineChart.unit} note={lineChart.note}>
        <Line
          data={{
            labels: lineChart.labels,
            datasets: lineChart.datasets.map((d) => ({
              ...d,
              tension: 0.4,
              fill: true,
            })),
          }}
          options={{
            ...baseOptions,
            plugins: {
              ...baseOptions.plugins,
              title: { display: false },
            },
          }}
        />
      </ChartCard>

      <ChartCard title={pieChart.title} unit={pieChart.unit} note={pieChart.note}>
        <Pie
          data={{
            labels: pieChart.labels,
            datasets: pieChart.datasets,
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "bottom" as const,
                labels: { color: "#E5E5E5", font: { size: 11 }, padding: 10 },
              },
            },
          }}
        />
      </ChartCard>

      <ChartCard title={barChart.title} unit={barChart.unit} note={barChart.note}>
        <Bar
          data={{
            labels: barChart.labels,
            datasets: barChart.datasets,
          }}
          options={{
            ...baseOptions,
            plugins: {
              ...baseOptions.plugins,
              title: { display: false },
            },
          }}
        />
      </ChartCard>
    </div>
  );
}
