import { Component } from '@angular/core';
import { Kategori } from '../../models/kata.model';
import { KamusService } from '../../services/kamus.service';

@Component({
  selector: 'app-edukasi',
  templateUrl: './edukasi.page.html',
  styleUrls: ['./edukasi.page.scss']
})
export class EdukasiPage {

  kategoriList: Kategori[] = [
    { nama: 'Sapaan',    icon: '👋', jumlahKata: 8,  query: 'sapaan'    },
    { nama: 'Tubuh',     icon: '🧍', jumlahKata: 28, query: 'tubuh'     },
    { nama: 'Makanan',   icon: '🍛', jumlahKata: 35, query: 'makanan'   },
    { nama: 'Angka',     icon: '🔢', jumlahKata: 20, query: 'angka'     },
    { nama: 'Kata Kerja',icon: '⚡', jumlahKata: 40, query: 'kata-kerja'},
    { nama: 'Alam',      icon: '🌿', jumlahKata: 18, query: 'alam'      },
  ];

  kataKategoriTerpilih: any[] = [];
  judulModal = '';
  modalTerbuka = false;

  constructor(private kamusService: KamusService) {}

  bukaKategori(kategori: Kategori): void {
    this.judulModal = kategori.nama;
    this.kataKategoriTerpilih = this.kamusService.getKataByKategori(kategori.query);
    this.modalTerbuka = true;
  }

  tutupModal(): void {
    this.modalTerbuka = false;
  }

  getLevelClass(level: string): string {
    const map: Record<string, string> = {
      ngoko: 'badge-ngoko',
      madya: 'badge-madya',
      krama: 'badge-krama'
    };
    return map[level] || '';
  }
}
