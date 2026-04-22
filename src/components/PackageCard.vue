<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  speed: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  features: {
    type: Array,
    required: true
  },
  isPopular: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'home'
  }
})

const emit = defineEmits(['select'])
</script>

<template>
  <div
    :class="[
      'relative rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105',
      isPopular ? 'bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-500' : 'bg-white border border-gray-200'
    ]"
  >
    <!-- Popular Badge -->
    <div v-if="isPopular" class="absolute -top-4 left-1/2 -translate-x-1/2">
      <span class="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-bold">
        Paling Populer
      </span>
    </div>

    <div class="p-8">
      <!-- Icon -->
      <div class="mb-6">
        <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-3xl">
          {{ icon }}
        </div>
      </div>

      <!-- Title & Type -->
      <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ title }}</h3>
      <p class="text-sm text-gray-500 mb-4 capitalize">Untuk {{ type === 'home' ? 'Rumah' : 'Bisnis' }}</p>

      <!-- Speed -->
      <div class="mb-6 py-4 border-y border-gray-200">
        <p class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
          {{ speed }}
        </p>
        <p class="text-gray-600 text-sm mt-1">kecepatan download</p>
      </div>

      <!-- Price -->
      <div class="mb-6">
        <p class="text-5xl font-bold text-gray-900">
          Rp {{ price }}
          <span class="text-lg text-gray-500 font-normal">/bulan</span>
        </p>
      </div>

      <!-- Features -->
      <ul class="space-y-4 mb-8">
        <li v-for="(feature, index) in features" :key="index" class="flex items-start gap-3">
          <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          <span class="text-gray-700">{{ feature }}</span>
        </li>
      </ul>

      <!-- CTA Button -->
      <button
        @click="emit('select')"
        :class="[
          'w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 text-center',
          isPopular
            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:from-blue-700 hover:to-cyan-700'
            : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
        ]"
      >
        Pilih Paket Ini
      </button>
    </div>
  </div>
</template>
