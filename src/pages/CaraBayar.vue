<template>
  <div class="bg-white">
    <section class="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20 px-4">
      <div class="max-w-5xl mx-auto text-center">
        <p class="text-sm uppercase tracking-[0.3em] mb-4">Halaman Pembayaran</p>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Cara Bayar dengan Duitku</h1>
        <p class="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
          Bayar cepat dan aman lewat alat pembayaran digital resmi. Ikuti langkah sederhana kami untuk konfirmasi otomatis dan proses pembayaran yang praktis.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <router-link
            to="/"
            class="inline-block bg-white text-blue-700 px-8 py-4 rounded-full font-bold hover:bg-blue-100 transition"
          >
            Kembali ke Beranda
          </router-link>
          <router-link
            to="/client-area"
            class="inline-block bg-blue-500 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-400 transition"
          >
            Buka Client Area
          </router-link>
        </div>
      </div>
    </section>

    <section class="py-16 px-4 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Langkah Mudah Bayar</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Ikuti tiga langkah ini untuk menyelesaikan pembayaran paket RoyalNet melalui Duitku.
          </p>
        </div>

        <div class="grid gap-8 lg:grid-cols-3">
          <div class="p-8 bg-white rounded-3xl border border-gray-200 shadow-sm">
            <span class="text-4xl mb-4 block">1</span>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Pilih Paket</h3>
            <p class="text-gray-600 mb-4">
              Pilih paket WiFi Royal yang sesuai kebutuhan rumah atau bisnis Anda, lalu hubungi tim kami untuk mendapatkan invoice resmi.
            </p>
            <ul class="space-y-3 text-gray-700">
              <li>• Paket Rumah Standar, Premium, Ultra</li>
              <li>• Paket Bisnis Dasar, Profesional, Enterprise</li>
            </ul>
          </div>

          <div class="p-8 bg-white rounded-3xl border border-gray-200 shadow-sm">
            <span class="text-4xl mb-4 block">2</span>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Bayar via Duitku</h3>
            <p class="text-gray-600 mb-4">
              Bayar tagihan dengan metode pembayaran digital terpercaya melalui Duitku.
            </p>
            <ul class="space-y-3 text-gray-700">
              <li>• Transfer bank</li>
              <li>• Virtual account</li>
              <li>• QRIS</li>
              <li>• Dompet digital</li>
            </ul>
          </div>

          <div class="p-8 bg-white rounded-3xl border border-gray-200 shadow-sm">
            <span class="text-4xl mb-4 block">3</span>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Konfirmasi Otomatis</h3>
            <p class="text-gray-600 mb-4">
              Setelah pembayaran berhasil, konfirmasi otomatis akan diproses oleh sistem Duitku.
            </p>
            <p class="text-gray-700">
              Simpan bukti pembayaran dan cek status pada sistem RoyalNet.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
