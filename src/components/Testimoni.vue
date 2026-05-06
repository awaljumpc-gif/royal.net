<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)
const autoplayInterval = ref(null)

const testimonials = [
  {
    id: 1,
    name: 'Ahmad Rizki',
    position: 'Direktur IT',
    company: 'PT. Teknologi Maju',
    content: 'Layanan internet dari Royal.net sangat handal dan cepat. Kami sangat puas dengan kecepatan dan stabilitas koneksi yang mereka berikan untuk operasional kantor kami.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    rating: 5
  },
  {
    id: 2,
    name: 'Siti Nurhaliza',
    position: 'Content Creator',
    company: 'Digital Creative',
    content: 'Sebagai content creator, kecepatan upload dan download sangat penting. Royal.net memberikan performa terbaik yang saya butuhkan untuk pekerjaan sehari-hari.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    rating: 5
  },
  {
    id: 3,
    name: 'Budi Santoso',
    position: 'Pemilik Toko Online',
    company: 'BudiShop.com',
    content: 'Dengan paket internet Royal.net yang terjangkau, toko online saya dapat berjalan lancar tanpa khawatir koneksi putus. Pelayanan customer service juga sangat responsif.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    rating: 5
  },
  {
    id: 4,
    name: 'Dewi Lestari',
    position: 'Guru Online',
    company: 'EduTech Platform',
    content: 'Koneksi yang stabil adalah kebutuhan utama saya untuk mengajar online. Royal.net memastikan kelas saya berjalan lancar tanpa buffering atau lag.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    rating: 5
  },
  {
    id: 5,
    name: 'Rudi Hermawan',
    position: 'Freelance Designer',
    company: 'Design Studio',
    content: 'Kecepatan internet Royal.net memungkinkan saya untuk collaborate dengan klien dari berbagai negara tanpa masalah. Sangat merekomendasikan layanan ini.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
    rating: 5
  }
]

const nextTestimoni = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const prevTestimoni = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
}

const goToTestimoni = (index) => {
  currentIndex.value = index
}

const startAutoplay = () => {
  autoplayInterval.value = setInterval(() => {
    nextTestimoni()
  }, 6000)
}

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <div
    class="w-full px-4 py-12"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <!-- Header -->
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Testimoni Pelanggan
      </h2>
      <p class="text-gray-600 text-lg">
        Kepuasan pelanggan adalah prioritas utama kami
      </p>
    </div>

    <!-- Testimonials Container -->
    <div class="max-w-4xl mx-auto relative">
      <!-- Slide Container -->
      <div class="relative h-80 md:h-72 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8 md:p-12">
        <!-- Testimonial Cards -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div
            v-for="(testimoni, index) in testimonials"
            :key="testimoni.id"
            :class="[
              'absolute w-full h-full px-8 md:px-12 py-8 transition-all duration-700 flex flex-col items-center justify-center text-center',
              currentIndex === index 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95 pointer-events-none'
            ]"
          >
            <!-- Avatar -->
            <img
              :src="testimoni.avatar"
              :alt="testimoni.name"
              class="w-20 h-20 rounded-full object-cover mb-6 border-4 border-white shadow-md"
            />

            <!-- Rating Stars -->
            <div class="flex gap-1 justify-center mb-4">
              <span
                v-for="i in testimoni.rating"
                :key="i"
                class="text-yellow-400 text-xl"
              >
                ★
              </span>
            </div>

            <!-- Testimonial Content -->
            <p class="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed italic max-w-2xl">
              "{{ testimoni.content }}"
            </p>

            <!-- Author Info -->
            <div>
              <h3 class="text-xl font-bold text-gray-800">{{ testimoni.name }}</h3>
              <p class="text-sm text-gray-600">{{ testimoni.position }}</p>
              <p class="text-xs text-gray-500">{{ testimoni.company }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button
        @click="prevTestimoni"
        class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center shadow-lg z-10"
        aria-label="Previous testimonial"
      >
        ❮
      </button>

      <button
        @click="nextTestimoni"
        class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center shadow-lg z-10"
        aria-label="Next testimonial"
      >
        ❯
      </button>
    </div>

    <!-- Navigation Dots -->
    <div class="flex justify-center gap-3 mt-8">
      <button
        v-for="(_, index) in testimonials"
        :key="index"
        @click="goToTestimoni(index)"
        :class="[
          'w-3 h-3 rounded-full transition-all duration-300',
          currentIndex === index
            ? 'bg-blue-600 w-8'
            : 'bg-gray-300 hover:bg-gray-400'
        ]"
        :aria-label="`Go to testimonial ${index + 1}`"
      />
    </div>
  </div>
</template>

<style scoped>
/* Smooth transitions for testimonial content */
.transition-all {
  transition: all 0.7s ease-in-out;
}
</style>
