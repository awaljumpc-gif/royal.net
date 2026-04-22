# 📝 Panduan Customization WiFi Royal

Dokumen ini menjelaskan cara mengubah dan mengoptimalkan website RoyalNet sesuai kebutuhan Anda.

## 1. Mengubah Teks & Konten

### Mengubah Nama Brand

Edit file `src/components/Header.vue` dan `src/components/Footer.vue`:

```vue
<!-- Dari: -->
<span class="text-2xl font-bold">RoyalNet</span>

<!-- Menjadi: -->
<span class="text-2xl font-bold">NamaBrandAnda</span>
```

### Mengubah Data Paket Internet

Edit file `src/App.vue`, cari section `homePackages` dan `businessPackages`:

```javascript
const homePackages = [
  {
    id: 1,
    icon: '🏠',
    title: 'Paket Rumah Standar',
    speed: '30 Mbps',
    price: '149.000',  // Ubah harga di sini
    isPopular: false,
    type: 'home',
    features: [
      'Download hingga 30 Mbps',  // Ubah fitur di sini
      'Upload hingga 5 Mbps',
      // Tambah/kurangi fitur sesuai kebutuhan
    ]
  }
]
```

### Mengubah Marketing Message di Carousel

Edit array `slides` di `src/components/Carousel.vue`:

```javascript
const slides = [
  {
    id: 1,
    title: 'Kecepatan Internet Tanpa Banding',  // Ubah judul
    subtitle: 'Nikmati browsing, streaming, dan gaming dengan kecepatan luar biasa',  // Ubah subtitle
    bgColor: 'bg-gradient-to-r from-blue-600 to-blue-400'  // Ubah warna
  }
]
```

## 2. Mengubah Warna & Tema

### Mengubah Warna Brand Utama

Edit `tailwind.config.js`:

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066cc',      // Warna biru brand Anda
        secondary: '#00d4ff',    // Warna cyan accent
      },
    },
  },
}
```

Jika ingin menggunakan warna custom di entire project, ganti semua `from-blue-600` menjadi `from-[#warnamu]`.

### Mengubah Gradient Background

Cari semua `bg-gradient-to-r from-blue-600 to-cyan-600` dan ubah dengan warna pilihan Anda.

**Popular Gradients:**
- Merah ke Orange: `from-red-600 to-orange-600`
- Ungu ke Pink: `from-purple-600 to-pink-600`
- Hijau ke Teal: `from-green-600 to-teal-600`

## 3. Menambah Paket Baru

### Tambah Paket Rumah Baru

Di `src/App.vue`, tambahkan object baru ke array `homePackages`:

```javascript
const homePackages = [
  // ... paket existing ...
  {
    id: 4,                           // ID unik baru
    icon: '🌟',                      // Icon/emoji
    title: 'Paket Rumah Spesial',    // Nama paket
    speed: '150 Mbps',               // Kecepatan
    price: '199.000',                // Harga per bulan
    isPopular: true,                 // Tandai sebagai populer (optional)
    type: 'home',                    // Tipe: 'home' atau 'business'
    features: [                      // Daftar fitur
      'Download hingga 150 Mbps',
      'Upload hingga 25 Mbps',
      'Router WiFi 6 gratis',
      'Instalasi gratis',
      'Dukungan 24/7'
    ]
  }
]
```

Paket akan otomatis muncul di halaman!

## 4. Menambah Section Baru

### Setup Development Server Dulu

```bash
npm run dev
```

Akses di `http://localhost:5173/`

### Buat Component Baru

1. Buat file `src/components/BagiuBaru.vue`
2. Tambahkan di `src/App.vue`:

```vue
<script setup>
import BagianBaru from './components/BagianBaru.vue'
</script>

<template>
  <!-- ... sebelumnya ... -->
  <BagianBaru />
  <!-- ... sesudahnya ... -->
</template>
```

## 5. Mengubah Kontak & Email

### Update Informasi Kontak

Di `src/components/Footer.vue`:

```vue
<li class="flex items-center gap-2">
  <svg class="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
  </svg>
  <!-- Ganti email di sini -->
  <a href="mailto:email-anda@domain.com" class="hover:text-white transition-colors">
    email-anda@domain.com
  </a>
</li>
```

### Update Link Social Media

Di `src/components/Footer.vue`, update semua `href="#"` dengan URL social media Anda:

```vue
<a href="https://facebook.com/yourusername" class="text-gray-400 hover:text-cyan-500">
```

## 6. SEO Optimization

### Tambah Meta Tags

Edit `index.html`:

```html
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- SEO Meta Tags -->
  <meta name="description" content="RoyalNet - Penyedia Internet Terpercaya untuk Rumah dan Bisnis">
  <meta name="keywords" content="internet, isp, provider, rumah, bisnis">
  <meta name="author" content="RoyalNet">
  <meta property="og:title" content="RoyalNet - Internet Terpercaya">
  <meta property="og:description" content="Layanan internet berkecepatan tinggi dengan harga terjangkau">
  
  <title>RoyalNet - Penyedia Internet Terpercaya</title>
</head>
```

## 7. Menambah Image/Logo

1. Simpan image di folder `src/assets/`
2. Import di component:

```vue
<script setup>
import logoImage from '@/assets/logo.png'
</script>

<template>
  <img :src="logoImage" alt="Logo" class="w-10 h-10">
</template>
```

## 8. Build & Deploy

### Build untuk Production

```bash
npm run build
```

Folder `dist/` akan berisi file siap deploy.

### Preview Sebelum Deploy

```bash
npm run preview
```

Akses di `http://localhost:4173/` untuk lihat preview production build.

### Deploy ke cPanel

Ikuti DEPLOYMENT_GUIDE.md untuk step-by-step instructions.

## 9. Troubleshooting Development

### Port 5173 sudah terpakai

```bash
npm run dev -- --port 3000
```

### Clear Cache npm

```bash
npm cache clean --force
npm install
```

### Build Error - Dependencies

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 10. File Struktur Project

```
royal.net.v1/
├── src/
│   ├── App.vue                  # Main file - Edit di sini untuk konten
│   ├── main.js                  # Entry point
│   ├── style.css                # Global styles
│   ├── components/
│   │   ├── Header.vue           # Navigation bar - Edit untuk branding
│   │   ├── Carousel.vue         # Marketing carousel - Edit slides
│   │   ├── PackageCard.vue      # Card component - View only
│   │   └── Footer.vue           # Footer - Edit kontak & social
│   └── assets/                  # Images, icons, dll
├── tailwind.config.js           # Tailwind config - Edit untuk styling
├── vite.config.js               # Build config - Biasanya tidak perlu diubah
├── .htaccess                    # Apache routing - JANGAN DIUBAH
├── index.html                   # HTML utama - Edit judul & meta
├── package.json                 # Dependencies
└── README.md                    # Dokumentasi

```

## 11. Performance Tips

1. **Compress Images** - Gunakan TinyPNG untuk image optimization
2. **Use CDN** - Pertimbangkan Cloudflare untuk caching
3. **Monitor Speed** - Google PageSpeed Insights
4. **Optimize Fonts** - Gunakan sistem fonts default (sudah optimal)

## 12. Keamanan Basic

✅ Sudah implemented:
- Gzip compression di `.htaccess`
- Cache headers untuk static files
- HTTPS redirect ready

Tambah di production:
- Update tahun copyright di Footer
- Pastikan contact forms di-validate
- Regular backups

---

**Butuh Bantuan?**
- Check README.md untuk overview
- Check DEPLOYMENT_GUIDE.md untuk deployment
- Dokumentasi Vue: https://vuejs.org
- Dokumentasi Tailwind: https://tailwindcss.com

**Happy Customizing! 🎉**
