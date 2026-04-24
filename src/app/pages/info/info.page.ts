import { Component } from '@angular/core';

interface TingkatInfo {
  kode: string;
  label: string;
  deskripsi: string;
  cssClass: string;
}

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss']
})
export class InfoPage {
  appVersion = 'v1.0.0';
  lastUpdate = '24 April 2026';

  tingkatList: TingkatInfo[] = [
    {
      kode: 'Ngoko',
      label: 'Informal / Santai',
      deskripsi: 'Digunakan antar teman sebaya atau orang yang sudah akrab. Gaya bahasa yang rileks dan bebas.',
      cssClass: 'ngoko'
    },
    {
      kode: 'Madya',
      label: 'Semi Formal / Biasa',
      deskripsi: 'Tingkat menengah, digunakan kepada orang yang belum dikenal atau dalam situasi formal biasa.',
      cssClass: 'madya'
    },
    {
      kode: 'Krama',
      label: 'Formal / Hormat',
      deskripsi: 'Digunakan kepada orang yang lebih tua, dihormati, atau dalam acara resmi.',
      cssClass: 'krama'
    }
  ];

  panduanList = [
    { no: '1. ', teks: 'Ketik kata di kolom pencarian pada halaman Kamus' },
    { no: '2. ', teks: 'Filter berdasarkan tingkat bahasa (Ngoko, Madya, Krama)' },
    { no: '3. ', teks: 'Ketuk ⭐ untuk menyimpan kata ke halaman Favorit' },
    { no: '4. ', teks: 'Eksplorasi kategori kata di menu Edukasi' },
    { no: '5. ', teks: 'Geser item di Favorit ke kiri untuk menghapus' }
  ];
}
