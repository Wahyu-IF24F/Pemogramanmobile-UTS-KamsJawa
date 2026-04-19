export type TingkatBahasa = 'ngoko' | 'madya' | 'krama';

export interface Kata {
  jawa: string;
  indo: string;
  level: TingkatBahasa;
  kategori?: string;
}

export interface Kategori {
  nama: string;
  icon: string;
  jumlahKata: number;
  query: string;
}
