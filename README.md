# WiFi Royal - Platform Internet Service Provider

Website modern untuk penjualan paket internet rumah dan bisnis dengan desain yang elegan dan responsif.

## 📋 Deskripsi Proyek

WiFi Royal adalah website berbasis Vue.js 3 dan Tailwind CSS yang dirancang untuk menjual paket internet service provider (ISP). Website ini menampilkan:

- **Carousel Header** - Pemasaran dinamis dengan slide otomatis
- **Paket Internet Rumah** - 3 pilihan paket (Standar, Premium, Ultra)
- **Paket Internet Bisnis** - 3 pilihan paket profesional (Dasar, Profesional, Enterprise)
- **Section Fitur** - Keunggulan layanan WiFi Royal
- **Statistics** - Pencapaian dan kepercayaan pelanggan
- **Call-to-Action** - Mendorong pelanggan untuk menghubungi

## 🚀 Teknologi yang Digunakan

- **Vue.js 3** - Framework JavaScript reaktif
- **Vite** - Build tool modern dan cepat
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript ES6+** - Modern JavaScript syntax

## 📦 Instalasi

### Prerequisites
- Node.js v16+ dan npm

### Langkah Instalasi Lokal

```bash
# 1. Clone atau ekstrak proyek
cd royal.net.v1

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev

# 4. Akses di browser
# Local:   http://localhost:5173/
# Network: gunakan --host untuk expose ke network
```

## 🏗️ Build untuk Production

```bash
npm run build
npm run preview
```

## 🌐 Deployment ke cPanel

### Persiapan

1. **Build Proyek**
   ```bash
   npm run build
   ```
   Folder `dist/` akan tercipta berisi file production-ready.

### Upload ke cPanel

1. **Akses File Manager**
   - Login ke cPanel
   - Buka File Manager
   - Navigasi ke folder `public_html`

2. **Upload File**
   - Upload seluruh isi folder `dist/` ke `public_html`
   - Pastikan file `index.html` ada di root

3. **Configure .htaccess**
   - File `.htaccess` sudah tersedia
   - Pastikan di-upload ke `public_html`
   - Mengatur routing untuk Vue SPA

4. **Verifikasi mod_rewrite**
   - Pastikan Apache module `mod_rewrite` enabled

## 📱 Responsive Design

Optimized untuk semua devices:
- 📱 Mobile (320px+)
- 📲 Tablet (768px+)  
- 💻 Desktop (1024px+)

## 🎨 Customization

### Mengubah Warna
Edit `tailwind.config.js` untuk primary dan secondary colors.

### Menambah Paket
Edit array `homePackages` atau `businessPackages` di `src/App.vue`.

## 🔧 Project Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
```

## 📄 File Structure

```
src/
├── App.vue              # Main application
├── components/
│   ├── Header.vue       # Navigation header
│   ├── Carousel.vue     # Image carousel
│   ├── PackageCard.vue  # Package card component
│   └── Footer.vue       # Footer section
├── assets/
├── main.js              # Entry point
└── style.css            # Global styles
```

## 🎯 Features

✅ Responsive carousel dengan auto-play  
✅ Package cards dengan hover effects  
✅ Mobile-friendly navigation  
✅ Modern gradient designs  
✅ SEO-friendly structure  
✅ Performance optimized  
✅ Gzip compression enabled  

## 📞 Contact

- Email: info@wifi-royal.net
- Phone: +62 123 456 78

## 📄 License

© 2024 RoyalNet. All rights reserved.

---

**Build with ❤️ using Vue.js + Tailwind CSS**
