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

  tingkatList: TingkatInfo[] = [
    {
      kode: 'Ngoko',
      label: 'Informal',
      deskripsi: 'Digunakan antar teman sebaya atau orang yang sudah akrab.',
      cssClass: 'badge-ngoko'
    },
    {
      kode: 'Madya',
      label: 'Semi Formal',
      deskripsi: 'Tingkat menengah, digunakan kepada orang yang belum dikenal.',
      cssClass: 'badge-madya'
    },
    {
      kode: 'Krama',
      label: 'Formal / Hormat',
      deskripsi: 'Digunakan kepada orang yang lebih tua atau dihormati.',
      cssClass: 'badge-krama'
    }
  ];

  panduanList = [
    { no: '1', teks: 'Ketik kata di kolom pencarian pada halaman Kamus' },
    { no: '2', teks: 'Filter berdasarkan tingkat bahasa (Ngoko, Madya, Krama)' },
    { no: '3', teks: 'Ketuk ⭐ untuk menyimpan kata ke halaman Favorit' },
    { no: '4', teks: 'Eksplorasi kategori kata di menu Edukasi' },
    { no: '5', teks: 'Geser item di Favorit ke kiri untuk menghapus' },
  ];
}
