<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <Header />

    <main class="flex-grow">
      <router-view />
    </main>

    <Footer />
    <WhatsAppButton />
  </div>
</template>
