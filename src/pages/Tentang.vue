<template>
  <div class="min-h-screen bg-white">
    <section class="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-24 px-4">
      <div class="max-w-5xl mx-auto text-center">
        <p class="text-sm uppercase tracking-[0.3em] mb-4">Tentang WiFi Royal</p>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Solusi Internet Terpercaya untuk Rumah & Bisnis</h1>
        <p class="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
          Kami menghadirkan koneksi cepat, layanan profesional, dan dukungan 24/7 untuk memastikan pengalaman internet Anda selalu prima.
        </p>
      </div>
    </section>

    <section class="py-16 px-4 bg-gray-50">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Kenali RoyalNet Lebih Dalam</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Pelajari lebih lanjut tentang perjalanan, komitmen, dan layanan yang kami berikan untuk masyarakat.
          </p>
        </div>

        <Accordion :items="aboutItems" class="shadow-lg">
          <template #content-0="{ item }">
            <div class="space-y-4">
              <div class="bg-blue-50 p-6 rounded-lg">
                <h4 class="font-semibold text-blue-900 mb-3">Visi</h4>
                <p class="text-blue-800">Menjadi penyedia layanan internet terdepan yang menghubungkan setiap rumah dan bisnis di Indonesia dengan koneksi yang cepat, stabil, dan terjangkau.</p>
              </div>
              <div class="bg-green-50 p-6 rounded-lg">
                <h4 class="font-semibold text-green-900 mb-3">Misi</h4>
                <p class="text-green-800">Memberikan akses internet berkualitas tinggi dengan harga transparan dan layanan pelanggan yang responsif. Kami ingin setiap rumah dan bisnis dapat terhubung dengan lancar tanpa gangguan.</p>
              </div>
            </div>
          </template>

          <template #content-1="{ item }">
            <div class="space-y-4">
              <div class="bg-purple-50 p-6 rounded-lg">
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <span class="text-white font-bold text-lg">2020</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-purple-900">Berdiri & Mulai Beroperasi</h4>
                    <p class="text-purple-800">RoyalNet didirikan dengan fokus pada penyediaan internet cepat untuk area perkotaan dan pedesaan.</p>
                  </div>
                </div>
              </div>
              <div class="bg-indigo-50 p-6 rounded-lg">
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                    <span class="text-white font-bold text-lg">2022</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-indigo-900">Ekspansi Jaringan</h4>
                    <p class="text-indigo-800">Memperluas jangkauan layanan ke lebih banyak kota dan kabupaten dengan teknologi fiber optic terkini.</p>
                  </div>
                </div>
              </div>
              <div class="bg-pink-50 p-6 rounded-lg">
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                    <span class="text-white font-bold text-lg">2024</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-pink-900">Inovasi & Pertumbuhan</h4>
                    <p class="text-pink-800">Meluncurkan paket bisnis enterprise dan memperkenalkan sistem monitoring 24/7 untuk pelanggan.</p>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <template #content-2="{ item }">
            <div class="space-y-4">
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-orange-50 p-6 rounded-lg">
                  <h4 class="font-semibold text-orange-900 mb-3 flex items-center">
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                    </svg>
                    Internet Rumah
                  </h4>
                  <ul class="space-y-2 text-orange-800 text-sm">
                    <li>• Paket hemat untuk keluarga</li>
                    <li>• Kecepatan hingga 100 Mbps</li>
                    <li>• Instalasi gratis</li>
                    <li>• Dukungan 24/7</li>
                  </ul>
                </div>
                <div class="bg-teal-50 p-6 rounded-lg">
                  <h4 class="font-semibold text-teal-900 mb-3 flex items-center">
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 2a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path>
                    </svg>
                    Internet Bisnis
                  </h4>
                  <ul class="space-y-2 text-teal-800 text-sm">
                    <li>• Dedicated connection</li>
                    <li>• SLA guarantee 99.9%</li>
                    <li>• Kecepatan hingga 1 Gbps</li>
                    <li>• Support prioritas</li>
                  </ul>
                </div>
              </div>
            </div>
          </template>

          <template #content-3="{ item }">
            <div class="space-y-4">
              <p class="text-gray-600">{{ item.content }}</p>
              <div class="grid md:grid-cols-3 gap-6">
                <div class="text-center">
                  <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h4 class="font-semibold text-gray-900 mb-2">Tim Teknisi</h4>
                  <p class="text-sm text-gray-600">Ahli jaringan berpengalaman siap membantu Anda</p>
                </div>
                <div class="text-center">
                  <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h4 class="font-semibold text-gray-900 mb-2">Customer Service</h4>
                  <p class="text-sm text-gray-600">Dukungan pelanggan 24/7 via berbagai channel</p>
                </div>
                <div class="text-center">
                  <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <h4 class="font-semibold text-gray-900 mb-2">Network Operations</h4>
                  <p class="text-sm text-gray-600">Monitoring jaringan 24/7 untuk performa optimal</p>
                </div>
              </div>
            </div>
          </template>

          <template #content-4="{ item }">
            <div class="space-y-4">
              <p class="text-gray-600">{{ item.content }}</p>
              <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg class="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div class="ml-3">
                    <h4 class="font-semibold text-blue-900 mb-2">Komitmen Kami untuk Anda</h4>
                    <ul class="space-y-2 text-blue-800">
                      <li class="flex items-center">
                        <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Uptime jaringan minimal 99.5%
                      </li>
                      <li class="flex items-center">
                        <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Response time maksimal 4 jam untuk gangguan
                      </li>
                      <li class="flex items-center">
                        <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Harga transparan tanpa biaya tersembunyi
                      </li>
                      <li class="flex items-center">
                        <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Upgrade kecepatan kapan saja dibutuhkan
                      </li>
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
  name: 'Tentang',
  components: {
    Accordion
  },
  data() {
    return {
      aboutItems: [
        {
          title: 'Visi & Misi RoyalNet',
          content: 'Pelajari tentang visi jangka panjang dan misi utama yang mendorong RoyalNet untuk memberikan layanan internet terbaik.'
        },
        {
          title: 'Sejarah Perusahaan',
          content: 'Ikuti perjalanan RoyalNet dari awal berdiri hingga menjadi penyedia internet terpercaya di berbagai daerah.'
        },
        {
          title: 'Layanan Kami',
          content: 'Jelajahi berbagai paket dan solusi internet yang kami tawarkan untuk rumah tangga dan bisnis.'
        },
        {
          title: 'Tim & Dukungan',
          content: 'Kenali tim profesional kami yang siap memberikan dukungan teknis dan pelanggan 24 jam sehari.'
        },
        {
          title: 'Komitmen & Garansi',
          content: 'Pelajari komitmen kami dalam memberikan layanan berkualitas dengan garansi uptime dan dukungan penuh.'
        }
      ]
    }
  }
}
</script>
