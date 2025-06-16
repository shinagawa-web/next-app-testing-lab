'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  TooltipProps,
  Legend,
  ResponsiveContainer,
} from 'recharts'

// 15日分のダミーデータ生成
const data = Array.from({ length: 15 }, (_, i) => {
  const day = i + 1
  const date = `2025-05-${day.toString().padStart(2, '0')}`
  return {
    date,
    ネックレス: Math.floor(Math.random() * 15000 + 5000),
    ピアス: Math.floor(Math.random() * 12000 + 3000),
  }
})

export default function SalesChart() {
  return (
    <div className="w-full h-[400px] bg-white rounded-xl shadow p-6 ">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 40, right: 30, left: 40, bottom: 0 }}
          barCategoryGap="10%"
          barGap={2}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="date" tick={{ fontSize: 10 }} interval={4} />
          <YAxis tickFormatter={(value) => `${value / 1000}`}
            label={{
              value: '(千円)',
              position: 'top',
              offset: 10,
              angle: 0,
              style: { textAnchor: 'start', fill: '#333', fontSize: 16 },
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="ネックレス" fill="#4F46E5" />
          <Bar dataKey="ピアス" fill="#F59E0B" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

const CustomTooltip = ({ active, payload, label }: TooltipProps<string, string>) => {
  if (!active || !payload || !payload.length) return null

  return (
    <div className="bg-white border border-gray-300 shadow-md p-2 rounded text-sm">
      <p className="text-black font-medium">{label}</p>
      {payload.map((entry, index) => (
        <p key={index} style={{ color: entry.color }}>
          {entry.name} : {Number(entry.value).toLocaleString()}円
        </p>
      ))}
    </div>
  )
}