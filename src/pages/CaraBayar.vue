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
          <a href="https://pay.wifi-royal.net/login" class="inline-block bg-blue-500 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-400 transition" target="_blank" rel="noopener noreferrer">
            Buka Client Area
          </a>
        </div>
      </div>
    </section>

    <section class="py-16 px-4 bg-gray-50">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Langkah Mudah Bayar</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Ikuti tiga langkah ini untuk menyelesaikan pembayaran paket RoyalNet melalui Duitku.
          </p>
        </div>

        <Accordion :items="paymentSteps" class="shadow-lg">
          <template #content-0="{ item }">
            <div class="space-y-4">
              <p class="text-gray-600">{{ item.content }}</p>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-semibold text-blue-900 mb-2">Paket Tersedia:</h4>
                <ul class="space-y-2 text-blue-800">
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Paket Rumah Standar, Premium, Ultra
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Paket Bisnis Dasar, Profesional, Enterprise
                  </li>
                </ul>
              </div>
            </div>
          </template>

          <template #content-1="{ item }">
            <div class="space-y-4">
              <p class="text-gray-600">{{ item.content }}</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-green-50 p-4 rounded-lg">
                  <h4 class="font-semibold text-green-900 mb-2">Transfer Bank:</h4>
                  <ul class="space-y-1 text-green-800 text-sm">
                    <li>• BCA, BNI, BRI, Mandiri</li>
                    <li>• Bank Syariah Indonesia</li>
                    <li>• Bank lainnya</li>
                  </ul>
                </div>
                <div class="bg-purple-50 p-4 rounded-lg">
                  <h4 class="font-semibold text-purple-900 mb-2">Dompet Digital:</h4>
                  <ul class="space-y-1 text-purple-800 text-sm">
                    <li>• GoPay, OVO, Dana</li>
                    <li>• LinkAja, ShopeePay</li>
                    <li>• QRIS compatible</li>
                  </ul>
                </div>
              </div>
            </div>
          </template>

          <template #content-2="{ item }">
            <div class="space-y-4">
              <p class="text-gray-600">{{ item.content }}</p>
              <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div class="ml-3">
                    <h4 class="font-semibold text-yellow-900 mb-1">Penting!</h4>
                    <p class="text-yellow-800 text-sm">
                      Pastikan menyimpan bukti pembayaran dan periksa status pembayaran di Client Area RoyalNet secara berkala.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Accordion>
      </div>
    </section>
  </div>
</template>

<script>
import Accordion from '@/components/Accordion.vue'

export default {
  name: 'CaraBayar',
  components: {
    Accordion
  },
  data() {
    return {
      paymentSteps: [
        {
          title: 'BAYAR LEWAT ALFAMART/INDOMARET',
          content: 'Pilih paket WiFi Royal yang sesuai kebutuhan rumah atau bisnis Anda, lalu hubungi tim kami untuk mendapatkan invoice resmi.'
        },
        {
          title: 'BAYAR LEWAT QRIS/DOMPET DIGITAL',
          content: 'Bayar tagihan dengan metode pembayaran digital terpercaya melalui Duitku dengan berbagai pilihan pembayaran yang tersedia.'
        },
        {
          title: 'BAYAR LEWAT VIRTUAL ACCOUNT',
          content: 'Setelah pembayaran berhasil, konfirmasi otomatis akan diproses oleh sistem Duitku dalam hitungan menit.'
        }
      ]
    }
  }
}
</script>
