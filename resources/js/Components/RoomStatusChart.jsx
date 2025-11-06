import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

// Data dummy
const data = [
    { name: "Terisi", value: 98 },
    { name: "Kosong", value: 1 },
    { name: "Perbaikan", value: 1 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"]; // Biru, Hijau, Kuning

export default function RoomStatusChart() {
    return (
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Status Kamar
            </h3>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) =>
                            `${name} (${(percent * 100).toFixed(0)}%)`
                        }
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value} Kamar`} />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
