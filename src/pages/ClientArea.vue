<template>
  <div class="bg-white">
    <section class="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20 px-4">
      <div class="max-w-5xl mx-auto text-center">
        <p class="text-sm uppercase tracking-[0.3em] mb-4">Client Area RoyalNet</p>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Dashboard Pelanggan</h1>
        <p class="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
          Akses dashboard Anda untuk melihat tagihan, mengelola layanan, dan mendapatkan dukungan prioritas.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <router-link
            to="/"
            class="inline-block bg-white text-blue-700 px-8 py-4 rounded-full font-bold hover:bg-blue-100 transition"
          >
            Kembali ke Beranda
          </router-link>
          <router-link
            to="/cara-bayar"
            class="inline-block bg-blue-500 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-400 transition"
          >
            Lihat Cara Bayar
          </router-link>
        </div>
      </div>
    </section>

    <section class="py-16 px-4 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Apa yang Bisa Anda Lakukan?</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Akses fitur penting untuk mengelola layanan WiFi Royal Anda dengan mudah dan cepat.
          </p>
        </div>

        <div class="grid gap-8 lg:grid-cols-3">
          <div class="p-8 bg-white rounded-3xl border border-gray-200 shadow-sm">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Status Layanan</h3>
            <p class="text-gray-600 mb-4">
              Pantau status koneksi, jadwal teknisi, dan informasi aktivasi paket Anda.
            </p>
          </div>

          <div class="p-8 bg-white rounded-3xl border border-gray-200 shadow-sm">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Riwayat Pembayaran</h3>
            <p class="text-gray-600 mb-4">
              Lihat detail tagihan, invoice, dan bukti transaksi agar Anda selalu terkontrol.
            </p>
          </div>

          <div class="p-8 bg-white rounded-3xl border border-gray-200 shadow-sm">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Dukungan 24/7</h3>
            <p class="text-gray-600">
              Ajukan tiket atau rayakan chat support untuk masalah teknis dan billing kapan saja.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-4 bg-white">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">Siap Mengelola Akun Anda?</h2>
        <p class="text-lg text-gray-600 mb-8">
          Masuk ke Client Area untuk melakukan pembayaran, mengatur layanan, dan mendapatkan dukungan langsung.
        </p>
        <a href="mailto:support@royalnet.co.id" class="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300">
          Hubungi Support
        </a>
      </div>
    </section>
  </div>
</template>
