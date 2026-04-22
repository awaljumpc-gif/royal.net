# 🚀 Panduan Lengkap Deployment WiFi Royal ke cPanel

## Persiapan Awal

Sebelum melakukan deployment, pastikan Anda telah:
1. ✅ Build proyek dengan `npm run build`
2. ✅ Memiliki akses cPanel
3. ✅ Mengetahui domain/subdomain yang akan digunakan
4. ✅ Hosting memiliki Node.js support (tidak wajib, tapi opsional)

## Langkah-Langkah Deployment

### 1. Build Proyek Lokal (Sudah Selesai ✓)

```bash
npm run build
```

Folder `dist/` telah dibuat berisi seluruh file siap production.

**Hasil build meliputi:**
- `dist/index.html` - Main HTML file
- `dist/assets/` - CSS dan JavaScript bundle
- `.htaccess` - Konfigurasi routing Apache

### 2. Akses cPanel File Manager

1. Login ke cPanel Anda
2. Cari dan buka **File Manager**
3. Pastikan berada di folder **public_html** (untuk domain utama)
4. Untuk subdomain, masuk ke folder subdomain terlebih dahulu

### 3. Upload File Dist ke cPanel

**Opsi A: Upload via Interface (Recommended untuk file kecil)**

1. Di File Manager cPanel, klik tombol **Upload**
2. Pilih folder `dist` dari komputer lokal
3. Tunggu hingga upload selesai (biasanya cepat karena file kecil)

**Opsi B: Upload via Terminal/FTP (Untuk batch upload)**

Menggunakan FTP Client (FileZilla, Trello, dll):
```
Host: your-domain.com
Username: cPanel username
Password: cPanel password
Mode: Passive (Active jika passive tidak bekerja)
Port: 21
```

Upload isi folder `dist/` ke `public_html/`

### 4. Upload .htaccess

**⚠️ PENTING: File .htaccess menentukan routing SPA Anda**

1. Pastikan file `.htaccess` dari project root sudah siap
2. Upload ke folder `public_html/`
3. Pastikan file visible di cPanel (Hidden file mungkin perlu diaktifkan)

**Untuk membuat file .htaccess tetap visible:**
1. Di File Manager, klik **Settings** (atas kanan)
2. Centang **Show Hidden Files**
3. Klik **Save**

### 5. Verifikasi Konfigurasi Apache

Hubungi pihak hosting atau cek di cPanel apakah:
- ✅ Module `mod_rewrite` sudah enabled
- ✅ `.htaccess` bisa diubah (AllowOverride)

Biasanya sudah default enabled. Jika tidak, request ke support hosting.

### 6. Test Website Anda

1. Buka domain Anda di browser: `https://yourdomain.com`
2. Pastikan homepage menampilkan dengan benar
3. Test navigation:
   - Klik link "Beranda", "Paket", "Tentang", "Kontak"
   - Pastikan URL berubah tanpa error 404

### 7. Troubleshooting

**Problem: Halaman blank atau error 404**
- ✅ Pastikan `index.html` ada di `public_html`
- ✅ Pastikan `.htaccess` di-upload dengan benar
- ✅ Clear browser cache (Ctrl+Shift+Delete)
- ✅ Hard refresh browser (Ctrl+F5)

**Problem: CSS/JS tidak muncul (styling broken)**
- ✅ Check network tab di DevTools (F12)
- ✅ Pastikan folder `assets/` ada dan berisi file
- ✅ Check file paths relatif vs absolute

**Problem: Carousel tidak bergerak**
- ✅ Check browser console (F12 > Console)
- ✅ Pastikan JavaScript file berhasil diload
- ✅ Coba refresh halaman

## Struktur File Setelah Deploy

```
public_html/
├── .htaccess                    ← Penting!
├── index.html                   ← Entry point
├── favicon.svg
├── icons.svg
└── assets/
    ├── index-B-R9F9Xv.css      ← CSS bundle
    └── index-B15TDjGs.js       ← JavaScript bundle
```

## Optimisasi SEO

Untuk meningkatkan SEO, edit `src/App.vue` dan tambahkan di `<head>`:

```html
<meta name="description" content="RoyalNet - Penyedia Internet Terpercaya">
<meta name="keywords" content="internet, isp, rumah, bisnis, cepat">
<meta name="author" content="RoyalNet">
```

## Performance Monitoring

Setelah upload, monitor performa:

1. **Test Speed** - Gunakan tools seperti:
   - Google PageSpeed Insights
   - GTmetrix
   - WebPageTest

2. **Monitor Uptime** - Gunakan uptime monitor service

3. **Check Logs** - Di cPanel Error Logs untuk debug

## Maintenance Tips

### Update Konten
1. Edit file di local
2. Run `npm run build`
3. Upload folder `dist/` yang baru ke cPanel
4. Clear cache browser Anda (Ctrl+Shift+Delete)

### Backup
Secara berkala backup file di cPanel:
1. File Manager → Select folder → Compress
2. Download file backup
3. Simpan safe

### SSL Certificate
⭐ Pastikan domain punya SSL:
1. Di cPanel → AutoSSL atau Let's Encrypt
2. Aktifkan auto-renewal
3. Force HTTPS redirect di `.htaccess` (sudah disertakan)

## Support & Contact

Jika ada masalah:
1. Check error logs di cPanel
2. Contact hosting provider
- Email: info@wifi-royal.net (untuk issues aplikasi)

---

## Quick Checklist

```
Sebelum Deploy:
☐ npm run build berhasil
☐ Folder dist/ terbuat
☐ .htaccess siap
☐ Akses cPanel berfungsi

Saat Deploy:
☐ Upload semua isi dist/
☐ Upload .htaccess
☐ Set hidden files visible di cPanel
☐ Check mod_rewrite enabled

Setelah Deploy:
☐ Test homepage load
☐ Test navigation links
☐ Test carousel animation
☐ Check assets load (F12 Network)
☐ Clear cache & hard refresh
☐ Test di mobile device
```

---

**Selamat! Website WiFi Royal Anda sudah live! 🎉**

**Build dengan ❤️ menggunakan Vue.js + Tailwind CSS**
