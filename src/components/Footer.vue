<template>
  <footer class="bg-gray-900 text-white mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- Company Info -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="WiFi Royal Logo" class="h-10 w-auto" />
            <span class="text-2xl font-bold"></span>
          </div>
          <p class="text-gray-400 text-sm">
            Penyedia layanan internet terpercaya untuk kebutuhan rumah dan bisnis Anda.
          </p>
        </div>

        <!-- Services -->
        <div>
          <h4 class="font-bold mb-4 text-lg">Layanan</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><a href="#" class="hover:text-white transition-colors">Internet Rumah</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Internet Bisnis</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Dukungan Teknis</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Instalasi</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="font-bold mb-4 text-lg">Perusahaan</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><router-link to="/tentang" class="hover:text-white transition-colors">Tentang Kami</router-link></li>
            <li><router-link to="/karir" class="hover:text-white transition-colors">Karir</router-link></li>
            <li><router-link to="/blog" class="hover:text-white transition-colors">Blog</router-link></li>
            <li><router-link to="/berita" class="hover:text-white transition-colors">Berita</router-link></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-bold mb-4 text-lg">Hubungi Kami</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <a href="mailto:info@wifi-royal.net" class="hover:text-white transition-colors">info@wifi-royal.net</a>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.457 1.428 1.477 3.122 2.82 4.465a4.986 4.986 0 004.465 2.82l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <a href="tel:+628158022260" class="hover:text-white transition-colors">+62 815 80 222 60</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-800 pt-8">
        <!-- Social Links -->
        <div class="flex justify-center gap-6 mb-6">
          <a href="#" class="text-gray-400 hover:text-cyan-500 transition-colors">
            <span class="sr-only">Facebook</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-cyan-500 transition-colors">
            <span class="sr-only">Twitter</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.593 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-cyan-500 transition-colors">
            <span class="sr-only">Instagram</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08a11.717 11.717 0 01-4.043-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path></svg>
          </a>
        </div>

        <!-- Bottom Info -->
        <div class="text-center text-gray-400 text-sm border-t border-gray-800 pt-8">
          <p>&copy; 2024 WiFi Royal. Hak Cipta Dilindungi. Semua hak reserved.</p>
          <div class="flex justify-center gap-6 mt-4">
            <a href="#" class="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" class="hover:text-white transition-colors">Syarat Layanan</a>
            <a href="https://wa.me/62859106900748?text=Halo%20WiFi%20Royal,%20saya%20ingin%20mendapatkan%20dukungan%20teknis" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Hubungi Dukungan</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
