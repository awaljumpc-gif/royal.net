<script setup>
import { ref } from 'vue'
import Carousel from '../components/Carousel.vue'
import PackageCard from '../components/PackageCard.vue'
import Testimoni from '../components/Testimoni.vue'

const selectedPackage = ref(null)

const homePackages = [
  {
    id: 1,
    icon: '🏠',
    title: 'Paket Standar',
    speed: '10 Mbps',
    price: '130.000',
    isPopular: false,
    type: 'home',
    features: [
      'Download hingga 10 Mbps',
      'Upload hingga 10 Mbps',
      'Router WiFi gratis',
      'Instalasi gratis'
    ]
  },
  {
    id: 2,
    icon: '⭐',
    title: 'Paket Reguler',
    speed: '15 Mbps',
    price: '155.000',
    isPopular: true,
    type: 'home',
    features: [
      'Download hingga 15 Mbps',
      'Upload hingga 15 Mbps',
      'Router WiFi gratis',
      'Instalasi gratis'
    ]
  },
  {
    id: 3,
    icon: '🏠',
    title: 'Paket Family',
    speed: '25 Mbps',
    price: '185.000',
    isPopular: false,
    type: 'home',
    features: [
      'Download hingga 20 Mbps',
      'Upload hingga 20 Mbps',
      'Router WiFi gratis',
      'Instalasi gratis'
    ]
  },
  {
    id: 4,
    icon: '⚡',
    title: 'Paket Super',
    speed: '35 Mbps',
    price: '215.000',
    isPopular: false,
    type: 'home',
    features: [
      'Download hingga 30 Mbps',
      'Upload hingga 30 Mbps',
      'Router WiFi gratis',
      'Instalasi gratis'
    ]
  },
  {
    id: 5,
    icon: '💎',
    title: 'Paket Hyper',
    speed: '50 Mbps',
    price: '280.000',
    isPopular: false,
    type: 'home',
    features: [
      'Download hingga 50 Mbps',
      'Upload hingga 50 Mbps',
      'Router WiFi gratis',
      'Instalasi gratis'
    ]
  },
  {
    id: 6,
    icon: '🚀',
    title: 'Paket Ultra',
    speed: '100 Mbps',
    price: '470.000',
    isPopular: false,
    type: 'home',
    features: [
      'Download hingga 100 Mbps',
      'Upload hingga 100 s',
      'Router WiFi gratis',
      'Instalasi gratis'
    ]
  }
]

const businessPackages = [
  {
    id: 4,
    icon: '🏢',
    title: 'Paket Bisnis Dasar',
    speed: '50 Mbps',
    price: '299.000',
    isPopular: false,
    type: 'business',
    features: [
      'Download hingga 50 Mbps',
      'Upload hingga 10 Mbps',
      'IP statis gratis',
      'SLA 99% uptime',
      'Email support'
    ]
  },
  {
    id: 5,
    icon: '💼',
    title: 'Paket Bisnis Profesional',
    speed: '500 Mbps',
    price: '699.000',
    isPopular: true,
    type: 'business',
    features: [
      'Download hingga 500 Mbps',
      'Upload hingga 100 Mbps',
      'IP statis gratis',
      'SLA 99.5% uptime',
      'Dukungan prioritas',
      'Firewall gratis',
      'Cloud backup gratis'
    ]
  },
  {
    id: 6,
    icon: '🔧',
    title: 'Paket Bisnis Enterprise',
    speed: '1 Gbps',
    price: '1.499.000',
    isPopular: false,
    type: 'business',
    features: [
      'Download hingga 1 Gbps',
      'Upload hingga 500 Mbps',
      'Multiple IP statis gratis',
      'SLA 99.9% uptime',
      'Dedicated account manager',
      'Firewall & VPN gratis',
      'Konsultasi jaringan gratis'
    ]
  }
]

const handleSelectPackage = (packageId) => {
  selectedPackage.value = packageId
  alert(`Anda memilih paket ${packageId}. Hubungi tim kami untuk melanjutkan!`)
}
</script>

<template>
  <div>
    <section id="beranda" class="bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div class="max-w-7xl mx-auto">
        <Carousel />

        <div class="text-center mt-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Layanan Internet Terbaik di Kelasnya
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            RoyalNet menyediakan solusi internet berkecepatan tinggi dengan harga terjangkau untuk kebutuhan rumah dan bisnis Anda. Nikmati koneksi stabil dan dukungan pelanggan terbaik.
          </p>
        </div>
      </div>
    </section>

    <section id="paket" class="py-16 px-4 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Paket Internet Rumah</h2>
          <p class="text-xl text-gray-600">Pilih paket yang sesuai dengan kebutuhan Anda</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PackageCard
            v-for="pkg in homePackages"
            :key="pkg.id"
            :icon="pkg.icon"
            :title="pkg.title"
            :speed="pkg.speed"
            :price="pkg.price"
            :features="pkg.features"
            :is-popular="pkg.isPopular"
            :type="pkg.type"
            @select="handleSelectPackage(pkg.id)"
          />
        </div>
      </div>
    </section>

    <!-- <section class="py-16 px-4 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Paket Internet Bisnis</h2>
          <p class="text-xl text-gray-600">Solusi internet yang dapat diandalkan untuk bisnis Anda</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PackageCard
            v-for="pkg in businessPackages"
            :key="pkg.id"
            :icon="pkg.icon"
            :title="pkg.title"
            :speed="pkg.speed"
            :price="pkg.price"
            :features="pkg.features"
            :is-popular="pkg.isPopular"
            :type="pkg.type"
            @select="handleSelectPackage(pkg.id)"
          />
        </div>
      </div>
    </section> -->

    <section id="tentang" class="py-16 px-4 bg-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-gray-900 mb-12 text-center">Mengapa Memilih RoyalNet?</h2>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">⚡</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Kecepatan Tinggi</h3>
            <p class="text-gray-600">Nikmati kecepatan internet hingga 1 Gbps untuk pengalaman browsing, streaming, dan gaming yang sempurna.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">🛡️</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Koneksi Stabil</h3>
            <p class="text-gray-600">Dengan garansi uptime 99.9%, koneksi Anda tetap stabil sepanjang waktu tanpa gangguan.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">💰</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Harga Terjangkau</h3>
            <p class="text-gray-600">Dapatkan paket internet berkualitas dengan harga yang paling kompetitif di pasaran.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">🎧</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Dukungan 24/7</h3>
            <p class="text-gray-600">Tim support profesional kami siap membantu Anda kapan saja, siang atau malam.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <p class="text-5xl font-bold mb-2">5K+</p>
            <p class="text-lg">Pelanggan Puas</p>
          </div>
          <div>
            <p class="text-5xl font-bold mb-2">99.9%</p>
            <p class="text-lg">Uptime Terjamin</p>
          </div>
          <div>
            <p class="text-5xl font-bold mb-2">5+</p>
            <p class="text-lg">Tahun Pengalaman</p>
          </div>
          <div>
            <p class="text-5xl font-bold mb-2">3+</p>
            <p class="text-lg">Kota di Indonesia</p>
          </div>
        </div>
      </div>
    </section>

    <section id="testimoni" class="py-16 px-4 bg-white">
      <Testimoni />
    </section>

    <section id="kontak" class="py-20 px-4 bg-gray-50">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          Siap Meningkatkan Kecepatan Internet Anda?
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          Bergabunglah dengan ribuan pelanggan yang puas dengan layanan RoyalNet.
        </p>
        <a href="https://wa.me/62859106900748?text=Halo%20WiFi%20Royal,%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20paket%20internet%20Anda" target="_blank" rel="noopener noreferrer" class="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-4 rounded-lg text-lg font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-block">
          Hubungi Kami Sekarang
        </a>
      </div>
    </section>
  </div>
</template>
