<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <img src="/logo.png" alt="WiFi Royal Logo" class="h-10 w-auto" />
          <span class="text-2xl font-bold text-gray-900"></span>
        </div>

        <div class="hidden md:flex items-center gap-8">
          <router-link to="/" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Beranda</router-link>
          <router-link :to="{ path: '/', hash: '#paket' }" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Paket</router-link>
          <router-link to="/cara-bayar" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Cara Bayar</router-link>
          <a href="https://pay.wifi-royal.net/login" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Client Area</a>
          <a href="https://wa.me/62859106900748?text=Halo%20WiFi%20Royal,%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20paket%20internet%20Anda" target="_blank" rel="noopener noreferrer" class="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
            Hubungi Kami
          </a>
        </div>

        <button
          @click="toggleMenu"
          class="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <div v-if="isMenuOpen" class="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
        <router-link to="/" @click="closeMenu" class="block py-2 text-gray-700 hover:text-blue-600">Beranda</router-link>
        <router-link :to="{ path: '/', hash: '#paket' }" @click="closeMenu" class="block py-2 text-gray-700 hover:text-blue-600">Paket</router-link>
        <router-link to="/cara-bayar" @click="closeMenu" class="block py-2 text-gray-700 hover:text-blue-600">Cara Bayar</router-link>
        <router-link to="/client-area" @click="closeMenu" class="block py-2 text-gray-700 hover:text-blue-600">Client Area</router-link>
        <a href="https://pay.wifi-royal.net/login" target="_blank" rel="noopener noreferrer" @click="closeMenu" class="block py-2 text-gray-700 hover:text-blue-600">Client Area</a>
        <a href="https://wa.me/62859106900748?text=Halo%20WiFi%20Royal,%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20paket%20internet%20Anda" target="_blank" rel="noopener noreferrer" @click="closeMenu" class="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg inline-block text-center">
          Hubungi Kami
        </a>
      </div>
    </nav>
  </header>
</template>
