import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Kata, TingkatBahasa } from '../../models/kata.model';
import { KamusService } from '../../services/kamus.service';
import { FavoritService } from '../../services/favorit.service';

type FilterLevel = 'semua' | TingkatBahasa;

@Component({
  selector: 'app-kamus',
  templateUrl: './kamus.page.html',
  styleUrls: ['./kamus.page.scss']
})
export class KamusPage implements OnInit, OnDestroy {

  searchQuery = '';
  selectedLevel: FilterLevel = 'semua';
  kataTampil: Kata[] = [];

  readonly tabs: { label: string; value: FilterLevel }[] = [
    { label: 'Semua',  value: 'semua' },
    { label: 'Ngoko',  value: 'ngoko' },
    { label: 'Madya',  value: 'madya' },
    { label: 'Krama',  value: 'krama' }
  ];

  private favSub!: Subscription;

  constructor(
    private kamusService: KamusService,
    public favoritService: FavoritService
  ) {}

  ngOnInit(): void {
    this.filterKata();
    // Refresh tampilan saat favorit berubah
    this.favSub = this.favoritService.favorit$.subscribe(() => {
      this.filterKata();
    });
  }

  ngOnDestroy(): void {
    this.favSub?.unsubscribe();
  }

  filterKata(): void {
    this.kataTampil = this.kamusService.cariKata(
      this.searchQuery,
      this.selectedLevel
    );
  }

  setLevel(level: FilterLevel): void {
    this.selectedLevel = level;
    this.filterKata();
  }

  toggleFavorit(kata: Kata, event: Event): void {
    event.stopPropagation();
    this.favoritService.toggleFavorit(kata);
  }

  getLevelClass(level: TingkatBahasa): string {
    const map: Record<TingkatBahasa, string> = {
      ngoko: 'badge-ngoko',
      madya: 'badge-madya',
      krama: 'badge-krama'
    };
    return map[level];
  }

  trackByJawa(_: number, kata: Kata): string {
    return kata.jawa;
  }
}
