<template>
  <div class="bg-white">
    <section class="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20 px-4">
      <div class="max-w-5xl mx-auto text-center">
        <p class="text-sm uppercase tracking-[0.3em] mb-4">Halaman Pembayaran</p>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Cara Bayar dengan Duitku</h1>
        <p class="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
          Bayar cepat dan aman lewat alat pembayaran digital resmi. Ikuti langkah sederhana kami untuk konfirmasi otomatis dan proses pembayaran yang praktis.
        </p>
        <!-- <div class="flex flex-col sm:flex-row justify-center gap-4">
          <router-link
            to="/"
            class="inline-block bg-white text-blue-700 px-8 py-4 rounded-full font-bold hover:bg-blue-100 transition"
          >
            Kembali ke Beranda
          </router-link>
          <a href="https://pay.wifi-royal.net/login" class="inline-block bg-blue-500 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-400 transition" target="_blank" rel="noopener noreferrer">
            Buka Client Area
          </a>
        </div> -->
      </div>
    </section>

    <section class="py-16 px-4 bg-gray-50">
      <div class="max-w-4xl mx-auto">
        <!-- <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Langkah Mudah Bayar</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Ikuti langkah ini untuk menyelesaikan pembayaran paket RoyalNet melalui Duitku.
          </p>
        </div> -->

        <Accordion :items="paymentSteps" class="shadow-lg">
          <template #content-0="{ item }">
            <div class="space-y-2">
              <!-- <p class="text-gray-600"></p> -->
              <div class="bg-blue-50 m-4 p-4 rounded-lg">
                <ul class="space-y-2 text-blue-800 text-sm">
                  <li>
                    • Silakan mengunjungi Member Area Dengan mengklik Menu berikut <a href="https://pay.wifi-royal.net/login" class="text-red-500 bg-red-50" target="_blank" rel="noopener noreferrer">Client Area.</a>
                  </li>
                  <li class="">
                    • Masukan customer id dan password anda.
                  </li>
                  <li class="">
                    • Pilih tombol BAYAR DISINI pada tab Masa Aktif atau pada History Pembayaran.
                  </li>
                  <li class="">
                    • Lalu klik tombol BAYAR DISINI pada kotak Belum Bayar.
                  </li>
                  <li class="">
                    • Setelah itu Pilih Metode Pembayaran Pembayaran Online – DUITKU
                  </li>
                  <li class="">
                    • Pada DUITKU Payment Channel pilih Alfamart, kemudian klik Lanjutkan.
                  </li>
                  <li class="">
                    • Pastikan kembali data pelanggan untuk menghindari kesalahan.
                  </li>
                  <li class="">
                    • Catat kode pembayaran yang berhasil dibuat untuk selanjutnya di gunakan sebagai kode pembayaran di Alfamart.
                  </li>
                  <li class="">
                    • Berikan informasi kepada kasir Alfamart untuk melakukan pembayaran RoyalNet via DUITKU dan berikan kode pembayaran yang sudah dibuat.
                  </li>
                  <li class="">
                    • Pastikan nominal pembayaran sesuai dengan tagihan yang tertera pada invoice pembayaran yang terdapat di halaman Cient Area.
                  </li>
                  <li class="">
                    • Setelah itu Simpan Resi/Struk Pembayaran yang diberikan kasir untuk melakukan Konfirmasi pembayaran
                  </li>
                </ul>
              </div>
            </div>
          </template>

          <template #content-1="{ item }">
            <div class="space-y-4">
              <p class="text-gray-600">{{ item.content }}</p>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-semibold text-green-900 mb-2">Melalui Virtual Account.</h4>
                <ul class="space-y-1 text-green-800 text-sm">
                  <li>• Silakan mengunjungi Member Area Dengan mengklik Menu berikut <a href="https://pay.wifi-royal.net/login" class="text-red-500 bg-red-50" target="_blank" rel="noopener noreferrer">Client Area.</a></li>
                  <li>• Masukan customer id dan password anda.</li>
                  <li>• Pilih tombol BAYAR DISINI pada tab Masa Aktif atau pada History Pembayaran.</li>
                  <li>• Lalu klik tombol BAYAR DISINI pada kotak Belum Bayar.</li>
                  <li>• Setelah itu Pilih Metode Pembayaran Pembayaran Online – DUITKU</li>
                  <li>• Pada DUITKU Payment Channel pilih Bank yang sesuai kemudian klik Lanjutkan.</li>
                  <li>• Salin dan gunakan Virtual Account Number yang telah dibuat.</li>
                </ul>
              </div>
            </div>
          </template>

          <template #content-2="{ item }">
            <div class="space-y-4">
              <p class="text-gray-600">{{ item.content }}</p>
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-semibold text-purple-900 mb-2">Melalui QRIS:</h4>
                <ul class="space-y-1 text-purple-800 text-sm">
                  <li>• Silakan mengunjungi Member Area Dengan mengklik Menu berikut <a href="https://pay.wifi-royal.net/login" class="text-red-500 bg-red-50" target="_blank" rel="noopener noreferrer">Client Area.</a></li>
                  <li>• Masukan customer id dan password anda.</li>
                  <li>• Pilih tombol BAYAR DISINI pada tab Masa Aktif atau pada History Pembayaran.</li>
                  <li>• Lalu klik tombol BAYAR DISINI pada kotak Belum Bayar.</li>
                  <li>• Setelah itu Pilih Metode Pembayaran Pembayaran Online – DUITKU</li>
                  <li>• Pada DUITKU Payment Channel pilih Dompet Digital yang sesuai kemudian klik Lanjutkan.</li>
                  <li>• Salin dan gunakan Virtual Account Number yang telah dibuat.</li>
                </ul>
              </div>
            </div>
          </template>

          <template #content-3="{ item }">
            <div class="space-y-4">
              <p class="text-gray-600">{{ item.content }}</p>
              <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <div class="flex items-start">
                  <!-- <div class="flex-shrink-0">
                    <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                    </svg>
                  </div> -->
                  <div class="ml-3">
                    <h4 class="font-semibold text-yellow-900 mb-1">Penting!</h4>
                    <ul class="space-y-1 text-yellow-800 text-sm">
                      <li>• Silakan mengunjungi Member Area Dengan mengklik Menu berikut <a href="https://pay.wifi-royal.net/login" class="text-red-500 bg-red-50" target="_blank" rel="noopener noreferrer">Client Area.</a></li>
                      <li>• Masukan customer id dan password anda.</li>
                      <li>• Pilih tombol BAYAR DISINI pada tab Masa Aktif atau pada History Pembayaran.</li>
                      <li>• Lalu klik tombol BAYAR DISINI pada kotak Belum Bayar.</li>
                      <li>• Setelah itu Pilih Metode Pembayaran Pembayaran Online – DUITKU</li>
                      <li>• Pada DUITKU Payment Channel pilih Dompet Digital yang sesuai kemudian klik Lanjutkan.</li>
                    </ul>
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
          content: 'Bayar tagihan dengan mudah di Alfamart atau Indomaret terdekat. Cukup berikan kode pembayaran yang sudah dibuat kepada kasir untuk menyelesaikan transaksi.'
        },
        {
          title: 'BAYAR LEWAT VIRTUAL ACCOUNT',
          content: 'Bayar tagihan dengan metode pembayaran digital terpercaya melalui Duitku dengan berbagai pilihan pembayaran yang tersedia.'
        },
        {
          title: 'BAYAR LEWAT QRIS',
          content: 'Setelah pembayaran berhasil, konfirmasi otomatis akan diproses oleh sistem Duitku dalam hitungan menit.'
        },
        {
          title: 'BAYAR LEWAT DOMPET DIGITAL',
          content: 'Setelah pembayaran berhasil, konfirmasi otomatis akan diproses oleh sistem Duitku dalam hitungan menit.'
        }
      ]
    }
  }
}
</script>
