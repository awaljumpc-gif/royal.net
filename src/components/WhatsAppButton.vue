<template>
  <a
    href="https://wa.me/62859106900748?text=Halo%20WiFi%20Royal,%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20paket%20internet%20Anda"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 group sm:bottom-6 sm:right-6 sm:p-4 md:bottom-8 md:right-8"
    title="Hubungi kami via WhatsApp"
  >
    <!-- WhatsApp Icon -->
    <svg 
      class="w-6 h-6 transition-transform group-hover:scale-110 flex-shrink-0"
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.864 1.235c-1.504.857-2.882 2.009-3.968 3.368C3.304 9.867 2.5 11.583 2.5 13.585c0 1.474.292 2.885.822 4.197l-1.306 4.77c-.135.492.364.902.831.732l4.719-1.563a9.868 9.868 0 004.434 1.073h.006c5.442 0 9.884-4.418 9.884-9.873 0-2.636-.997-5.116-2.813-6.976-1.815-1.859-4.22-2.881-6.814-2.881"/>
    </svg>
    
    <!-- Tooltip Label -->
    <span class="hidden sm:inline-block text-sm font-semibold whitespace-nowrap">
      Chat dengan kami
    </span>
  </a>
</template>

<style scoped>
@media (max-width: 640px) {
  a {
    bottom: 1rem;
    right: 1rem;
    padding: 0.75rem;
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
}
</style>
