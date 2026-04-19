# 📖 Kamus Basa Jawa

Aplikasi kamus Bahasa Jawa mobile berbasis **Ionic + Angular (NgModule)** dengan fitur pencarian kata, filter tingkat bahasa, edukasi kategori kata, dan daftar favorit.

---

## ✨ Fitur

| Halaman     | Fitur                                                         |
|-------------|---------------------------------------------------------------|
| **Kamus**   | Cari kata, filter Ngoko/Madya/Krama, tandai favorit ⭐        |
| **Edukasi** | Grid kategori kata (Sapaan, Tubuh, Makanan, Angka, dll)      |
| **Favorit** | Daftar kata tersimpan, swipe-to-delete, hapus semua          |
| **Info**    | Penjelasan tingkat bahasa & panduan penggunaan               |

---

## 🛠 Teknologi

- **Ionic Framework** v7
- **Angular** v17 — NgModule pattern
- **Capacitor** v5 — build Android & iOS
- **RxJS** — reactive state (BehaviorSubject)
- **localStorage** — persistensi data favorit

---

## 🚀 Cara Menjalankan

### 1. Install dependency

```bash
npm install
```

### 2. Jalankan di browser (development)

```bash
ionic serve
# atau
npm start
```

Buka `http://localhost:8100` di browser.

---

## 📱 Build ke Android

```bash
# 1. Build web assets
ionic build

# 2. Sync ke Capacitor
npx cap sync android

# 3. Buka di Android Studio
npx cap open android
```

Pastikan sudah menginstall **Android Studio** dan **JDK 17+**.

---

## 📱 Build ke iOS (macOS only)

```bash
ionic build
npx cap sync ios
npx cap open ios
```

Pastikan sudah menginstall **Xcode 14+**.

---

## 📁 Struktur Project

```
kamus-jawa/
├── src/
│   ├── app/
│   │   ├── app.module.ts              ← Root NgModule
│   │   ├── app-routing.module.ts      ← Routing utama
│   │   ├── app.component.ts
│   │   │
│   │   ├── models/
│   │   │   └── kata.model.ts          ← Interface Kata & Kategori
│   │   │
│   │   ├── services/
│   │   │   ├── kamus.service.ts       ← Data & logika pencarian
│   │   │   └── favorit.service.ts     ← State favorit (BehaviorSubject)
│   │   │
│   │   └── pages/
│   │       ├── tabs/                  ← Shell navigasi tab bawah
│   │       │   ├── tabs.module.ts
│   │       │   ├── tabs-routing.module.ts
│   │       │   ├── tabs.page.ts
│   │       │   └── tabs.page.html
│   │       │
│   │       ├── kamus/                 ← Halaman Kamus utama
│   │       │   ├── kamus.module.ts
│   │       │   ├── kamus-routing.module.ts
│   │       │   ├── kamus.page.ts
│   │       │   ├── kamus.page.html
│   │       │   └── kamus.page.scss
│   │       │
│   │       ├── edukasi/               ← Halaman Kategori
│   │       │   ├── edukasi.module.ts
│   │       │   ├── edukasi-routing.module.ts
│   │       │   ├── edukasi.page.ts
│   │       │   ├── edukasi.page.html
│   │       │   └── edukasi.page.scss
│   │       │
│   │       ├── favorit/               ← Halaman Kata Favorit
│   │       │   ├── favorit.module.ts
│   │       │   ├── favorit-routing.module.ts
│   │       │   ├── favorit.page.ts
│   │       │   ├── favorit.page.html
│   │       │   └── favorit.page.scss
│   │       │
│   │       └── info/                  ← Halaman Tentang Aplikasi
│   │           ├── info.module.ts
│   │           ├── info-routing.module.ts
│   │           ├── info.page.ts
│   │           ├── info.page.html
│   │           └── info.page.scss
│   │
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   │
│   ├── theme/
│   │   └── variables.scss             ← Ionic CSS Variables & dark mode
│   │
│   ├── global.scss                    ← Global style overrides
│   ├── index.html
│   └── main.ts
│
├── capacitor.config.ts                ← Konfigurasi Capacitor
├── angular.json
├── ionic.config.json
├── package.json
└── tsconfig.json
```

---

## 🎨 Warna Tema

| Elemen       | Warna       |
|--------------|-------------|
| Primary      | `#1D9E75`   |
| Ngoko badge  | `#E1F5EE` / `#0F6E56` |
| Madya badge  | `#E6F1FB` / `#185FA5` |
| Krama badge  | `#EEEDFE` / `#534AB7` |

---

## 🔧 Menambahkan Kata Baru

Edit file `src/app/services/kamus.service.ts`, tambahkan objek baru ke array `daftarKata`:

```typescript
{ jawa: 'mlaku', indo: 'berjalan', level: 'ngoko', kategori: 'kata-kerja' },
{ jawa: 'tindak', indo: 'berjalan', level: 'krama', kategori: 'kata-kerja' },
```

---

## 📦 Deploy ke Web (PWA)

```bash
npm run build:prod
# Output ada di folder /www — deploy ke server statis (Netlify, Vercel, Firebase Hosting, dll)
```

---

*Dibuat dengan ❤️ menggunakan Ionic + Angular*
