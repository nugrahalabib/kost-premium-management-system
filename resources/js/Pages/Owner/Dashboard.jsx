import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import StatCard from "@/Components/StatCard"; // <-- 1. IMPORT KOMPONEN BARU
import RevenueChart from "@/Components/RevenueChart"; // <-- TAMBAHKAN INI
import RoomStatusChart from "@/Components/RoomStatusChart"; // <-- TAMBAHKAN INI

// 2. TERIMA PROPS 'stats' (yang dikirim dari Controller)
export default function OwnerDashboard({ auth, stats }) {
    // (Opsional) Fungsi helper untuk format Rupiah
    const formatRupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(number);
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Owner Dashboard
                </h2>
            }
        >
            <Head title="Owner Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* 3. TAMPILKAN KARTU DALAM GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <StatCard
                            title="Total Pendapatan (Bulan Ini)"
                            value={formatRupiah(stats.totalPendapatan)}
                        />

                        <StatCard
                            title="Tingkat Hunian"
                            value={`${stats.tingkatHunian}%`}
                            subtext="98 / 100 Kamar Terisi" // (Nanti ini juga kita buat dinamis)
                        />

                        <StatCard
                            title="Piutang (Belum Bayar)"
                            value={formatRupiah(stats.totalPiutang)}
                        />
                    </div>

                    {/* TAMBAHKAN GRID BARU UNTUK GRAFIK DI SINI */}
                    <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <RevenueChart />
                        <RoomStatusChart />
                    </div>

                    {/* Area dashboard lama yang Anda buat */}
                    {/* <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-6">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-2xl font-bold">
                                SELAMAT DATANG, OWNER (Kos Mutiara 27)
                            </h1>
                        </div>
                    </div> */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
