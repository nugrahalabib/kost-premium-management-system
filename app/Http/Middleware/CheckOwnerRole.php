<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response; // <-- INI YANG HILANG
use Illuminate\Http\RedirectResponse; // <-- DAN INI YANG HILANG

class CheckOwnerRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
     
    // Ganti bariso di bawah ini:
    // public function handle(Request $request, Closure $next): Response
    // Menjadi ini:
    public function handle(Request $request, Closure $next): Response|RedirectResponse
    {
        // Cek apakah user sudah login DAN role-nya adalah 'owner'
        if ($request->user() && $request->user()->role == 'owner') {
            return $next($request); // <-- Izinkan masuk
        }

        // Jika bukan owner, tendang ke halaman dashboard biasa (untuk penyewa)
        return redirect('/dashboard');
    }
}