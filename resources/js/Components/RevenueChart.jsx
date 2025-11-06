import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

// Data dummy untuk grafik
const data = [
    { name: "Mei", Pendapatan: 140000000 },
    { name: "Jun", Pendapatan: 150000000 },
    { name: "Jul", Pendapatan: 145000000 },
    { name: "Ags", Pendapatan: 155000000 },
    { name: "Sep", Pendapatan: 160000000 },
    { name: "Okt", Pendapatan: 150000000 },
];

// Fungsi format Rupiah untuk Tooltip
const formatRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(value);
};

export default function RevenueChart() {
    return (
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Tren Pendapatan (6 Bulan)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis
                        tickFormatter={(value) => `Rp ${value / 1000000} Jt`}
                    />
                    <Tooltip formatter={formatRupiah} />
                    <Legend />
                    <Bar dataKey="Pendapatan" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
