# 📖 Kamus Basa Jawa

Aplikasi kamus Bahasa Jawa mobile berbasis **Ionic + Angular ** dengan fitur pencarian kata, filter tingkat bahasa, edukasi kategori kata, dan daftar favorit.

---

## ✨ Fitur

| Halaman     | Fitur                                                         |
|-------------|---------------------------------------------------------------|
| **Kamus**   | Cari kata, filter Ngoko/Madya/Krama, tandai favorit ⭐        |
| **Edukasi** | Grid kategori kata (Sapaan, Tubuh, Makanan, Angka, dll)      |
| **Favorit** | Daftar kata tersimpan, swipe-to-delete, hapus semua          |
| **Info**    | Penjelasan tingkat bahasa & panduan penggunaan               |




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

