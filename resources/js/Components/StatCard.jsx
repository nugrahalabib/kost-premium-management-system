import React from "react";

// Komponen reusable untuk kartu statistik
export default function StatCard({ title, value, subtext }) {
    return (
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
            <h3 className="text-sm font-medium text-gray-500 truncate">
                {title}
            </h3>
            <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
            {/* Tampilkan subtext hanya jika ada */}
            {subtext && <p className="text-sm text-gray-600">{subtext}</p>}
        </div>
    );
}
