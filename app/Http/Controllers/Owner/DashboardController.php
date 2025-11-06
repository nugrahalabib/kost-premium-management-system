<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia; // <-- PENTING: Import Inertia

class DashboardController extends Controller
{
    // Kita buat fungsi index (halaman utama dashboard)
    public function index()
    {
        // Nanti kita ganti ini dengan data asli dari database
        $dummyStats = [
            'totalPendapatan' => 150000000, // Contoh 150jt
            'tingkatHunian' => 98,          // dalam persen
            'totalPiutang' => 25000000,    // Contoh 25jt
        ];

        // Kirim data ini ke komponen React 'Owner/Dashboard'
        // Data akan diterima sebagai prop bernama 'stats'
        return Inertia::render('Owner/Dashboard', [
            'stats' => $dummyStats
        ]);
    }
}