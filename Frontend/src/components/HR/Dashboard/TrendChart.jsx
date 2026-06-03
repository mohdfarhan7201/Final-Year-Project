import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Sun", value: 60 },
  { name: "Mon", value: 40 },
  { name: "Tue", value: 80 },
  { name: "Wed", value: 25 },
  { name: "Thu", value: 85 },
  { name: "Fri", value: 35 },
  { name: "Sat", value: 45 },
];

export default function TrendChart() {
  return (
    <div className="w-full h-[220px]">
      <ResponsiveContainer>
        <AreaChart data={data}>
          
          <defs>
            <linearGradient id="colorTrend" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d946ef" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#d946ef" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />

          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#c026d3"
            strokeWidth={2}
            fill="url(#colorTrend)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}