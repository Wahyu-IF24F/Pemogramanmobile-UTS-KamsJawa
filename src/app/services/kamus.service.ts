import { Injectable } from '@angular/core';
import { Kata, TingkatBahasa } from '../models/kata.model';

@Injectable({
  providedIn: 'root'
})
export class KamusService {

  private daftarKata: Kata[] = [
    // Sapaan (8 kata)
    { jawa: 'aku',         indo: 'saya',           level: 'ngoko',  kategori: 'sapaan' },
    { jawa: 'kulo',        indo: 'saya',           level: 'krama',  kategori: 'sapaan' },
    { jawa: 'awakmu',      indo: 'kamu',           level: 'ngoko',  kategori: 'sapaan' },
    { jawa: 'sampeyan',    indo: 'kamu',           level: 'madya',  kategori: 'sapaan' },
    { jawa: 'panjenengan', indo: 'kamu (hormat)',  level: 'krama',  kategori: 'sapaan' },
    { jawa: 'halo',        indo: 'halo',           level: 'ngoko',  kategori: 'sapaan' },
    { jawa: 'sugeng',      indo: 'selamat',        level: 'krama',  kategori: 'sapaan' },
    { jawa: 'matur nuwun', indo: 'terima kasih',   level: 'krama',  kategori: 'sapaan' },
    
    // Kata Kerja (40 kata)
    { jawa: 'mangan',      indo: 'makan',          level: 'ngoko',  kategori: 'kata-kerja' },
    { jawa: 'dhahar',      indo: 'makan',          level: 'krama',  kategori: 'kata-kerja' },
    { jawa: 'turu',        indo: 'tidur',          level: 'ngoko',  kategori: 'kata-kerja' },
    { jawa: 'sare',        indo: 'tidur',          level: 'krama',  kategori: 'kata-kerja' },
    { jawa: 'lunga',       indo: 'pergi',          level: 'ngoko',  kategori: 'kata-kerja' },
    { jawa: 'kesah',       indo: 'pergi',          level: 'krama',  kategori: 'kata-kerja' },
    { jawa: 'tindak',      indo: 'jalan',          level: 'ngoko',  kategori: 'kata-kerja' },
    { jawa: 'mlaku',       indo: 'berjalan',       level: 'ngoko',  kategori: 'kata-kerja' },
    { jawa: 'ndheling',    indo: 'mendengar',      level: 'ngoko',  kategori: 'kata-kerja' },
    { jawa: 'mireng',      indo: 'mendengar',      level: 'krama',  kategori: 'kata-kerja' },
    { jawa: 'delok',       indo: 'melihat',        level: 'ngoko',  kategori: 'kata-kerja' },
    { jawa: 'sumerep',     indo: 'melihat',        level: 'krama',  kategori: 'kata-kerja' },
    { jawa: 'nulis',       indo: 'menulis',        level: 'ngoko',  kategori: 'kata-kerja' },
    { jawa: 'pun nulis',   indo: 'menulis',        level: 'krama',  kategori: 'kata-kerja' },
    { jawa: 'moco',        indo: 'membaca',        level: 'ngoko',  kategori: 'kata-kerja' },
    { jawa: 'waca',        indo: 'membaca',        level: 'krama',  kategori: 'kata-kerja' },
    { jawa: 'priksa',      indo: 'memeriksa',      level: 'ngoko',  kategori: 'kata-kerja' },
    { jawa: 'wawas',       indo: 'melihat dengan seksama', level: 'krama', kategori: 'kata-kerja' },
    { jawa: 'mbucal',      indo: 'membuka',        level: 'ngoko',  kategori: 'kata-kerja' },
    { jawa: 'buka',        indo: 'membuka',        level: 'madya',  kategori: 'kata-kerja' },
    { jawa: 'tutup',       indo: 'menutup',        level: 'ngoko',  kategori: 'kata-kerja' },
    { jawa: 'nutup',       indo: 'menutup',        level: 'krama',  kategori: 'kata-kerja' },
    { jawa: 'ambil',       indo: 'mengambil',      level: 'ngoko',  kategori: 'kata-kerja' },
    { jawa: 'gawa',        indo: 'membawa',        level: 'ngoko',  kategori: 'kata-kerja' },
    { jawa: 'angkat',      indo: 'mengangkat',     level: 'ngoko',  kategori: 'kata-kerja' },
    { jawa: 'pasang',      indo: 'memasang',       level: 'ngoko',  kategori: 'kata-kerja' },
    { jawa: 'wangun',      indo: 'bangun',         level: 'ngoko',  kategori: 'kata-kerja' },
    { jawa: 'tangi',       indo: 'bangun',         level: 'krama',  kategori: 'kata-kerja' },
    { jawa: 'lenggah',     indo: 'duduk',          level: 'ngoko',  kategori: 'kata-kerja' },
    { jawa: 'lungguh',     indo: 'duduk',          level: 'krama',  kategori: 'kata-kerja' },
    { jawa: 'nembah',      indo: 'sujud',          level: 'ngoko',  kategori: 'kata-kerja' },
    { jawa: 'ngomong',     indo: 'berbicara',      level: 'ngoko',  kategori: 'kata-kerja' },
    { jawa: 'guneman',     indo: 'berbicara',      level: 'krama',  kategori: 'kata-kerja' },
    { jawa: 'tanya',       indo: 'bertanya',       level: 'ngoko',  kategori: 'kata-kerja' },
    { jawa: 'pitakon',     indo: 'bertanya',       level: 'krama',  kategori: 'kata-kerja' },
    
    // Tubuh (28 kata)
    { jawa: 'kepala',      indo: 'kepala',         level: 'ngoko',  kategori: 'tubuh' },
    { jawa: 'mustaka',     indo: 'kepala',         level: 'krama',  kategori: 'tubuh' },
    { jawa: 'tangan',      indo: 'tangan',         level: 'ngoko',  kategori: 'tubuh' },
    { jawa: 'asta',        indo: 'tangan',         level: 'krama',  kategori: 'tubuh' },
    { jawa: 'kaki',        indo: 'kaki',           level: 'ngoko',  kategori: 'tubuh' },
    { jawa: 'suku',        indo: 'kaki',           level: 'krama',  kategori: 'tubuh' },
    { jawa: 'jari',        indo: 'jari',           level: 'ngoko',  kategori: 'tubuh' },
    { jawa: 'driji',       indo: 'jari',           level: 'krama',  kategori: 'tubuh' },
    { jawa: 'mata',        indo: 'mata',           level: 'ngoko',  kategori: 'tubuh' },
    { jawa: 'soca',        indo: 'mata',           level: 'krama',  kategori: 'tubuh' },
    { jawa: 'kuping',      indo: 'telinga',        level: 'ngoko',  kategori: 'tubuh' },
    { jawa: 'pandhenggo',  indo: 'telinga',        level: 'krama',  kategori: 'tubuh' },
    { jawa: 'irung',       indo: 'hidung',         level: 'ngoko',  kategori: 'tubuh' },
    { jawa: 'grana',       indo: 'hidung',         level: 'krama',  kategori: 'tubuh' },
    { jawa: 'cangkem',     indo: 'mulut',          level: 'ngoko',  kategori: 'tubuh' },
    { jawa: 'tutuk',       indo: 'mulut',          level: 'krama',  kategori: 'tubuh' },
    { jawa: 'ulam',        indo: 'lidah',          level: 'ngoko',  kategori: 'tubuh' },
    { jawa: 'jelihah',     indo: 'lidah',          level: 'krama',  kategori: 'tubuh' },
    { jawa: 'hati',        indo: 'hati',           level: 'ngoko',  kategori: 'tubuh' },
    { jawa: 'atma',        indo: 'hati',           level: 'krama',  kategori: 'tubuh' },
    { jawa: 'puser',       indo: 'pusar',          level: 'ngoko',  kategori: 'tubuh' },
    { jawa: 'biyung',      indo: 'perut',          level: 'ngoko',  kategori: 'tubuh' },
    { jawa: 'draya',       indo: 'perut',          level: 'krama',  kategori: 'tubuh' },
    { jawa: 'dada',        indo: 'dada',           level: 'ngoko',  kategori: 'tubuh' },
    { jawa: 'balung',      indo: 'tulang',         level: 'ngoko',  kategori: 'tubuh' },
    { jawa: 'racuk',       indo: 'otot',           level: 'ngoko',  kategori: 'tubuh' },
    { jawa: 'kulit',       indo: 'kulit',          level: 'ngoko',  kategori: 'tubuh' },
    { jawa: 'kutha',       indo: 'kulit',          level: 'krama',  kategori: 'tubuh' },
    
    // Makanan (35 kata)
    { jawa: 'sega',        indo: 'nasi',           level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'sekul',       indo: 'nasi',           level: 'krama',  kategori: 'makanan' },
    { jawa: 'wedang',      indo: 'minuman panas',  level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'tuwak',       indo: 'tuak',           level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'uyah',        indo: 'garam',          level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'garem',       indo: 'garam',          level: 'krama',  kategori: 'makanan' },
    { jawa: 'pelem',       indo: 'mangga',         level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'woh',         indo: 'buah',           level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'buah',        indo: 'buah',           level: 'madya',  kategori: 'makanan' },
    { jawa: 'gula',        indo: 'gula',           level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'telo',        indo: 'ubi',            level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'beras',       indo: 'beras',          level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'dhele',       indo: 'kedelai',        level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'kacang',      indo: 'kacang',         level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'kraton',      indo: 'kerupuk',        level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'gorengan',    indo: 'gorengan',       level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'tahu',        indo: 'tahu',           level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'tempe',       indo: 'tempe',          level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'telur',       indo: 'telur',          level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'endhog',      indo: 'telur',          level: 'krama',  kategori: 'makanan' },
    { jawa: 'daging',      indo: 'daging',         level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'ikan',        indo: 'ikan',           level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'ayam',        indo: 'ayam',           level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'iwak',        indo: 'ikan',           level: 'krama',  kategori: 'makanan' },
    { jawa: 'layur',       indo: 'layur',          level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'cah',         indo: 'tumis',          level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'goreng',      indo: 'goreng',         level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'rebus',       indo: 'rebus',          level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'kuah',        indo: 'kuah',           level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'soto',        indo: 'soto',           level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'garang',      indo: 'pedas',          level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'amis',        indo: 'amis',           level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'asem',        indo: 'asam',           level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'legi',        indo: 'manis',          level: 'ngoko',  kategori: 'makanan' },
    { jawa: 'endhog asin', indo: 'telur asin',     level: 'ngoko',  kategori: 'makanan' },
    
    // Angka (20 kata)
    { jawa: 'siji',        indo: 'satu',           level: 'ngoko',  kategori: 'angka' },
    { jawa: 'setunggal',   indo: 'satu',           level: 'krama',  kategori: 'angka' },
    { jawa: 'loro',        indo: 'dua',            level: 'ngoko',  kategori: 'angka' },
    { jawa: 'kalih',       indo: 'dua',            level: 'krama',  kategori: 'angka' },
    { jawa: 'telu',        indo: 'tiga',           level: 'ngoko',  kategori: 'angka' },
    { jawa: 'tiga',        indo: 'tiga',           level: 'madya',  kategori: 'angka' },
    { jawa: 'papat',       indo: 'empat',          level: 'ngoko',  kategori: 'angka' },
    { jawa: 'sekawan',     indo: 'empat',          level: 'krama',  kategori: 'angka' },
    { jawa: 'lima',        indo: 'lima',           level: 'ngoko',  kategori: 'angka' },
    { jawa: 'nem',         indo: 'enam',           level: 'ngoko',  kategori: 'angka' },
    { jawa: 'pitu',        indo: 'tujuh',          level: 'ngoko',  kategori: 'angka' },
    { jawa: 'wolu',        indo: 'delapan',        level: 'ngoko',  kategori: 'angka' },
    { jawa: 'sanga',       indo: 'sembilan',       level: 'ngoko',  kategori: 'angka' },
    { jawa: 'sepuluh',     indo: 'sepuluh',        level: 'ngoko',  kategori: 'angka' },
    { jawa: 'likur',       indo: 'dua puluh',      level: 'ngoko',  kategori: 'angka' },
    { jawa: 'tlusung',     indo: 'tiga puluh',     level: 'ngoko',  kategori: 'angka' },
    { jawa: 'patang puluh', indo: 'empat puluh',   level: 'ngoko',  kategori: 'angka' },
    { jawa: 'satus',       indo: 'seratus',        level: 'ngoko',  kategori: 'angka' },
    { jawa: 'sewu',        indo: 'seribu',         level: 'ngoko',  kategori: 'angka' },
    { jawa: 'sejuta',      indo: 'sejuta',         level: 'ngoko',  kategori: 'angka' },
    
    // Alam (18 kata)
    { jawa: 'omah',        indo: 'rumah',          level: 'ngoko',  kategori: 'alam' },
    { jawa: 'griya',       indo: 'rumah',          level: 'krama',  kategori: 'alam' },
    { jawa: 'banyu',       indo: 'air',            level: 'ngoko',  kategori: 'alam' },
    { jawa: 'toya',        indo: 'air',            level: 'krama',  kategori: 'alam' },
    { jawa: 'sikil',       indo: 'sungai',         level: 'ngoko',  kategori: 'alam' },
    { jawa: 'jaladri',     indo: 'laut',           level: 'krama',  kategori: 'alam' },
    { jawa: 'blumbang',    indo: 'danau',          level: 'ngoko',  kategori: 'alam' },
    { jawa: 'segara',      indo: 'laut',           level: 'ngoko',  kategori: 'alam' },
    { jawa: 'gunung',      indo: 'gunung',         level: 'ngoko',  kategori: 'alam' },
    { jawa: 'giri',        indo: 'gunung',         level: 'krama',  kategori: 'alam' },
    { jawa: 'sela',        indo: 'bukit',          level: 'ngoko',  kategori: 'alam' },
    { jawa: 'lembah',      indo: 'lembah',         level: 'ngoko',  kategori: 'alam' },
    { jawa: 'wana',        indo: 'hutan',          level: 'krama',  kategori: 'alam' },
    { jawa: 'alas',        indo: 'hutan',          level: 'ngoko',  kategori: 'alam' },
    { jawa: 'lembu',       indo: 'sapi',           level: 'ngoko',  kategori: 'alam' },
    { jawa: 'pitik',       indo: 'ayam',           level: 'ngoko',  kategori: 'alam' },
    { jawa: 'manuk',       indo: 'burung',         level: 'ngoko',  kategori: 'alam' },
    { jawa: 'paksi',       indo: 'burung',         level: 'krama',  kategori: 'alam' },
  ];

  getSemuaKata(): Kata[] {
    return [...this.daftarKata];
  }

  cariKata(query: string, level: TingkatBahasa | 'semua'): Kata[] {
    const q = query.toLowerCase().trim();
    return this.daftarKata.filter(kata => {
      const cocokLevel = level === 'semua' || kata.level === level;
      const cocokQuery = !q || kata.jawa.includes(q) || kata.indo.includes(q);
      return cocokLevel && cocokQuery;
    });
  }

  getKataByKategori(kategori: string): Kata[] {
    return this.daftarKata.filter(k => k.kategori === kategori);
  }
}
