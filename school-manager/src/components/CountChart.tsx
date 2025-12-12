"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 106,
    fill: "var(--white)",
  },
  {
    name: "Meninas",
    count: 53,
    fill: "var(--primary-red)",
  },
  {
    name: "Meninos",
    count: 53,
    fill: "var(--primary-blue)",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4 border border-gray-200">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Alunos</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>

        <Image
          src="/maleFemale2.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* BOTTOM LABELS */}
      <div className="flex justify-center gap-16 mt-2">
        <div className="flex flex-col gap-1 items-center">
          <div className="w-5 h-5 rounded-full" style={{ background: "var(--primary-blue)" }} />
          <h1 className="font-bold text-blue-800">1,234</h1>
          <h2 className="text-xs text-gray-400">Meninos (55%)</h2>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div className="w-5 h-5 rounded-full" style={{ background: "var(--primary-red)" }} />
          <h1 className="font-bold text-red-700">1,234</h1>
          <h2 className="text-xs text-gray-400">Meninas (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;