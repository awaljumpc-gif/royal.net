<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const autoplayInterval = ref(null)

const slides = [
  {
    id: 1,
    title: 'Kecepatan Internet Tanpa Banding',
    subtitle: 'Nikmati browsing, streaming, dan gaming dengan kecepatan luar biasa',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop',
    bgColor: 'from-blue-600 to-blue-400'
  },
  {
    id: 2,
    title: 'Koneksi Stabil 24/7',
    subtitle: 'Layanan internet yang dapat diandalkan kapan saja, di mana saja',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=400&fit=crop',
    bgColor: 'from-cyan-600 to-cyan-400'
  },
  {
    id: 3,
    title: 'Harga Terjangkau untuk Semua',
    subtitle: 'Paket internet berkualitas dengan harga yang bersahabat untuk rumah dan bisnis',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=400&fit=crop',
    bgColor: 'from-indigo-600 to-indigo-400'
  },
  {
    id: 4,
    title: 'Dukungan Pelanggan Terbaik',
    subtitle: 'Tim support profesional siap membantu Anda kapan pun dibutuhkan',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop',
    bgColor: 'from-purple-600 to-purple-400'
  }
]

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const startAutoplay = () => {
  autoplayInterval.value = setInterval(() => {
    nextSlide()
  }, 5000)
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
    class="relative w-full h-96 overflow-hidden rounded-lg shadow-2xl"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <!-- Slides -->
    <div class="relative w-full h-full">
      <div
        v-for="(slide, index) in slides"
        :key="slide.id"
        :class="[
          'absolute w-full h-full transition-opacity duration-1000',
          currentSlide === index ? 'opacity-100' : 'opacity-0'
        ]"
      >
        <!-- Background Image -->
        <img
          :src="slide.image"
          :alt="slide.title"
          class="w-full h-full object-cover"
        />
        
        <!-- Dark Overlay Gradient -->
        <div :class="`absolute inset-0 bg-gradient-to-r ${slide.bgColor} opacity-60`"></div>
        
        <!-- Text Content -->
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">{{ slide.title }}</h2>
          <p class="text-lg md:text-xl opacity-95 drop-shadow-md">{{ slide.subtitle }}</p>
        </div>
      </div>
    </div>

    <!-- Previous Button -->
    <button
      @click="prevSlide"
      class="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
      aria-label="Slide sebelumnya"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    </button>

    <!-- Next Button -->
    <button
      @click="nextSlide"
      class="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
      aria-label="Slide berikutnya"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>

    <!-- Dots Indicator -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
      <button
        v-for="(_, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        :class="[
          'w-3 h-3 rounded-full transition-all duration-300',
          currentSlide === index 
            ? 'bg-white w-8' 
            : 'bg-white/50 hover:bg-white/75'
        ]"
        :aria-label="`Slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>
